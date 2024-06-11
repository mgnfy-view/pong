import { k } from "../utils/kaboomContext";
import {
    MENU_SCREEN_TEXT_COLOR,
    MENU_MAIN_TEXT_VERTICAL_OFFSET,
    MENU_SUPPORTING_TEXT_VERTICAL_OFFSET,
    SCALE_MENU_TITLE,
    SCALE_SUPPORTING_TEXT,
    SCALE_INFO_TEXT,
    GAME_TAG,
} from "../utils/constants";

function menuScene() {
    // Add the game's title
    k.add([
        k.text("Pong".toUpperCase()),
        k.color(...MENU_SCREEN_TEXT_COLOR),
        k.pos(k.width() / 2, k.height() / 2 - MENU_MAIN_TEXT_VERTICAL_OFFSET),
        k.anchor("center"),
        k.scale(SCALE_MENU_TITLE),
    ]);

    // Add supporting text, CTA
    k.add([
        k.text("Press Enter"),
        k.color(...MENU_SCREEN_TEXT_COLOR),
        k.pos(k.width() / 2, k.height() / 2 + MENU_SUPPORTING_TEXT_VERTICAL_OFFSET),
        k.anchor("center"),
        k.scale(SCALE_SUPPORTING_TEXT),
    ]);

    // Add informational text
    k.add([
        k.text('During the game, press "Q" to return to this menu'),
        k.color(...MENU_SCREEN_TEXT_COLOR),
        k.pos(k.width() / 2, k.height() / 2 + MENU_SUPPORTING_TEXT_VERTICAL_OFFSET + 200),
        k.anchor("center"),
        k.scale(SCALE_INFO_TEXT),
    ]);

    // Go to the game scene when `Enter` is pressed
    k.onKeyDown("enter", () => {
        k.go(GAME_TAG, 0, 0);
    });
}

export { menuScene };
