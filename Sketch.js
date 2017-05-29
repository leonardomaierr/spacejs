var ship;
var bullet;

var bullets = [];
var enemies = [];

// Declara os objetos
function setup() {
	createCanvas(600, 400);
	ship = new Ship();

	for (var i = 0; i < 6; i++) {
		enemies.push(new Enemy(i * 80 + 80, 60));
	}
}

// Desenha os objetos
function draw() {
	background(51);
	ship.show();
	ship.move();

	enemies.forEach(enemy => {
		enemy.show();
	});

	bullets.forEach(bullet => {
		bullet.show();
		bullet.move();

		if (bullet.hitsWall()) {
			bullets.splice(bullet, 1);
		}
	});

	/*
	for (var i = 0; i < bullets.length; i++){
		bullets[i].show();
	}
	*/
}

function keyReleased() {
	if (key != ' ') {
		ship.setDir(0);
	}
}

function keyPressed() {
	if (key === ' ') {
		bullet = new Bullet(ship.x, height - 20);
		bullets.push(bullet);

		console.log(bullets);
	} 

	if (keyCode === RIGHT_ARROW) {
		ship.setDir(1);
	} else if (keyCode === LEFT_ARROW) {
		ship.setDir(-1);
	}
}