# Mochi
Mochi is a web application that generates quick and creative recipes based on the ingredients you have at home.

## Live Production

Check out the live application here: https://trymochi.netlify.app <br />
Current Status: <picture>![Status](https://api.netlify.com/api/v1/badges/6559a415-f2f0-49e7-b87e-e814d8b28416/deploy-status)</picture>

<picture>![alt text](https://github.com/sohan-bhat/Mochi/blob/main/screenshots/SplashPage.png)</picture>
<picture>![alt text](https://github.com/sohan-bhat/Mochi/blob/main/screenshots/IngredientsPage.png)</picture>
<picture>![alt text](https://github.com/sohan-bhat/Mochi/blob/main/screenshots/ResultsPage.png)</picture>

## Features

- **User-Friendly Interface:** Designed for ease of use, allowing you to get recipe ideas in seconds.
- **Quick Results:** Perfect for busy lifestyles by getting recipe suggestions without the hassle of searching through cookbooks.
- **Customizable Options:** Adapt recipes based on dietary preferences or additional available ingredients.

## Local development

Mochi runs on Vite and requires Node.js 20.11+ (use `nvm use` to pick up the version pinned in `.nvmrc`).

```bash
nvm use
npm install
cp .env.example .env       # then add your VITE_GROQ_API_KEY
npm run dev                # http://localhost:3000
```

Other scripts:

- `npm run build` — production build into `build/`
- `npm run preview` — preview the production build locally
