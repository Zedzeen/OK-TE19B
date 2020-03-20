function changeLink(url) {
    url = classRedirect();
    var tab = window.open(url, '_blank');
    tab.focus();
}

function classRedirect() {
    var link;
    var tn;
    var ln;

    const RAST     = 0;
    const TEKNIK   = 1;
    const MATTE    = 2;
    const SVENSKA  = 3;
    const SAM      = 4;
    const HISTORIA = 5;
    const ENGELSKA = 6;
    const MENTOR   = 7;
    const IDROTT   = 8;

    const KLASSINFO = [
    ["https://discord.gg/AZRdg4", "Discord", "Rast"],
    ["https://meet.google.com/toh-xdmy-kwd", "Kalles Ka", "Teknik"],
    ["https://meet.google.com/wkf-bbxo-fjv", "Björn", "Matte"],
    ["https://meet.google.com/zoc-xsea-ghi", "Pontus", "Svenska"],
    ["https://meet.google.com/nih-octd-scd", "Uffe", "Samhällskunskap"],
    ["https://meet.google.com/nih-octd-scd", "Uffe", "Historia"],
    ["https://meet.google.com/vqn-zyxk-vme", "Erina", "Engelska"],
    ["https://meet.google.com/iqp-evan-hir", "Ulrika", "Mentorstid"],
    ["Finns ingen än", "Micke", "Idrott"]
    ];

    //teknik, matte, svenska, sam, historia, engelska, mentorstid
    var har = [];
    var lektionStart = [];
    var lektionEnd   = [];
    var lektion;

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
        har[TEKNIK]  = true;
        har[MATTE]   = true;
        har[SVENSKA] = true;
        har[SAM]     = false;
        har[HISTORIA]= false;
        har[ENGELSKA]= false;
        har[MENTOR]  = false;

        lektionStart[TEKNIK]  = 9;
        lektionEnd[TEKNIK]    = 11;

        lektionStart[SVENSKA] = 12;
        lektionEnd[SVENSKA]   = 13;

        lektionStart[MATTE]   = 13;
        lektionEnd[MATTE]     = 16;

        break;
    case 3:
        har[TEKNIK]  = false;
        har[MATTE]   = true;
        har[SVENSKA] = true;
        har[SAM]     = false;
        har[HISTORIA]= false;
        har[ENGELSKA]= false;
        har[MENTOR]  = false;

        /*
        Vilka lektioner har vi på Onsdag?
        */

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

link = KLASSINFO[lektion][0];
tn   = KLASSINFO[lektion][1];
ln   = KLASSINFO[lektion][2];

document.getElementById("meetlink").innerHTML = link;
document.getElementById("TN").innerHTML = tn;
document.getElementById("LN").innerHTML = ln;
return link;
}
