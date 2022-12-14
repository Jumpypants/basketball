var game = {
  state: "game",
  cw: window.innerWidth - 15,
  ch: window.innerHeight - 20,
  gravity: 1,
  airFriction: 0.5,
  groundFriction: 1,
  floor: window.innerHeight - 15 - 100,
  scoreTimer: 0,
  mouseX: 0,
  mouseY: 0,
  buttons: {
    up: false,
    down: false,
    left: false,
    right: false,
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    shift: false,
    c: false,
    m: false
  }
};

var roundObjects = [];
