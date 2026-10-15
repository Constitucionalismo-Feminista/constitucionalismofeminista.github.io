(function () {
  var SOURCE = "constitucionalismo-feminista.com";

  function sameSite(hostname) {
    var current = location.hostname.toLowerCase().replace(/^www\./, "");
    var host = hostname.toLowerCase().replace(/^www\./, "");
    return host === current;
  }

  function isCnpq(hostname) {
    var host = hostname.toLowerCase();
    return host === "cnpq.br" || host.endsWith(".cnpq.br");
  }

  function tag(anchor) {
    var href = anchor.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    var url;
    try {
      url = new URL(href, location.href);
    } catch (e) {
      return;
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") return;
    if (sameSite(url.hostname)) return;
    if (isCnpq(url.hostname)) return;
    if (url.searchParams.has("utm_source")) return;
    url.searchParams.set("utm_source", SOURCE);
    anchor.href = url.href;
  }

  function tagAll(root) {
    var links = root.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) tag(links[i]);
  }

  tagAll(document);

  if (!window.MutationObserver || !document.documentElement) return;
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var nodes = mutations[i].addedNodes;
      for (var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        if (!node || node.nodeType !== 1) continue;
        if (node.matches && node.matches("a[href]")) tag(node);
        if (node.querySelectorAll) tagAll(node);
      }
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
