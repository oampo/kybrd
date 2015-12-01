# Kybrd - A tiny keyboard state library

## Example

```js
var keyboard = new Kybrd();
keyboard.isPressed('a'); // Returns true if 'a' is pressed
keyboard.isPressed('left'); // Use strings to describe non alpha-numeric keys
```

### API Documentation

#### Kybrd

```js
new Kybrd([element]);
```

Constructor.

*Parameters*:

* element - The element to listen to keyboard events on.

```
Kybrd.prototype.isPressed(key);
```

Check whether a key is pressed.

*Parameters*:

* key - The character or name of the key.
