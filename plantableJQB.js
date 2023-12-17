console.log("STEP 1");
if (typeof plantableJQB === 'undefined') var plantableJQB = {};
if (typeof CCSE === 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
plantableJQB.name = 'Plantable JQB';
plantableJQB.version = '1.0.0';
plantableJQB.GameVersion = '2.052';
console.log("STEP 2");

plantableJQB.launch = function() {
    console.log("STEP 3");
    plantableJQB.init = function() {
        console.log("STEP 4");
        let startupString = 'Juicy Queenbeet not found, couldn\'t be set to plantable.';

        // Ensure the modification is done after the Farm minigame is fully loaded
        CCSE.MinigameReplacer(function() {
            var M = Game.Objects['Farm'].minigame;
            if (M && M.plants['queenbeetLump']) {
                M.plants['queenbeetLump'].plantable = true;
                startupString = 'Juicy Queenbeet is now plantable!';
            }
        }, 'Farm');

        plantableJQB.isLoaded = 1;
        if (CCSE.ConfirmGameVersion(plantableJQB.name, plantableJQB.version, plantableJQB.GameVersion)) {
            Game.registerMod(plantableJQB.name, plantableJQB);
        }
        if (Game.prefs.popups) Game.Popup(startupString);
        else                   Game.Notify(startupString, '', '', 0, 1);
        console.log("STEP 5");
    };
};

if (!plantableJQB.isLoaded) {
    console.log("STEP 6");
    if (CCSE && CCSE.isLoaded) {
        plantableJQB.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(plantableJQB.launch);
    }
}
console.log("STEP 7");
