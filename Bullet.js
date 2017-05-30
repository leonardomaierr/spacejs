function Bullet(x, y) {

	this.x = x;
	this.y = y;
	this.r = 8;

	this.show = function() {
    	fill(150, 0, 255);
    	ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.move = function() {
		this.y = this.y - 5;
	}

	this.hitsWall = function() {
		return this.y < 0 ? true : false;
	}

	this.hitsEnemy = function(enemy) {
		var d = dist(this.x, this.y, enemy.x, enemy.y);

		return d < this.r + enemy.r ? true : false;
	}
}