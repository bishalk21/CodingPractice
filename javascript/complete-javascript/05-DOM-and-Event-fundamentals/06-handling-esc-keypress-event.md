# Handling ESC keypress event

Keyboards events are very useful for handling user input. In this lesson, we will learn how to handle the ESC keypress event.

These events are fired when a user presses a key on the keyboard. The event object contains information about the key that was pressed.

```javascript
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    console.log("Escape key pressed");
  }
});
```

[🔝 Back to top](#table-of-contents)

# keyboard events

| Event      | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `keydown`  | Fires when a key is pressed down.                          |
| `keyup`    | Fires when a key is released.                              |
| `keypress` | Fires when a key is pressed down and released.             |
| `input`    | Fires when a value is changed.                             |
| `change`   | Fires when a value is changed and the element loses focus. |
| `focus`    | Fires when an element receives focus.                      |

# Syntax for keyboard events

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event);
});
```

# Keyboard event object

| Property   | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| `key`      | The name of the key that was pressed.                                                  |
| `code`     | The physical location of the key on the keyboard.                                      |
| `keyCode`  | The numeric code of the key that was pressed.                                          |
| `which`    | The numeric code of the key that was pressed.                                          |
| `altKey`   | A boolean value indicating whether the Alt key was pressed when the event was fired.   |
| `ctrlKey`  | A boolean value indicating whether the Ctrl key was pressed when the event was fired.  |
| `shiftKey` | A boolean value indicating whether the Shift key was pressed when the event was fired. |

## Key names

| Key name     | keyCodes | binary   |
| ------------ | -------- | -------- |
| `Backspace`  | 8        | 00001000 |
| `Tab`        | 9        | 00001001 |
| `Enter`      | 13       | 00001101 |
| `Shift`      | 16       | 00010000 |
| `Ctrl`       | 17       | 00010001 |
| `Alt`        | 18       | 00010010 |
| `Pause`      | 19       | 00010011 |
| `CapsLock`   | 20       | 00010100 |
| `Escape`     | 27       | 00011011 |
| `Space`      | 32       | 00100000 |
| `PageUp`     | 33       | 00100001 |
| `PageDown`   | 34       | 00100010 |
| `End`        | 35       | 00100011 |
| `Home`       | 36       | 00100100 |
| `ArrowLeft`  | 37       | 00100101 |
| `ArrowUp`    | 38       | 00100110 |
| `ArrowRight` | 39       | 00100111 |
| `ArrowDown`  | 40       | 00101000 |
| `Insert`     | 45       | 00101101 |
| `Delete`     | 46       | 00101110 |
| `0`          | 48       | 00110000 |
| `1`          | 49       | 00110001 |
| `2`          | 50       | 00110010 |
| `3`          | 51       | 00110011 |
| `4`          | 52       | 00110100 |
| `5`          | 53       | 00110101 |

# Handling ESC keypress event

```javascript
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    console.log("Escape key pressed");
  }
});
```

# Handling Enter keypress event

```javascript
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    console.log("Enter key pressed");
  }
});
```

# Handling multiple keypress events

```javascript
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    console.log("Escape key pressed");
  } else if (event.keyCode === 13) {
    console.log("Enter key pressed");
  }
});
```

# Handling multiple keypress events using switch

```javascript
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 27:
      console.log("Escape key pressed");
      break;
    case 13:
      console.log("Enter key pressed");
      break;
  }
});
```

# Handling multiple keypress events using switch and fallthrough

```javascript
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 27:
    case 13:
      console.log("Escape or Enter key pressed");
      break;
  }
});
```
