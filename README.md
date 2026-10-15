# Constitucionalismo Feminista

Placeholder site for [constitucionalismo-feminista.com](https://constitucionalismo-feminista.com). The page says the site is under construction.

## Locales

| Path | What it shows |
| --- | --- |
| `/` | Returns to the locale already in use, or detects the browser language |
| `/-/` | Detects the browser language |
| `/br/` | Em construção (Brazilian Portuguese) |
| `/en/` | Under construction (English) |

If the browser language starts with `pt`, a first visit to `/` or any visit to `/-/` goes to `/br/`. Any other language goes to `/en/`. After a locale page has loaded, `/` keeps that locale. Without JavaScript, `/` and `/-/` list both links.

## Preview

Paths are rooted at the site (`/br/`, `/en/`), so open the folder with a static server from the repository root:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/`.
