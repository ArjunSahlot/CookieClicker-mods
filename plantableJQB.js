if (typeof plantableJQB === 'undefined') var plantableJQB = {};
if (typeof CCSE === 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
plantableJQB.name = 'Plantable JQB';
plantableJQB.version = '1.0.0';
plantableJQB.GameVersion = '2.052';

plantableJQB.launch = function() {
    plantableJQB.init = function() {
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
    };
};

if (!plantableJQB.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        plantableJQB.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(plantableJQB.launch);
    }
}
