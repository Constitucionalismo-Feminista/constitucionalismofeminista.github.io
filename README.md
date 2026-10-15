# Constitucionalismo Feminista

Placeholder site for [constitucionalismo-feminista.com](https://constitucionalismo-feminista.com). The page says the site is under construction.

## Locales

| Path | What it shows |
| --- | --- |
| `/` | Detects the browser language and redirects |
| `/-/` | Same detection as `/` |
| `/br/` | Em construção (Brazilian Portuguese) |
| `/en/` | Under construction (English) |

If the browser language starts with `pt`, `/` and `/-/` go to `/br/`. Any other language goes to `/en/`. Without JavaScript, those pages list both links.

## Preview

Paths are rooted at the site (`/br/`, `/en/`), so open the folder with a static server from the repository root:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/`.
