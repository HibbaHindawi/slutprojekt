var Clarity = function () {
    this.alert_errors = false;
    this.log_info = true;
    this.tile_size = 16;
    this.limit_viewport = false;
    this.jump_switch = 0; 
    this.viewport = {
        x: 200,
        y: 200
    };
    this.camera = {
        x: 0,
        y: 0
    };
    this.key = {
        left: false,
        right: false,
        up: false
    };
    this.player = {
      loc: {
        x: 0,
        y: 0
      },    
      vel: {
        x: 0,
        y: 0
      },
      can_jump: true
    };
    window.onkeydown = this.keydown.bind(this);
    window.onkeyup   = this.keyup.bind(this);
};
Clarity.prototype.error = function (message) {
    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};
Clarity.prototype.log = function (message) {
    if (this.log_info) console.log(message);
};
Clarity.prototype.set_viewport = function (x, y) {
    this.viewport.x = x;
    this.viewport.y = y;
};
Clarity.prototype.keydown = function (e) {
    var _this = this;
    switch (e.keyCode) {
    case 37:
      _this.key.left = true;
      break;
    case 38:
      _this.key.up = true;
      break;
    case 39:
      _this.key.right = true;
      break;
    }
};
Clarity.prototype.keyup = function (e) {
    var _this = this;
    switch (e.keyCode) {
    case 37:
      _this.key.left = false;
      break;
    case 38:
      _this.key.up = false;
      break;
    case 39:
      _this.key.right = false;
      break;
    }
};