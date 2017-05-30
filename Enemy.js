function Enemy(x, y) {

	this.x = x;
	this.y = y;
	this.r = 25;
	this._toDelete = false;

	this.show = function() {
		noStroke();
		fill(66, 134, 244);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	this.killEnemy = function() {
		this._toDelete = true;
	}
}