if (plantableJQB === undefined) var plantableJQB = {};
if (typeof CCSE == "undefined") Game.LoadMod("https://klattmose.github.io/CookieClicker/CCSE.js");
plantableJQB.name = "Plantable JQB";
plantableJQB.version = "1.0.0";
plantableJQB.GameVersion = "2.052";

plantableJQB.launch = function() {
	plantableJQB.init = function () {
		CCSE.MinigameReplacer(function() {
			var M = Game.Objects["Farm"].minigame;
			if (M.plants["queenbeetLump"]) {
				M.plants["queenbeetLump"].plantable = true;
				console.log("Juicy Queenbeet is now plantable!");
			} else {
				console.log("Juicy Queenbeet not found.");
			}
		}, "Farm");
	
		plantableJQB.isLoaded = 1;
		if (CCSE.ConfirmGameVersion(plantableJQB.name, plantableJQB.version, plantableJQB.GameVersion)) {
			Game.registerMod(plantableJQB.name, plantableJQB);
		}
	}
}

if (!plantableJQB.isLoaded){
	if(CCSE && CCSE.isLoaded){
		plantableJQB.launch();
	}
	else {
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(plantableJQB.launch);
	}
}
