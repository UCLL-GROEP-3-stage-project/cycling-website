# cycling-website

A website where you and some of your friends can choose a race and then choose cyclers. Those cyclers gain points after each individual race.

## Angular app

This repository now contains an Angular app with routing and API loading.

- Home page: `/`
- Races page: `/races`
- API data page: `/api-data` (loads data via `HttpClient` from `/api/races.json`)

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200.

## Test

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```
