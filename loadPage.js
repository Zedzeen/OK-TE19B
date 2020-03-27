function loadPage(){
let site = localStorage.getItem("site");
    if (site != "new" || site != "old"){
        site = "old";
        localStorage.setItem("site", site);
    }
    window.location.href = site+"/index.html";
}