/* Coordonnées : renseigner les valeurs ci-dessous. Un champ vide masque le lien correspondant. */
const CONFIG = {
  whatsapp: "237687403177",
  email: "bangcadress@gmail.com",
  linkedin: "",
  github: "https://github.com/Cadressbrill",
  facebook: "",
  cv: "cv/CV-Cadress-Brill.pdf",
  shopwave: ""    // URL de la version en ligne
};

(function () {
  var hrefs = {
    whatsapp: CONFIG.whatsapp && "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, ""),
    email: CONFIG.email && "mailto:" + CONFIG.email
  };
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.dataset.link;
    var href = hrefs[key] !== undefined ? hrefs[key] : CONFIG[key];
    if (!href) {
      (el.closest("li") || el).hidden = true;
      return;
    }
    el.href = href;
  });
  if (window.lucide) lucide.createIcons();
})();
