function changeLink(url) {
  url = classRedirect();
  var win = window.open(url, '_blank');
  win.focus();
}

function classRedirect() {
  var link = "https://discord.gg/AZRdg4";
  var tn = "Discord";
  var ln = "Rast";

  var teknikdag = false;
  var mattedag = false;
  var svenskadag = false;
  var samhallskunskapdag = false;
  var historiadag = false;
  var engelskadag = false;
  var mentorstiddag = false;

  var tekniktimme = false;
  var mattetimme = false;
  var svenskatimme = false;
  var samhallskunskaptimme = false;
  var historiatimme = false;
  var engelskatimme = false;
  var mentorstidtimme = false;
  
  var time = new Date();
  var currentDay = time.getDay();
  var currentHour = time.getHours();

  switch(currentDay) {
    case 0:
    case 1:
      teknikdag = true;
      mattedag = false;
      svenskadag = false;
      samhallskunskapdag = true;
      historiadag = false;
      engelskadag = false;
      mentorstiddag = false;
      break;
    case 2:
      teknikdag = true;
      mattedag = true;
      svenskadag = true;
      samhallskunskapdag = false;
      historiadag = false;
      engelskadag = false;
      mentorstiddag = false;
      break;
    case 3:
      teknikdag = false;
      mattedag = true;
      svenskadag = true;
      samhallskunskapdag = false;
      historiadag = false;
      engelskadag = false;
      mentorstiddag = false;
      break;
    case 4:
      teknikdag = true;
      mattedag = false;
      svenskadag = false;
      samhallskunskapdag = true;
      historiadag = true;
      engelskadag = true;
      mentorstiddag = false;
      break;
    case 5:
      teknikdag = false;
      mattedag = true;
      svenskadag = false;
      samhallskunskapdag = false;
      historiadag = true;
      engelskadag = true;
      mentorstiddag = true;
      break;
    case 6:
      teknikdag = false;
      mattedag = false;
      svenskadag = false;
      samhallskunskapdag = false;
      historiadag = false;
      engelskadag = false;
      mentorstiddag = false;
      break;
  }

  switch(currentHour) {
    default: 
      break;
    
    case 23:
      tekniktimme = false;
      mattetimme = false;
      svenskatimme = false;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
    case 8:
      tekniktimme = true;
      mattetimme = true;
      svenskatimme = false;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
    case 9:
      tekniktimme = true;
      mattetimme = true;
      svenskatimme = true;
      samhallskunskaptimme = false;
      historiatimme = true;
      engelskatimme = false;
      mentorstidtimme = false;
    case 10:
      tekniktimme = true;
      mattetimme = false;
      svenskatimme = true;
      samhallskunskaptimme = false;
      historiatimme = true;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
    case 11:
      tekniktimme = true;
      mattetimme = false;
      svenskatimme = true;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
    case 12:
      tekniktimme = false;
      mattetimme = false;
      svenskatimme = true;
      samhallskunskaptimme = true;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = true;
      break;
    case 13:
      tekniktimme = false;
      mattetimme = false;
      svenskatimme = true;
      samhallskunskaptimme = true;
      historiatimme = false;
      engelskatimme = true;
      mentorstidtimme = true;
      break;
    case 14:
      tekniktimme = false;
      mattetimme = true;
      svenskatimme = false;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = true;
      mentorstidtimme = false;
      break;
    case 15:
      tekniktimme = true;
      mattetimme = true;
      svenskatimme = false;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
    case 16:
      tekniktimme = true;
      mattetimme = true;
      svenskatimme = false;
      samhallskunskaptimme = false;
      historiatimme = false;
      engelskatimme = false;
      mentorstidtimme = false;
      break;
  }

  if(teknikdag && tekniktimme) {
    link = "https://meet.google.com/toh-xdmy-kwd";
    tn = "Kalles Kaviar";
    ln = "Teknik";
  }

  if(mattedag && mattetimme) {
    link = "https://meet.google.com/wkf-bbxo-fjv";
    tn = "Björn";
    ln = "Matte";
  }

   if(svenskadag && svenskatimme) {
    link = "https://meet.google.com/zoc-xsea-ghi";
    tn = "Pontus";
    ln = "Svenska";
  }

   if(samhallskunskapdag && samhallskunskaptimme) {
    link = "https://meet.google.com/pwg-znqn-ebe";
    tn = "Uffe";
    ln = "Samhällskunskap";
  }

   if(historiadag && historiatimme) {
    link = "https://meet.google.com/nih-octd-scd";
    tn = "Uffe";
    ln = "Historia";
  }

   if(engelskadag && engelskatimme) {
    link = "https://meet.google.com/vqn-zyxk-vme";
    tn = "Eirina";
    ln = "Engurish";
  }

   if(mentorstiddag && mentorstidtimme) {
    link = "https://meet.google.com/iqp-evan-hir";
    tn = "Ulrika";
    ln = "Mentorstid";
  }

  //link = "https://meet.google.com/iqp-evan-hir?authuser=1";
  //alert(link);
  document.getElementById("meetlink").innerHTML = link;
  document.getElementById("TN").innerHTML = tn;
  document.getElementById("LN").innerHTML = ln;
  return link;
}
