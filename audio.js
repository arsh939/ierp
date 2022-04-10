/* Music 
======================================*/
var playlist = [
	{
		"song"    : "&quot;Menace To Society&quot; - Treyvon North 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/menacetosociety.mp3"
	},
	{
		"song"    : "&quot;Undefeated&quot; - Trevon Ricch (Prod. LOreal) 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/undefeated.mp3"
	},
	{
		"song"    : "&quot;new you!&quot; - aiko! 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/newyou.mp3"
	},
	{
		"song"    : "&quot;Demons&quot; - Axel Newton 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/demons.mp3"
	},
	{
		"song"    : "&quot;Relentless&quot; - Zhang Chin 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/relentless.mp3"
	},
	{
		"song"    : "&quot;TOT&quot; - Zhang Chin ft JC & Trevon Ricch 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/TOT.mp3"
	},
	{
		"song"    : "&quot;Devil's Eye (Ooo Ooo)&quot; - Frazer 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/devilseye.mp3"
	},
	{
		"song"    : "&quot;Psycho&quot; - Fuego/Jasper 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/psycho.mp3"
	},
	{
		"song"    : "&quot;Shadebloom&quot; - Loomis 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Shadebloom.mp3"
	},
	{
		"song"    : "&quot;Eastside&quot; - Fuego 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/eastside.mp3"
	},
	{
		"song"    : "&quot;So official Freestyle&quot; - DRE K 47 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/soofficialfreestyle.mp3"
	},
	{
		"song"    : "&quot;Allegedly&quot; - Barry Carbone-Gnarly 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Allegedly.mp3"
	},
	{
		"song"    : "&quot;Adversity&quot; - Darell Sharp Ft. Treyvon North 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Adversity.mp3"
	},
	{
		"song"    : "&quot;Champion&quot; - Darell Sharp 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Champion.mp3"
	},
	{
		"song"    : "&quot;you know me so well&quot; - aiko! 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/ykmsw.mp3"
	},
	{
		"song"    : "&quot;BEST IN THE WORLD!&quot; - aiko! ft. Meigh & Rue 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/bestintheworld.mp3"
	},
	{
		"song"    : "&quot;Spiraling Down [Acoustic]&quot; - Axel Newton 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/spiralingdownacoustic.mp3"
	},
	{
		"song"    : "&quot;Motivation&quot; - DRE K 47 FEAT. CARTER MITCHELL 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Motivation.mp3"
	},
	{
		"song"    : "&quot;Hold Me (Acoustic)&quot; - Sasha Rue 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/holdmeacoustic.mp3"
	},
	{
		"song"    : "&quot;Break Free&quot; - Loomis / Pepper 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/breakfree.mp3"
	},
	{
		"song"    : "&quot;Blinded&quot; - Axel Newton 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Blinded.mp3"
	},
	{
		"song"    : "&quot;Sheeeeesh&quot; - Jayden Leone 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Sheeeeesh.mp3"
	},
	{
		"song"    : "&quot;One In A Million&quot; - SASHA-RUE Ft. LOreal 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/OneInAMillion.mp3"
	},
	{
		"song"    : "&quot;Sugar Daddy Anthem&quot; - Jayden Leone Ft. Jimmy North 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/sugardaddy.mp3"
	},
	{
		"song"    : "&quot;Chase The Bag&quot; - Jayden Leone Ft. Carter Mitchell 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/chasethebag.mp3"
	},
	{
		"song"    : "&quot;Grapejuice&quot; - Jayden Leone Ft. Claccccie Mitchell	🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Grapejuice.mp3"
	},
	{
		"song"    : "&quot;Dracos&quot; - Leon King	🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Dracos.mp3"
	},
	{
		"song"    : "&quot;Flight&quot; - Pepper 🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/Flight.mp3"
	},
	{
		"song"    : "&quot;Down Bad&quot; - Jimmy North & Carter Mitchell	🎵 DMCA FREE",
		"mp3"     : "https://music.echorp.net/music/DownBad.mp3"
	},
];

/* General Load / Variables
======================================*/
var duration;
var playPercent;
var bufferPercent;
var currentSong = Math.floor(Math.random() * playlist.length);
var next = document.getElementById("next");
var song = document.getElementById("song");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", 	bufferUpdate, false);
load();

/* Functions
======================================*/
function load(){
	pauseButton.style.visibility = "hidden";
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	music.load();
}

function reset(){ 
	rotate_reset = setInterval(function(){ 
		Rotate();
		if(rot == 0){
			clearTimeout(rotate_reset);
		}
	}, 1);
	fireEvent(pauseButton, 'click');
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	music.load();
}

function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
  if (sec < 10){ 
    sec  = "0" + sec;
  }
  return min + ':' + sec;
}

function timeUpdate() {
	bufferUpdate();
	playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";
	timer.innerHTML = formatSecondsAsTime(music.currentTime.toString());
}

function bufferUpdate() {
	music.onprogress = function(){
		bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
		bufferhead.style.width = bufferPercent + "px";
	}
}

function fireEvent(el, etype){
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

function _next(){
	if(currentSong == playlist.length - 1){
		reset();
	} else {
		fireEvent(next, 'click');
	}
}

playButton.onclick = function() {
	music.play();
}

pauseButton.onclick = function() {
	music.pause();
}

music.addEventListener("play", function () {
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}, false);

music.addEventListener("pause", function () {
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}, false);

next.onclick = function(){
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	if((currentSong + 1) == playlist.length){
		currentSong = 0;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	} else {
		currentSong++;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	}
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	music.load();
	duration = music.duration;
	music.play();
}

previous.onclick = function(){
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	if((currentSong - 1) == -1){
		currentSong = playlist.length - 1;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	} else {
		currentSong--;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	}
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	music.load();
	duration = music.duration;
	music.play();
}

volume.oninput = function(){
	music.volume = volume.value;
	visablevolume.style.width = ((80 - 11) * volume.value) / 10 + "vh";
}

music.addEventListener("canplay", function () {
	duration = music.duration;
}, false);


window.onload = (event) => {
	music.play();
	music.volume = 0.3
	visablevolume.style.width = ((80 - 11) * 0.3) / 10 + "vh";
	document.getElementById("volume").value = "0.3"
	$(".background").css("background-image", `url(${Images[Math.floor(Math.random() * Images.length)]})`)
};

document.body.onkeyup = function(e){
    if(e.keyCode == 32){

        $('#pause').click();
    }
}