# Agent rules

## Outbound links and UTM

Every HTML page must load `/utm.js` before `</body>`.

`utm.js` adds `utm_source=constitucionalismo-feminista.com` to external `http` and `https` links (`<a href>`), including links inserted after load. Write the plain URL in the HTML. Do not add `utm_source` by hand.

Leave these links unchanged:

- Lattes and any other host that is `cnpq.br` or a subdomain of it, such as `lattes.cnpq.br`. A query string breaks those addresses.
- Same-site links, including the `www` and apex forms of the current host.
- `mailto:` and `tel:` links.
- Links that already have `utm_source`.

New outbound links must be `<a href="https://...">` elements so the script can see them.

```html
<!-- external: the script adds utm_source -->
<a href="https://www.instagram.com/constitucionalismo.feminista/">Instagram</a>

<!-- Lattes: leave the href exactly like this -->
<a href="http://lattes.cnpq.br/1234567890123456">Lattes</a>
```
