# Peerly Education website

A lightweight, single-page website for Peerly Education. It uses plain HTML, CSS and JavaScript, so it can be hosted free on GitHub Pages without a build step.

## Preview locally

From the repository root, run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/`.

## Configure before publishing

Open `config.js` and add:

- the published Google Forms URL;
- a public contact email, if one will be used.

The public phone number and the Boroondara and Mount Waverley service area are already set in `config.js`.

The booking button accepts a URL beginning with `https://docs.google.com/forms/`. Until one is supplied, the button is visibly disabled and explains that configuration is pending.

The Google Form should ask for the parent or guardian's name, email, phone number, child's year level, tutoring subject, online or in-person preference, and optional additional information. Do not request the child's full name.

Complete the owner details in `privacy.html` before publication.

## Edit content and prices

Website text, tutor names, services and pricing are in `index.html`. Colours, type and layout are in `assets/styles.css`.

## Publish with GitHub Pages

1. Create a public GitHub repository named `peerly-education`.
2. Rename the current local branch with `git branch -M main`, then push these files. Keep `index.html` in the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then save.
6. Wait for GitHub to show the live URL. It should be `https://USERNAME.github.io/peerly-education/`.
7. Check the live site before printing or sharing a QR code.

All asset links are relative, so the site works from a project URL ending in `/peerly-education/`.

## Generate the final QR code

Only run this after the public URL has been verified:

```powershell
python -m pip install -r requirements-qr.txt
python scripts/generate-qr.py https://USERNAME.github.io/peerly-education/
```

The script creates a high-resolution PNG, an SVG and a destination record in `qr-code/`. The QR code uses a four-module quiet zone and high error correction.

Poster wording:

> Ready to Make Learning Fun?
>
> Scan to Learn More & Book Your Free Trial!
