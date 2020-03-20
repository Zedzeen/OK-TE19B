const KLASSINFO = [
  ["Teknik","Kalles Kaviar","https://meet.google.com/toh-xdmy-kwd"],
  ["Matte", "Björn", "https://meet.google.com/wkf-bbxo-fjv"],
  ["Svenska", "Pontus", "https://meet.google.com/zoc-xsea-ghi"],
  ["Samhällskunskap", "Uffe", "https://meet.google.com/nih-octd-scd"],
  ["Historia", "Uffe", "https://meet.google.com/nih-octd-scd",],
  ["Engelska", "Erina", "https://meet.google.com/vqn-zyxk-vme"],
  ["Mentorstid", "Ulrika", "https://meet.google.com/iqp-evan-hir"],
  ["Idrott", "Micke", "Finns ingen än"]
];


function changeLink(url) {
  url = classRedirect();
  var tab = window.open(url, '_blank');
  tab.focus();
}

function manRedirect(url) {
  var tab = window.open(KLASSINFO[url][2], '_blank');
  tab.focus();
}


function classRedirect() {
  const RAST     = 0;
  const TEKNIK   = 1;
  const MATTE    = 2;
  const SVENSKA  = 3;
  const SAM      = 4;
  const HISTORIA = 5;
  const ENGELSKA = 6;
  const MENTOR   = 7;
  const IDROTT   = 8;

  const LECTURE = 0;
  const TEACHER = 1;
  const LINK    = 2;

  const RASTINFO = ["Rast", "Discord", "https://discord.gg/AZRdg4"];

  //teknik, matte, svenska, sam, historia, engelska, mentorstid
  var har = [];
  var lektionStart = [];
  var lektionEnd   = [];
  var lektion;

  var time = new Date();
  var currentDay = time.getDay();
  var currentHour = time.getHours();

  var time = new Date();
  var currentDay = time.getDay();
  var currentHour = time.getHours();

  switch(currentDay) {
    default:
    for (var i = 0; i<har.length; i++){
      har[i] = false;
      lektionStart[i] = 0;
      lektionEnd[i] = 0;
    }
    break;
    case 1:
    har[TEKNIK]  = true;
    har[MATTE]   = false;
    har[SVENSKA] = false;
    har[SAM]     = true;
    har[HISTORIA]= false;
    har[ENGELSKA]= false;
    har[MENTOR]  = false;
    har[IDROTT]  = true;

    lektionStart[TEKNIK] = 8;
    lektionEnd[TEKNIK]   = 9;

    lektionStart[IDROTT] = 10;
    lektionEnd[IDROTT]   = 11;

    lektionStart[SAM]    = 12;
    lektionEnd[SAM]      = 13;

    break;

    case 2:
    har[TEKNIK]   = true;
    har[MATTE]    = true;
    har[SVENSKA]  = true;
    har[SAM]      = false;
    har[HISTORIA] = false;
    har[ENGELSKA] = false;
    har[MENTOR]   = false;

    lektionStart[TEKNIK]  = 9;
    lektionEnd[TEKNIK]    = 11;

    lektionStart[SVENSKA] = 12;
    lektionEnd[SVENSKA]   = 13;

    lektionStart[MATTE]   = 13;
    lektionEnd[MATTE]     = 16;

    break;

    case 3:
    har[TEKNIK]   = false;
    har[MATTE]    = true;
    har[SVENSKA]  = true;
    har[SAM]      = false;
    har[HISTORIA] = false;
    har[ENGELSKA] = false;
    har[MENTOR]   = false;
    har[IDROTT]   = true;

    lektionStart[MATTE]   = 8
    lektionEnd[MATTE]     = 9

    lektionStart[SVENSKA] = 9
    lektionEnd[SVENSKA]   = 11

    lektionStart[IDROTT]  = 13
    lektionEnd[IDROTT]    = 14

    break;

    case 4:
    har[TEKNIK]  = true;
    har[MATTE]   = false;
    har[SVENSKA] = false;
    har[SAM]     = true;
    har[HISTORIA]= true;
    har[ENGELSKA]= true;
    har[MENTOR]  = false;

    lektionStart[HISTORIA] = 9;
    lektionEnd[HISTORIA]   = 11;

    lektionStart[SAM]      = 12;
    lektionEnd[SAM]        = 13;

    lektionStart[ENGELSKA] = 13;
    lektionEnd[ENGELSKA]   = 15;

    lektionStart[TEKNIK]   = 15;
    lektionEnd[TEKNIK]     = 16;

    break;

    case 5:
    har[TEKNIK]  = false;
    har[MATTE]   = true;
    har[SVENSKA] = false;
    har[SAM]     = false;
    har[HISTORIA]= true;
    har[ENGELSKA]= true;
    har[MENTOR]  = true;

    lektionStart[MATTE]    = 8;
    lektionEnd[MATTE]      = 9;

    lektionStart[HISTORIA] = 10;
    lektionEnd[HISTORIA]   = 11;

    lektionStart[MENTOR]   = 12;
    lektionEnd[MENTOR]     = 13;

    lektionStart[ENGELSKA] = 13;
    lektionEnd[ENGELSKA]   = 15;

    break;
  }

  for (var i = 0; i<lektionStart.length; i++){
    if (currentHour >= lektionStart[i] && currentHour <= lektionEnd[i]) lektion = i;
    else lektion = RAST;
  }

  var ln, tn , link, goto;

  if (lektion != RAST){
    lecture   = KLASSINFO[lektion][LECTURE];
    teacher   = KLASSINFO[lektion][TEACHER];
    link = KLASSINFO[lektion][LINK];
    //if (link == "Finns ingen än") link = null;
    goto = "Gå till " + ln + " meet";
  } else {
    lecture   = RASTINFO[LECTURE];
    teacher   = RASTINFO[TEACHER];
    link      = RASTINFO[LINK];
    goto      = "Gå på rast";
  }
  document.getElementById("lecture").innerHTML  = lecture;
  document.getElementById("teacher").innerHTML  = teacher;
  document.getElementById("link").innerHTML     = link;
  document.getElementById("GOTO").innerHTML     = goto;


  //Set all of class lists
  var antalLektioner = 7;
  for (var i = 0; i<antalLektioner+1; i++){
    document.getElementById("lektionId"+i).innerHTML = KLASSINFO[i][LECTURE];
    document.getElementById("teacherId"+i).innerHTML = KLASSINFO[i][TEACHER];
    document.getElementById("linkId"+i).innerHTML    = KLASSINFO[i][LINK];
  }

  return link;
}
