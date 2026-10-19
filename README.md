# Nexus AI — Phase 1

A premium, responsive AI SaaS dashboard built with React + Vite. **This is a frontend demo; AI replies are simulated.** No authentication, backend, paid API, or cloud sync is connected.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite (typically http://localhost:5173).

## Quality checks
```bash
npm run lint
npm run build
npm run preview
```

## Features
- Overview dashboard with tool shortcuts and usage counters
- Chat with clearly labeled simulated responses
- Recent conversations and history (localStorage)
- Delete chats, new conversations, responsive sidebar
- Settings for compact spacing
- Accessible controls and reduced-motion support

## Repository workflow
1. Create an **empty** GitHub repository named `nexus-ai` (do not initialize with a README).
2. From the extracted project directory:
```bash
git init
git add .
git commit -m "chore: initialize Nexus AI dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexus-ai.git
git push -u origin main
git switch -c develop
git push -u origin develop
```
3. For new work: `git switch develop && git pull && git switch -c feature/your-feature`.
4. Push your feature branch and open a pull request targeting `develop`.
5. Merge tested `develop` changes into `main` through a pull request.

## File structure
```
index.html
src/
  main.jsx
  App.jsx
  styles.css
  lib/storage.js
vite.config.js
eslint.config.js
package.json
```

## Notes
- Data is stored only in your current browser and can be lost if you clear site data.
- The temporary name and mock AI responses should be replaced before public launch.
- Do not put model API keys in frontend code or `VITE_` environment variables. Phase 2 should use a secure backend.
- For production SPA hosting, configure a fallback to `index.html` for client-side routes.
