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

	// POG
	bullets.forEach(bullet => {
		bullet.show();
		bullet.move();

		if (bullet.hitsWall()) {
			bullets.splice(bullet, 1);
		}

		for (var i = 0; i < enemies.length; i++) {
			
			if (bullet.hitsEnemy(enemies[i])) {
				bullets.splice(bullet, 1);
				enemies[i].killEnemy();
			}

			if (enemies[i]._toDelete) {
				enemies.splice(i, 1);
			}
		}

	});
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

		// console.log: the best debugger that you respect
		console.log(bullets);
		console.log(enemies);
	} 

	if (keyCode === RIGHT_ARROW) {
		ship.setDir(1);
	} else if (keyCode === LEFT_ARROW) {
		ship.setDir(-1);
	}
}