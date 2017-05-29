function Bullet(x, y) {

	this.x = x;
	this.y = y;
	this.raio = 8;

	this.show = function() {
    	fill(150, 0, 255);
    	ellipse(this.x, this.y, this.raio*2, this.raio*2);
	}

	this.move = function() {
		this.y = this.y - 5;
	}

	this.hitsWall = function() {
		
		if (this.y < 0) {
			return true;
		}

		return false;
	}
}