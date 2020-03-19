function classRedirect() {
  var link;

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
    case 6:
      teknikdag = false;
      mattedag = false;
      svenskadag = false;
      samhallskunskapdag = false;
      historiadag = false;
      engelskadag = false;
      mentorstiddag = false;
      break;
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
  }

  switch(currentHour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
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
    link = "https://meet.google.com/kzd-jawn-frn";
  }

  if(mattedag && mattetimme) {
    link = "https://meet.google.com/wkf-bbxo-fjv";
  }

  if(svenskadag && svenskatimme) {
    link = "https://meet.google.com/zoc-xsea-ghi";
  }

  if(samhallskunskapdag && samhallskunskaptimme) {
    link = "https://meet.google.com/pwg-znqn-ebe";
  }

  if(historiadag && historiatimme) {
    link = "https://meet.google.com/nih-octd-scd";
  }

  if(engelskadag && engelskatimme) {
    link = "https://meet.google.com/vqn-zyxk-vme";
  }

  if(mentorstiddag && mentorstidtimme) {
    link = "https://meet.google.com/iqp-evan-hir";
  }


}

classRedirect();
