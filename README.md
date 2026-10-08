# ☀️ sunny.hub

Sunny Mishra's personal hub — native Android apps, AI projects, and everything shipped.

**Live:** https://sunnymishraatf-lgtm.github.io/sunny-hub/

## How it works

The whole site renders from [`data.js`](data.js). To add something new, just add an entry:

- **APPS** — `{ name, tagline, description, version, size, icon, download, source, featured }`
- **GAMES** — `{ name, tagline, description, icon, play, featured }` (play = path like `games/neon-hover/`)
- **PROJECTS** — `{ name, description, tags, repo, demo }`
- **LINKS** — `{ label, url, icon }`

No build step. No frameworks. Edit, commit, push — GitHub Pages serves it.

## Local preview

```sh
npx serve .
# or
python3 -m http.server 8000
```
