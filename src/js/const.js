const TEL_UNDO_VALUE = 'UNDO';

const AppRoute = {
  PAGE_DEFAULT: 'PAGE_PREVIEW',
  PAGE_PREVIEW: 'PAGE_PREVIEW',
  PAGE_FORM: 'PAGE_FORM',
  PAGE_FINAL: 'PAGE_FINAL',
};

const ArrowAction = {
  ARROW_LEFT: 'ARROW_LEFT',
  ARROW_UP: 'ARROW_UP',
  ARROW_RIGHT: 'ARROW_RIGHT',
  ARROW_DOWN: 'ARROW_DOWN',
};

const KeyCode = {
  NUMBER_ONE: 49,
  NUMBER_SECOND: 50,
  NUMBER_THREE: 51,
  NUMBER_FOUR: 52,
  NUMBER_FIVE: 53,
  NUMBER_SIX: 54,
  NUMBER_SEVEN: 55,
  NUMBER_EIGHT: 56,
  NUMBER_NINE: 57,
  NUMBER_ZERO: 48,

  BACKSPACE: 8,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
};

const KeyCodeInputValue = {
  [KeyCode.NUMBER_ONE]: 1,
  [KeyCode.NUMBER_SECOND]: 2,
  [KeyCode.NUMBER_THREE]: 3,
  [KeyCode.NUMBER_FOUR]: 4,
  [KeyCode.NUMBER_FIVE]: 5,
  [KeyCode.NUMBER_SIX]: 6,
  [KeyCode.NUMBER_SEVEN]: 7,
  [KeyCode.NUMBER_EIGHT]: 8,
  [KeyCode.NUMBER_NINE]: 9,
  [KeyCode.NUMBER_ZERO]: 0,
  [KeyCode.BACKSPACE]: TEL_UNDO_VALUE,

  [KeyCode.ARROW_LEFT]: ArrowAction.ARROW_LEFT,
  [KeyCode.ARROW_UP]: ArrowAction.ARROW_UP,
  [KeyCode.ARROW_RIGHT]: ArrowAction.ARROW_RIGHT,
  [KeyCode.ARROW_DOWN]: ArrowAction.ARROW_DOWN,
};

export {
  TEL_UNDO_VALUE,
  AppRoute,
  ArrowAction,
  KeyCodeInputValue,
};
