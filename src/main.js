import { k } from "./utils/kaboomContext";
import { menuScene } from "./scenes/menuScene";
import { gameScene } from "./scenes/gameScene";
import { MENU_TAG, GAME_TAG } from "./utils/constants";

// Create two scenes
// One for the menu
k.scene(MENU_TAG, menuScene);
// Other for the actual game
k.scene(GAME_TAG, gameScene);

// Start by taking the player to the menu
k.go(MENU_TAG);
