import { k } from "./kaboomContext";

// You either go in one direction with 1, or go in the opposite direction with -1
// If the horizontal speed is 200, then (200 * 1) allows you to go towards the right
// But (200 * (-1)) allows you to go towards the left
// The same applies for vertical speed
const directions = [1, -1];

// We randomly select the direction to go in
const decideDirection = () => directions[Math.floor(k.rand(0, 1.99))];

export { decideDirection };
