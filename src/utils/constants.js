// Game canvas dimensions
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

// Canvas color
const CANVAS_COLOR = [102, 51, 153]; // purple

// Central divider line width
const DIVIDER_WIDTH = 2;

// Divider color
const DIVIDER_COLOR = [196, 99, 235]; // light purple

// Score offset from the left of the screen
const SCORE_TEXT_LEFT_OFFSET = 200;

// Score offset from the top of the screen
const SCORE_TEXT_TOP_OFFSET = 20;

// Score text color
const SCORE_TEXT_COLOR = [255, 255, 255];

// Paddle dimensions
const PADDLE_WIDTH = 13;
const PADDLE_HEIGHT = 100;

// Paddle offset from the left and right walls
const PADDLE_HORIZONTAL_OFFSET = 15;

// Paddle offset from the top and bottom of the screen
const PADDLE_VERTICAL_OFFSET = 15;

// Give a soft border radius to the paddle
const PADDLE_ROUNDED_CORNERS = 5;

// The speed with which the paddle can move horizontally
const PADDLE_SPEED = 350;

// Object color
const PADDLE_COLOR = [255, 255, 228]; // white

// Paddle left tag
const PADDLE_LEFT_TAG = "paddleLeft";

// Paddle right tag
const PADDLE_RIGHT_TAG = "paddleRight";

// Radius of the ball
const BALL_RADIUS = 12;

// Color of the ball
const BALL_COLOR = [255, 255, 255];

// Speed of the ball in horizontal and vertical directions
const BALL_HORIZONTAL_SPEED = 400;
const BALL_VERTICAL_SPEED = 400;

// Tag for the ball
const BALL_TAG = "ball";

// Menu screen's text color
const MENU_SCREEN_TEXT_COLOR = [255, 255, 255];

// This the value by which the main text will be lifted up from the center
const MENU_MAIN_TEXT_VERTICAL_OFFSET = 20;

// This the value by which the supporting text will be pushed below the center
const MENU_SUPPORTING_TEXT_VERTICAL_OFFSET = 50;

// Scaling for menu text
const SCALE_MENU_TITLE = 2;
const SCALE_SUPPORTING_TEXT = 0.6;
const SCALE_INFO_TEXT = 0.4;

// Tags for different scenes
const GAME_TAG = "game";
const MENU_TAG = "menu";

// Sound asset tag
const PADDLE_HIT_SOUND = "paddle-hit";

export {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    CANVAS_COLOR,
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
    MENU_SCREEN_TEXT_COLOR,
    MENU_MAIN_TEXT_VERTICAL_OFFSET,
    MENU_SUPPORTING_TEXT_VERTICAL_OFFSET,
    SCALE_MENU_TITLE,
    SCALE_SUPPORTING_TEXT,
    SCALE_INFO_TEXT,
    GAME_TAG,
    MENU_TAG,
    PADDLE_HIT_SOUND,
};
