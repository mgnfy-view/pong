import { k } from "../utils/kaboomContext";
import { decideDirection } from "../utils/utilityFunctions";
import {
    DIVIDER_WIDTH,
    DIVIDER_COLOR,
    SCORE_TEXT_TOP_OFFSET,
    SCORE_TEXT_LEFT_OFFSET,
    SCORE_TEXT_COLOR,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_HORIZONTAL_OFFSET,
    PADDLE_VERTICAL_OFFSET,
    PADDLE_ROUNDED_CORNERS,
    PADDLE_SPEED,
    PADDLE_COLOR,
    PADDLE_LEFT_TAG,
    PADDLE_RIGHT_TAG,
    BALL_RADIUS,
    BALL_COLOR,
    BALL_HORIZONTAL_SPEED,
    BALL_VERTICAL_SPEED,
    BALL_TAG,
    GAME_TAG,
    MENU_TAG,
    PADDLE_HIT_SOUND,
} from "../utils/constants";

function gameScene(paddleLeftScore, paddleRightScore) {
    // load the paddle hit sound
    k.loadSound(PADDLE_HIT_SOUND, "./audioAssets/paddle-hit.mp3");

    // Define layers
    const background = k.add([k.fixed(), k.z(0)]);
    const game = k.add([k.fixed(), k.z(1)]);
    const ui = k.add([k.fixed(), k.z(2)]);

    // Add a central divider line
    background.add([
        k.rect(DIVIDER_WIDTH, k.height()),
        k.color(...DIVIDER_COLOR),
        k.pos(k.width() / 2 - DIVIDER_WIDTH / 2, 0),
    ]);

    // Add the left and the right paddles
    // Both paddles are located at the center of the screen on the extreme ends
    const PADDLE_START_POSITION = k.height() / 2 - PADDLE_HEIGHT / 2;

    const paddleLeft = game.add([
        k.rect(PADDLE_WIDTH, PADDLE_HEIGHT, { radius: PADDLE_ROUNDED_CORNERS }),
        k.color(...PADDLE_COLOR),
        k.pos(PADDLE_HORIZONTAL_OFFSET, PADDLE_START_POSITION),
        k.area(),
        PADDLE_LEFT_TAG,
    ]);

    const paddleRight = game.add([
        k.rect(PADDLE_WIDTH, PADDLE_HEIGHT, { radius: PADDLE_ROUNDED_CORNERS }),
        k.color(...PADDLE_COLOR),
        k.pos(k.width() - PADDLE_HORIZONTAL_OFFSET - PADDLE_WIDTH, PADDLE_START_POSITION),
        k.area(),
        PADDLE_RIGHT_TAG,
    ]);

    // Add the ball to the scene
    const ball = game.add([
        k.circle(BALL_RADIUS),
        k.color(...BALL_COLOR),
        k.pos(k.width() / 2, k.height() / 2),
        k.area(),
        {
            horizontalSpeed: BALL_HORIZONTAL_SPEED * decideDirection(),
            verticalSpeed: BALL_VERTICAL_SPEED * decideDirection(),
        },
        BALL_TAG,
    ]);

    // Add the scoreboard
    ui.add([
        k.text(`${paddleLeftScore}`),
        k.color(...SCORE_TEXT_COLOR),
        k.pos(SCORE_TEXT_LEFT_OFFSET, SCORE_TEXT_TOP_OFFSET),
    ]);

    ui.add([
        k.text(`${paddleRightScore}`),
        k.color(...SCORE_TEXT_COLOR),
        k.anchor("topright"), // To deal with weird spacing issues
        k.pos(k.width() - SCORE_TEXT_LEFT_OFFSET, SCORE_TEXT_TOP_OFFSET),
    ]);

    // Add the controls
    // The allowed vertical space the paddle can move in
    const PADDLE_VERTICAL_LIMIT = k.height() - PADDLE_HEIGHT - PADDLE_VERTICAL_OFFSET;

    // Press "w" and "s" to move the left paddle up and down respectively
    k.onKeyDown("w", () => {
        if (paddleLeft.pos.y > PADDLE_VERTICAL_OFFSET) paddleLeft.move(0, -PADDLE_SPEED);
    });

    k.onKeyDown("s", () => {
        if (paddleLeft.pos.y < PADDLE_VERTICAL_LIMIT) paddleLeft.move(0, PADDLE_SPEED);
    });

    // Press the up arrow key and the down arrow key to move the right paddle up and down respectively
    k.onKeyDown("up", () => {
        if (paddleRight.pos.y > PADDLE_VERTICAL_OFFSET) paddleRight.move(0, -PADDLE_SPEED);
    });

    k.onKeyDown("down", () => {
        if (paddleRight.pos.y < PADDLE_VERTICAL_LIMIT) paddleRight.move(0, PADDLE_SPEED);
    });

    // Register more events
    // Keep moving the ball
    // If it hits the top or bottom of the screen, bounce away
    k.onUpdate(() => {
        if (
            ball.pos.y >= k.height() - PADDLE_VERTICAL_OFFSET ||
            ball.pos.y <= PADDLE_VERTICAL_OFFSET
        )
            ball.verticalSpeed *= -1;
        if (ball.pos.x <= PADDLE_HORIZONTAL_OFFSET)
            k.go(GAME_TAG, paddleLeftScore, ++paddleRightScore);
        if (ball.pos.x >= k.width() - PADDLE_HORIZONTAL_OFFSET)
            k.go(GAME_TAG, ++paddleLeftScore, paddleRightScore);
        ball.move(ball.horizontalSpeed, ball.verticalSpeed);
    });

    // Handle collision with left paddle
    k.onCollide(BALL_TAG, PADDLE_LEFT_TAG, () => {
        k.play(PADDLE_HIT_SOUND);
        ball.horizontalSpeed *= -1;
    });

    // Handle collision with right paddle
    k.onCollide(BALL_TAG, PADDLE_RIGHT_TAG, () => {
        k.play(PADDLE_HIT_SOUND);
        ball.horizontalSpeed *= -1;
    });

    // Press "q" to quit
    k.onKeyDown("q", () => {
        k.go(MENU_TAG);
    });
}

export { gameScene };
