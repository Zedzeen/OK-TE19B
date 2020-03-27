let site = localStorage.getItem("site");
if (site != "new" || site != "old") localStorage.setItem("site", "old");
window.location.href = site+"/index.html";
