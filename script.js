let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 450;
canvas.height = 400;

let leftKey = false;
let rightKey = false;
let topKey = false;
let bottomKey = false;

const player = {
  X: canvas.width / 2 - 40,
  Y: canvas.height / 2 - 40,
  W: 80,
  H: 80,
  speed: 3,
};
function update() {
  drawPlayer();

  requestAnimationFrame(update);
}
update();

function drawPlayer() {
  if (player.X > canvas.width - player.W) {
    rightKey = false;
  }

  if (rightKey) {
    player.X += player.speed;
  } else if (leftKey) {
    player.X -= player.speed;
  } else if (topKey) {
    player.Y -= player.speed;
  } else if (bottomKey) {
    player.Y += player.speed;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(player.X, player.Y, player.W, player.H);
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 39) {
    rightKey = true;
  } else if (e.keyCode === 37) {
    leftKey = true;
  } else if (e.keyCode === 38) {
    topKey = true;
  } else if (e.keyCode === 40) {
    bottomKey = true;
  }
});

document.addEventListener("keyup", function (e) {
  rightKey = false;
  leftKey = false;
  topKey = false;
  bottomKey = false;
});
