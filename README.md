# Maliki Bakers — Website

A multi-page site for Maliki Bakers (Mombasa &amp; Nairobi): Home, Menu, About, Locations, Contact.

Plain HTML/CSS/JS — no build tools, no framework, works directly on GitHub Pages.

## What's here

```
malikibakers/
├── index.html         Home
├── menu.html           Menu
├── about.html          About
├── locations.html      Locations
├── contact.html        Contact
├── css/style.css        All styling
├── js/script.js          Mobile nav + contact form behaviour
└── images/                Put real photos here
```

## Before going live — replace these placeholders

Search each file for square brackets `[ ... ]` — everything in brackets is a
placeholder. In particular:

- **Addresses, hours, phone numbers** — index.html, locations.html, contact.html
- **Email** — currently `hello@malikibakers.example` in every page's footer, and contact.html
- **Menu items and prices** — menu.html (currently a starter menu, not the real one)
- **About page story** — about.html (currently placeholder copy)
- **Photos** — images/ folder is empty; see images/README.md
- **Instagram/Facebook links** — currently point to `instagram.com/malikibakers` and `facebook.com/malikibakers` as guesses. Update the `href` values in the footer of every HTML file with the real page URLs.

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
