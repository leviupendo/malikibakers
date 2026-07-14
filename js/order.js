// Maliki Bakers — order page logic
// Live price calc + WhatsApp checkout handoff (no payment backend needed)

(function () {
  var BRANCH_PHONES = {
    'Mombasa': '254722925612',
    'Nairobi': '254726637388'
  };

  document.addEventListener('DOMContentLoaded', function () {
    var flavourEl = document.getElementById('flavour');
    var weightEl = document.getElementById('weight');
    var branchEl = document.getElementById('branch');
    var candlesEl = document.getElementById('addon-candles');
    var messageEl = document.getElementById('addon-message');
    var nameEl = document.getElementById('custname');
    var notesEl = document.getElementById('notes');
    var waBtn = document.getElementById('whatsapp-order-btn');
    var depositNote = document.getElementById('deposit-note');

    if (!flavourEl) return; // not on the order page

    // Preselect flavour from ?cake=slug in the URL (set by the Menu page's Order buttons)
    var params = new URLSearchParams(window.location.search);
    var cakeParam = params.get('cake');
    if (cakeParam) {
      var match = Array.from(flavourEl.options).find(function (o) {
        return o.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === cakeParam.toLowerCase();
      });
      if (match) flavourEl.value = match.value;
    }

    function formatKES(n) {
      return 'KES ' + n.toLocaleString('en-KE');
    }

    function recalc() {
      var weight = parseFloat(weightEl.value);
      var selectedOption = flavourEl.options[flavourEl.selectedIndex];
      var pricePerKg = parseFloat(selectedOption.getAttribute('data-price')) || 2000;
      var cakePrice = Math.round(weight * pricePerKg);
      var addons = 0;
      if (candlesEl.checked) addons += 50;

      var total = cakePrice + addons;
      var isCustom = selectedOption.value.indexOf('Custom') === 0;

      document.getElementById('sum-flavour').textContent = flavourEl.value;
      document.getElementById('sum-weight').textContent = weightEl.value + ' kg';
      document.getElementById('sum-cake-price').textContent = formatKES(cakePrice) + ' (' + formatKES(pricePerKg) + '/kg)';
      document.getElementById('sum-addons').textContent = formatKES(addons);
      document.getElementById('sum-branch').textContent = branchEl.value;
      document.getElementById('sum-total').textContent = formatKES(total);

      depositNote.style.display = isCustom ? 'block' : 'none';

      var lines = [
        'Hi Maliki Bakers! I would like to order:',
        '',
        'Cake: ' + flavourEl.value,
        'Weight: ' + weightEl.value + ' kg',
        'Branch: ' + branchEl.value,
        'Add-ons: ' + (candlesEl.checked ? 'Candles' : 'None') + (messageEl.checked ? ', Personalised message' : ''),
        'Estimated total: ' + formatKES(total) + (isCustom ? ' (75% deposit required to confirm)' : '')
      ];
      if (nameEl.value.trim()) lines.push('Name: ' + nameEl.value.trim());
      if (notesEl.value.trim()) lines.push('Notes: ' + notesEl.value.trim());

      var text = encodeURIComponent(lines.join('\n'));
      var phone = BRANCH_PHONES[branchEl.value] || BRANCH_PHONES['Mombasa'];
      waBtn.href = 'https://wa.me/' + phone + '?text=' + text;
    }

    [flavourEl, weightEl, branchEl, candlesEl, messageEl, nameEl, notesEl].forEach(function (el) {
      el.addEventListener('input', recalc);
      el.addEventListener('change', recalc);
    });

    waBtn.addEventListener('click', function () {
      document.getElementById('step2').classList.add('active');
    });

    recalc();
  });
})();
