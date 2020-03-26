const RAST = -1;
const TEKNIK = 0;
const MATTE = 1;
const SVENSKA = 2;
const SAM = 3;
const HISTORIA = 4;
const ENGELSKA = 5;
const MENTOR = 6;
const IDROTT = 7;

const LECTURE = 0;
const TEACHER = 1;
const LINK = 2;

var lecture, teacher, link;

var iCalURL = localStorage.getItem("iCalURL");

const MEET = [
    {subject: "TEKTEK01",   meet: "https://meet.google.com/sgi-imkg-yqv"},
    {subject: "MATMAT2c",   meet: "https://meet.google.com/wkf-bbxo-fjv"},
    {subject: "SVESVE01",   meet: "https://meet.google.com/zoc-xsea-ghi"},
    {subject: "SAMSAM01b",  meet: "https://meet.google.com/pwg-znqn-ebe"},
    {subject: "HISHIS01a1", meet: "https://meet.google.com/nih-octd-scd"},
    {subject: "ENGENG05",   meet: "https://meet.google.com/vqn-zyxk-vme"},
    {subject: "MENTORSTID", meet: "https://meet.google.com/iqp-evan-hir"},
    {subject: "IDRIDR01",   meet: "https://meet.google.com/dxk-ngzd-pgf"}
];

const RASTINFO = ["Rast", "Discord", "https://discord.gg/HShBsv6"];

function isWithinTimeSpan(date, day, time) {
    days = ["S\u00F6ndag", "M\u00E5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\u00F6rdag"];
    if (day != days[date.getDay()]) return false;
    var startTime = new Date(date).setHours(parseInt(time.split("-")[0].split(":")[0]), parseInt(time.split("-")[0].split(":")[1]), 0, 0);
    var endTime = new Date(date).setHours(parseInt(time.split("-")[1].split(":")[0]), parseInt(time.split("-")[1].split(":")[1]), 0, 0);
    return date >= startTime && date < endTime;
}

if (iCalURL != null){
    //run ical parser on load
    window.addEventListener("load", function() {
        //Create new ical parser
        new ical_parser(iCalURL, function(cal) {
            //When ical parser has loaded file
            //get future events
            events = cal.getFutureEvents();
            schema.reverse();
            var currentLectures = 0;
            var date = new Date("March 27, 2020 12:30:00")
            schema.forEach(function(e, i) {
                for (j = 0; j < MEET.length; j++) {
                    if (e[2] == MEET[j].subject) schema[i].push(MEET[j].meet);
                }
                if (isWithinTimeSpan(date, e[0], e[1])) {
                    currentLectures++;
                    tr = document.getElementById("currentLectures").insertRow();
                    for (var j = 0; j < 3; j++) {
                        var td = tr.insertCell();
                        td.textContent = e[j + 2] ? e[j + 2] : "-";
                    }
                    if (e[4]) {
                        var td = tr.insertCell();
                        td.appendChild(redir = document.createElement("button"));
                        redir.setAttribute("class", "btn btn-danger");
                        redir.setAttribute("onclick", "openLink()");
                        redir.setAttribute("id", "GOTO");
                        redir.textContent = "G\u00E5 till lektionen";
                    }
                }
            });

            // update current lectures
            if (currentLectures <= 0) {
                tr = document.getElementById("currentLectures").insertRow();
                for (i = 0; i < 3; i++) {
                    var td = tr.insertCell();
                    td.textContent = RASTINFO[i];
                }
                var td = tr.insertCell();
                td.appendChild(redir = document.createElement("button"));
                redir.setAttribute("class", "btn btn-danger");
                redir.setAttribute("onclick", "openLink()");
                redir.setAttribute("id", "GOTO");
                redir.textContent = "G\u00E5 p\u00E5 rast";
                document.getElementById("GOTO").textContent = "G\u00E5 p\u00E5 rast";
            }

            // create table
            var tblbody = document.getElementById("table")
            for (var i = 0; i < schema.length; i++) {
                var tr = tblbody.insertRow();
                for (var j = 0; j < 4; j++) {
                    var td = tr.insertCell();
                    td.textContent = schema[i][j] ? schema[i][j] : "-";
                }
                if (schema[i][j]) {
                    var td = tr.insertCell();
                    td.appendChild(anchor = document.createElement("a"));
                    anchor.textContent = schema[i][4];
                    anchor.setAttribute("href", schema[i][4])
                } else {
                    var td = tr.insertCell();
                    td.textContent = "-";
                }
            }
        });
    }, false);
}

function classRedirect() {

    document.getElementById("iCalURL").value = iCalURL;

}

function submitICal() {
    iCalURL = document.getElementById("iCalURL").value;
    localStorage.setItem("iCalURL", iCalURL);
    window.location.reload();
}

function openLink() {
    var tab = window.open(link, '_blank');
    tab.focus();
}
