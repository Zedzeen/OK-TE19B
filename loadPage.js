window.addEventListener("load", function() {
    var site = localStorage.getItem("site");
    if (site != "new" && site != "old"){
        site = "old";
        localStorage.setItem("site", site);
    }
    window.location.href = site;
});
