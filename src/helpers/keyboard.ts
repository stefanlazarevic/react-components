/**
 * All available keyboard codes
 */
const KeyCode = {
	NO_KEY: 0, //That key has no keycode
	BREAK: 3, // break
	BACKSPACE: 8, // backspace / delete
	TAB: 9, // tab
	CLEAR: 12, // clear
	ENTER: 13, // enter
	SHIFT: 16, // shift
	CTRL: 17, // ctrl
	ALT: 18, // alt
	PAUSE: 19, // pause/break
	CAPSLOCK: 20, // caps lock
	HANGUL: 21, // hangul
	HANJA: 25, // hanja
	ESC: 27, // escape
	CONVERSION: 28, // conversion
	NON_CONVERSION: 29, // non-conversion
	SPACE: 32, // spacebar
	PAGE_UP: 33, // page up
	PAGE_DOWN: 34, // page down
	END: 35, // end
	HOME: 36, // home
	ARROW_LEFT: 37, // left arrow
	ARROW_UP: 38, // up arrow
	ARROW_RIGHT: 39, // right arrow
	ARROW_DOWN: 40, // down arrow
	SELECT: 41, // select
	PRINT: 42, // print
	EXECUTE: 43, // execute
	PRINTSCREEN: 44, // Print Screen
	INSERT: 45, // insert
	DELETE: 46, // delete
	HELP: 47, // help
	NUMBER_0: 48, // 0
	NUMBER_1: 49, // 1
	NUMBER_2: 50, // 2
	NUMBER_3: 51, // 3
	NUMBER_4: 52, // 4
	NUMBER_5: 53, // 5
	NUMBER_6: 54, // 6
	NUMBER_7: 55, // 7
	NUMBER_8: 56, // 8
	NUMBER_9: 57, // 9
	COLON: 58, // :
	SEMICOLON: 59, // semicolon (firefox), equals
	LESS_THEN: 60, // <
	EQUALS: 61, // equals (firefox)
	LATIN_B: 63, // ß
	AT_SIGN: 64, // @ (firefox)
	LETTER_A: 65, // a
	LETTER_B: 66, // b
	LETTER_C: 67, // c
	LETTER_D: 68, // d
	LETTER_E: 69, // e
	LETTER_F: 70, // f
	LETTER_G: 71, // g
	LETTER_H: 72, // h
	LETTER_I: 73, // i
	LETTER_J: 74, // j
	LETTER_K: 75, // k
	LETTER_L: 76, // l
	LETTER_M: 77, // m
	LETTER_N: 78, // n
	LETTER_O: 79, // o
	LETTER_P: 80, // p
	LETTER_Q: 81, // q
	LETTER_R: 82, // r
	LETTER_S: 83, // s
	LETTER_T: 84, // t
	LETTER_U: 85, // u
	LETTER_V: 86, // v
	LETTER_W: 87, // w
	LETTER_X: 88, // x
	LETTER_Y: 89, // y
	LETTER_Z: 90, // z
	WINDOWS_KEY: 91, // Windows Key / Left ⌘ / Chromebook Search key
	RIGHT_WINDOWS_KEY: 92, // right window key
	WINDOWS_MENU: 93, // Windows Menu / Right ⌘
	SLEEP: 95, // sleep
	NUMPAD_0: 96, // numpad 0
	NUMPAD_1: 97, // numpad 1
	NUMPAD_2: 98, // numpad 2
	NUMPAD_3: 99, // numpad 3
	NUMPAD_4: 100, // numpad 4
	NUMPAD_5: 101, // numpad 5
	NUMPAD_6: 102, // numpad 6
	NUMPAD_7: 103, // numpad 7
	NUMPAD_8: 104, // numpad 8
	NUMPAD_9: 105, // numpad 9
	MULTIPLY: 106, // multiply
	ADD: 107, // add
	NUMPAD_PERIOD: 108, // numpad period (firefox)
	SUBTRACT: 109, // subtract
	DECIMAL_POINT: 110, // decimal point
	DIVIDE: 111, // divide
	F1: 112, // f1
	F2: 113, // f2
	F3: 114, // f3
	F4: 115, // f4
	F5: 116, // f5
	F6: 117, // f6
	F7: 118, // f7
	F8: 119, // f8
	F9: 120, // f9
	F10: 121, // f10
	F11: 122, // f11
	F12: 123, // f12
	F13: 124, // f13
	F14: 125, // f14
	F15: 126, // f15
	F16: 127, // f16
	F17: 128, // f17
	F18: 129, // f18
	F19: 130, // f19
	F20: 131, // f20
	F21: 132, // f21
	F22: 133, // f22
	F23: 134, // f23
	F24: 135, // f24
	F25: 136, // f25
	F26: 137, // f26
	F27: 138, // f27
	F28: 139, // f28
	F29: 140, // f29
	F30: 141, // f30
	F31: 142, // f31
	F32: 143, // f32
	NUMLOCK: 144, // num lock
	SCROLL_LOCK: 145, // scroll lock
	AIRPLANE_MODE: 151, // airplane mode
	CARET_SIGN: 160, // ^
	EXCLAMATION_MARK: 161, // !
	ARABIC_SEMICOLON: 162, // ؛ (arabic semicolon)
	NUMBER_SIGN: 163, // #
	DOLLAR_SIGN: 164, // $
	LETTER_U_WITH_GRAVE: 165, // ù
	PAGE_BACKWARD: 166, // page backward
	PAGE_FORWARD: 167, // page forward
	REFRESH: 168, // refresh
	CLOSING_PAREN: 169, // closing paren (AZERTY)
	ASTERISK_SIGN: 170, // *
	TILDE_SIGN: 171, // ~ + * key
	HOME_KEY: 172, // home key
	MINUS_SIGN: 173, // minus (firefox), mute/unmute
	DECREASE_VOLUME: 174, // decrease volume level
	INCREASE_VOLUME: 175, // increase volume level
	NEXT: 176, // next
	PREVIOUS: 177, // previous
	STOP: 178, // stop
	PLAY_PAUSE: 179, // play/pause
	EMAIL: 180, // e-mail
	MUTE_UNMUTE: 181, // mute/unmute (firefox)
	DECREASE_VOLUME_FF: 182, // decrease volume level (firefox)
	INCREASE_VOLUME_FF: 183, // increase volume level (firefox)
	SEMICOLON_ALT: 186, // semi-colon / ñ
	EQUAL_SIGN: 187, // equal sign
	COMMA_SIGN: 188, // comma
	DASH_SIGN: 189, // dash
	PERIOD_SIGN: 190, // period
	FORWARD_SLASH: 191, // forward slash / ç
	GRAVE_ACCENT: 192, // grave accent / ñ / æ / ö
	QUESTION_SIGN: 193, // ?, / or °
	NUMPAD_PEDIOD: 194, // numpad period (chrome)
	OPEN_BRACKET: 219, // open bracket
	BACKSLASH: 220, // back slash
	CLOSE_BRACKET: 221, // close bracket / å
	SINGLE_QUOTE: 222, // single quote / ø / ä
	BACKQUOTE: 223, // `
	COMMAND_KEY: 224, // left or right ⌘ key (firefox)
	ALT_GRAPH: 225, // altgr
	LEFT_BACKSLASH: 226, // < /git >, left back slash
	GNOME_COMPOSE_KEY: 230, // GNOME Compose Key
	LETTER_C_WITH_CEDILLA: 231, // ç
	XF86_FORWARD: 233, // XF86Forward
	XF86_BACK: 234, // XF86Back
	NON_CONVERSION_ALT: 235, // non-conversion
	ALPHANUMERIC: 240, // alphanumeric
	HIRAGANA_KATAKANA: 242, // hiragana/katakana
	HALF_FULL_WIDTH: 243, // half-width/full-width
	KANJI: 244, // kanji
	UNLOCK_TRACKPAD: 251, // unlock trackpad (Chrome/Edge)
	TOGGLE_TOUCHPAD: 255, // toggle touchpad
};

export default {
  KeyCode
}