# Maliki Bakers — Website

A multi-page site for Maliki Bakers (Mombasa &amp; Nairobi): Home, Menu, About, Locations, Contact.

Plain HTML/CSS/JS — no build tools, no framework, works directly on GitHub Pages.

## What's here

```
malikibakers/
├── index.html         Home
├── menu.html           Menu (cake catalog + everyday bakes)
├── about.html          About
├── locations.html      Locations
├── contact.html        Contact
├── order.html           Cake order form -> WhatsApp checkout
├── css/style.css        All styling
├── js/script.js          Mobile nav, contact form, outlet tabs
├── js/order.js            Order page: live price calc + WhatsApp handoff
└── images/                Put real photos here
```

## How ordering works

There's no payment processor here (that needs a real backend/merchant account),
so `order.html` does the next best thing: the customer picks a cake, size, and
branch, sees the price calculated live, then taps "Confirm via WhatsApp" —
this opens WhatsApp with their order pre-filled as a message to
0722 925 612. Maximiller confirms availability and arranges payment directly
with the customer from there.

To change the WhatsApp number this goes to, edit the `PHONE` value at the top
of `js/order.js`.

To add a real payment gateway later (M-Pesa STK push, card payments, etc.)
you'd need a backend service — that's a bigger project than a static site can
do alone; happy to help scope that whenever you're ready for it.

## Before going live — one thing left

Only the **street addresses** are still placeholders (in index.html and
locations.html, marked `[Street, area, ...]`) — everything else on the site
is filled in with real information. I didn't invent addresses because a
wrong one sends customers to the wrong place; drop in the real ones whenever
you have them.

Also still empty: **photos** (images/ folder — see images/README.md) and the
homepage's inspirational quote (currently a generic unattributed line, in
index.html's `.quote-banner` section) if you want to swap it for a real
Maximiller quote.

## Current pricing (as of last update)

- Cakes, no fillings (strawberry, vanilla, lemon, piña colada, blueberry): **KES 2,000/kg**
- Chocolate, orange: **KES 2,500/kg**
- Red velvet, white forest, black forest: **KES 2,800/kg**
- No half-kilo cakes — 1kg is the minimum size
- Wedding/custom cakes: **75% deposit required upfront**
- Cake decorating classes: **KES 15,000**, 5 days, includes certificate
- Mombasa branch: 0722 925 612 — Nairobi branch: 0726 637 388

To change any of these, edit menu.html directly, and update the matching
`data-price` values in order.html's flavour dropdown so the order form stays
in sync.

## Running it locally in VS Code

1. Open the `malikibakers` folder in VS Code (`File > Open Folder`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` → **Open with Live Server**. It'll open in your browser and auto-refresh as you edit.

## Publishing to GitHub, then going live

### 1. Create the GitHub repo
- Go to github.com → New repository → name it `malikibakers` → keep it **Public** (required for free GitHub Pages) → Create repository. Don't add a README/gitignore there since you already have these files.

### 2. Push this project to it
From inside the `malikibakers` folder, in VS Code's terminal (`Terminal > New Terminal`):

```bash
git init
git add .
git commit -m "Initial site: home, menu, about, locations, contact"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/malikibakers.git
git push -u origin main
```

(Replace `YOUR-USERNAME` with your actual GitHub username. If you already cloned the repo from GitHub into VS Code instead of running `git init`, skip straight to `git add .`.)

### 3. Turn on GitHub Pages
- On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
- Under "Build and deployment", set **Source** to **Deploy from a branch**.
- Set **Branch** to `main`, folder `/ (root)` → **Save**.
- Wait 1–2 minutes. Your site will be live at:
  `https://YOUR-USERNAME.github.io/malikibakers/`

### 4. Making future changes
Any time you edit files in VS Code:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

GitHub Pages redeploys automatically within a minute or two of each push.

## Optional upgrades later
- **Custom domain** (e.g. malikibakers.com): buy a domain, then in repo Settings → Pages, add it under "Custom domain" and follow GitHub's DNS instructions.
- **Working contact form**: sign up free at formspree.io, get a form endpoint, and change the `<form>` tag in contact.html to point `action` at that endpoint (Formspree's docs show the exact HTML).
- **Real map embeds**: Google Maps → search the branch → Share → Embed a map → paste the iframe into locations.html.
