<!DOCTYPE html>
<html>
<title>Saufspiel</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="manifest" href="manifest.webmanifest">
<script src="Javascript_Aufgaben.js"></script>
<style>
body,h1 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: url('background.png');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
<body>

<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div class="w3-display-topleft w3-padding-large w3-xlarge logo">
     <img id="logo" src="logo.png">
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">
	  <div id="aufgabenDisplay">
	   <!-- hier erscheien die Aufgaben -->
	  </div>
	</h1>
    <hr class="w3-border-grey" style="margin:auto;width:70%">
	 <div id="timer"class="w3-jumbo w3-center"></div>
    <p class="w3-large w3-center">
	
	 Sekunden übrig
	
	</p>
  </div>
  <div class="w3-display-bottomleft w3-padding-large ">
    <div id="aufgabenButton" >
	    <button class="button" onclick="newAufgabe()" style="vertical-align:middle">Neue Aufgabe</button>
	</div>
  <!--  Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>-->
  </div>
  
  <div class="w3-display-bottomright w3-padding-large ">
    <div id="pauseButton" >
	    <button class="button" onclick="pause()" style="vertical-align:middle">Pause</button>
	</div>
  </div>

</div>
<script src="Javascript_Aufgaben.js"></script>
</body>
</html>