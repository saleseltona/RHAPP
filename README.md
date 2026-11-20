# HEROES HR Dashboard

A static HR dashboard template built with vanilla JavaScript, Tailwind CSS, and Vite. The public demo needs no login, backend, or API keys.

[Open the live demo](https://laluarifta.github.io/heroes_hr_dashboard-/)

![HEROES dashboard preview showing the attendance chart, HR metrics, news, and interviews](docs/images/dashboard-preview.png)

Explore attendance and workforce metrics, the employee directory, job listings, a recruiting board, and leave requests. This is a frontend demo: it starts with sample data, and supported edits are stored only in the current browser. It does not sync data or connect to HR services. Do not enter real employee information.

## Start locally

Use Node.js 24 LTS and npm. Click **Use this template** on GitHub to start an independent repository, or clone this repository to explore the demo.

```sh
npm ci
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

## Project layout

```text
index.html                 Page markup and dashboard views
src/
  main.js                  Dashboard interactions and browser state
  data/demo-state.js       Sample employees, jobs, candidates, events, and leave
  styles/main.css          Tailwind entry and custom styles
public/
  avatars/                 Demo profile images
  favicon.svg              Site icon
docs/images/               README preview
.github/workflows/         GitHub Pages build and deploy
tailwind.config.js         Theme tokens
vite.config.js             Build configuration
```

Edit `src/data/demo-state.js` for sample records, `tailwind.config.js` for theme colors, and `index.html` for layout and copy. If you have already opened the demo, clear the site's browser storage to see changes to the sample records.

## Deploy

For a new GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. Push to `main` or run **Deploy GitHub Pages** manually in the Actions tab. For another static host, publish the `dist/` directory. Asset paths support both a domain root and a repository subdirectory.

The demo uses [Plus Jakarta Sans](https://fontsource.org/fonts/plus-jakarta-sans), [Font Awesome Free](https://fontawesome.com/), and sample portraits from [Unsplash](https://unsplash.com/license).
