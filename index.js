var Kybrd = function(element) {
    element = element || document;
    element.addEventListener('keydown', this._onKeyDown.bind(this));
    element.addEventListener('keyup', this._onKeyUp.bind(this));

    this._keys = {};
};

Kybrd.prototype.isPressed = function(key) {
    return this._keys.hasOwnProperty(key);
}

Kybrd.prototype._onKeyDown = function(event) {
    var code = event.which || event.keyCode;
    var key = this._codeToKey(code);
    this._keys[key] = true;
};

Kybrd.prototype._onKeyUp = function(event) {
    var code = event.which || event.keyCode;
    var key = this._codeToKey(code);
    delete this._keys[key];
};

Kybrd.prototype._codeToKey = function(code) {
    var key = Kybrd.KEYS[code];
    var fKey = code - 111;
    if (fKey > 0 && fKey < 13) {
        key = 'f' + fKey;
    }

    if (!key) {
        key = String.fromCharCode(code).toLowerCase();
    }
    return key;
};

Kybrd.KEYS = {
    13: 'enter',
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right',
    27: 'esc',
    32: 'space',
    8: 'backspace',
    9: 'tab',
    46: 'delete'
};

module.exports = Kybrd;
