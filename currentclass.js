

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

var klassLinkNu;

const KLASSINFO = [
["Rast", "Discord", "https://discord.gg/HShBsv6"],
["Teknik","Kalles Kaviar","https://meet.google.com/eoy-cntm-ngs"],
["Matte", "Björn", "https://meet.google.com/wkf-bbxo-fjv"],
["Svenska", "Pontus", "https://meet.google.com/zoc-xsea-ghi"],
["Samhällskunskap", "Uffe", "https://meet.google.com/pwg-znqn-ebe"],
["Historia", "Uffe", "https://meet.google.com/nih-octd-scd",],
["Engelska", "Erina", "https://meet.google.com/vqn-zyxk-vme"],
["Mentorstid", "Ulrika", "https://meet.google.com/iqp-evan-hir"],
["Idrott", "Micke", "https://meet.google.com/czu-xiqy-ate"]
];

function updateValues(){
    
}

function changeLink() {
    var tab = window.open(klassLinkNu, '_blank');
    tab.focus();
}

function manRedirect(url) {
    var tab = window.open(KLASSINFO[url][LINK], '_blank');
    tab.focus();
}

function classRedirect() {

    //teknik, matte, svenska, sam, historia, engelska, mentorstid
    var har = [];
    har.length = 8;
    var lektionStart = [];
    var lektionEnd   = [];

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

    var lektion = RAST;
    for (var i = 0; i<lektionStart.length; i++){
        if (currentHour >= lektionStart[i] && currentHour <= lektionEnd[i]) lektion = i;
    }

    var ln, tn , link, goTo;

    lecture   = KLASSINFO[lektion][LECTURE];
    teacher   = KLASSINFO[lektion][TEACHER];
    link      = KLASSINFO[lektion][LINK];
    if (lektion == RAST) goTo = "Gå på rast";
    else goTo = "Gå till " + lecture + " meet";

    document.getElementById("lecture").textContent  = lecture;
    document.getElementById("teacher").textContent  = teacher;
    document.getElementById("link").textContent     = link;
    document.getElementById("GOTO").textContent     = goTo;
    klassLinkNu = link;


    //Set all of class lists
    const table = document.getElementById("table");
    for (var i = 0; i<har.length; i++){
        let newElement = document.createElement('tr');
        newElement.id = 'row'+i;
        table.appendChild(newElement);
        
        for (var j = 0; j<KLASSINFO[i+1].length+1; j++){
            const row = document.getElementById('row'+i);
            newElement = document.createElement('td');
            switch(j){
                case(LECTURE):
                newElement.textContent = KLASSINFO[i+1][LECTURE];
                break;
                
                case(TEACHER):
                newElement.textContent = KLASSINFO[i+1][TEACHER];
                break;
                
                case(LINK):
                newElement.textContent = KLASSINFO[i+1][LINK];
                break;
                
                case(3):
                if (lektionStart[i] != 0) newElement.textContent = lektionStart[i] + ' - ' + lektionEnd[i];
                else newElement.textContent = "Ingen " + KLASSINFO[i+1][LECTURE] + " idag.";
                
            }
            row.appendChild(newElement);
        }
    }
    return link;
}
