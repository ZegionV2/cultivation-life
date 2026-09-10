# Cultivation Life

A React + Vite + TypeScript Murim life simulation with character creation, a scrolling life journal, martial school, NPC profiles, cultivation, jobs and inventory.

## Run locally
Use Node.js 22.6 or newer.

```sh
npm install
npm run dev
```

## Verify
```sh
npm test
npm run build
```

## Deploy to Vercel
Import this repository, select the Vite preset, use `npm run build`, and publish the `dist` output directory. No environment variables are required. A private repository in your personal GitHub account can be used.

## Design and scope
See [GAME_CONCEPT.md](GAME_CONCEPT.md) for the current implementation and roadmap. The original brief is preserved in [docs/ORIGINAL_GAME_CONCEPT.md](docs/ORIGINAL_GAME_CONCEPT.md).

Progress saves in localStorage for one life per browser/origin. New Life replaces the save after confirmation. NPC portraits and player artwork are supplied project assets; no general redistribution license is granted by this repository.
# cultivation-life
