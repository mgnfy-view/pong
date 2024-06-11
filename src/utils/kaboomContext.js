import kaboom from "kaboom";
import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_COLOR } from "./constants";

const gameCanvas = document.getElementById("game-area");

// Setup the kaboom context
const k = kaboom({
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    canvas: gameCanvas,
    background: CANVAS_COLOR,
    global: false, // All kaboom methods aren't directly available in the global context
});

export { k };
