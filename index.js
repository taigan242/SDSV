var gamePrompt = require('game-prompt');

//Global Variables
var pilotName;
var shipName;
var gas = 1000;
var whereis;
var artifact;
var mesnidesArt;


function startGame() {
	gamePrompt('S.R.S.V Press ENTER to start.', intro);
}

function intro() {
	gamePrompt('You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition' +
	' to explore foreign planets. Your mission is to make contact with three alien life forms, acquire' +
	' an artifact representative of their culture, and bring back your findings to Earth.', collectInfo);
}

function collectInfo() {
	gamePrompt([
		'A voice comes over the intercom.',
		"What is your name Soldier?"
		], collectName);
}

function collectName(name) {
	pilotName = name;

	gamePrompt([
		"You hear the crackling again. 'Your the magot pilot named " + pilotName + " that keeps bothering me.'",
		"'Please state the name of your vehicle, turd.'"
		], collectVehicleName);
}

function collectVehicleName(name) {
	shipName = name;
	gamePrompt(["Alright Captain " + pilotName,
		"We've loaded your ship with 1000 gallons of fuel, and I'll reckon that will get you about 1000 lights years. Off you go..."], destinationPrompt);	
}

function destinationPrompt() {
	gamePrompt(["Where to Captain " + pilotName + " ," + shipName,
		"(E)arth (10 lightyears) \n" +
 		"(M)esnides (20 lightyears) \n" +
		"(L)aplides (50 lightyears)\n" +
		"(K)iyturn (120 lightyears)\n" +
		"(A)enides (25 lightyears)\n" +
		"(C)ramuthea (200 lightyears)\n" +
		"(S)meon T9Q (400 lightyears)\n" +
		"(G)leshan 7Z9 (85 lightyears)\n"], destination)
}

function destination(planet) {
	whereis = planet;
	planet = planet.toLowerCase();
	if (planet === 'e') {
		earth();
	} else if (planet ==='m') {
		mesnides();
	} else if (planet ==='l') {
		laplides();
	} else if (planet ==='k') {
		kiyturn();
	} else if (planet ==='a') {
		aenides();
	} else if (planet ==='c') {
		cramuthea();
	} else if (planet ==='s') {
		smeonT9Q();
	} else if (planet ==='g') {
		gleshan7Z9();
	} else {
		gamePrompt("No such destination available, please try again.",destinationPrompt);
	}
}

function earth() {
	gas -= 10;
	gas += 10;
	console.log("Flying to Earth... \n" + "You used 10 gallons of gas. The " + shipName + " now has " + gas + " gallons.");
	if (artifact >= 3) {
		console.log("You Win at life and Charlie Sheen");
	} else {
		gamePrompt("You have less than 3 artifact's, you have been refunded the gas used. \n GET BACK OUT THERE", destinationPrompt);
	}
}

function mesnides() {
	console.log("Welcome to mesnides " + pilotName + " \n");
	gamePrompt("How can we Assist you?\n" +
				"Ask about (A)rtifact.\n" +
				"Ask about other (P)lanets\n" +
				"(L)eave the planet", )
}

function laplides() {
	console.log("this worked");
}

function kiyturn() {
	console.log("this worked");
}

function aenides() {
	console.log("this worked");
}

function cramuthea() {
	console.log("this worked");
}

function smeonT9Q() {
	console.log("this worked");
}

function gleshan7Z9() {
	console.log("this worked");
}


startGame();