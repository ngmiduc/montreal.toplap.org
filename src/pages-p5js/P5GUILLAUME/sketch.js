export default function sketch (p) {
  var angle = 0;
  var offset = 100;
  var speed = 0.05;
  var scalar;
  var oscX, oscY;
  var pointA = { x: 0, y: 0 };
  var pointB = { x: 800, y: 200 };

  var ballArray = [];


  let ww = 1920;
  let hh = 1080;

  p.Ball = function(x, y, oscillator) {
      this.position = p.createVector(x, y);
      this.size = 20;
      this.oscillator = oscillator;
      ballArray.push(this);
  };

  p.Ball.prototype.Move = function() {
      this.position.y = -oscY + p.height / 2 + p.sin(angle + this.oscillator * (oscX / 100)) * scalar + oscY;
  };

  p.Ball.prototype.Display = function() {
      ellipse(this.position.x, this.position.y, this.size, this.size);
  };

  p.initWavy = function() {
      // nop.stroke();
      ballArray = [];
      p.fill(0);
      for (let i = 0; i < 21; i++) {
          var Roger = new p.Ball(p.width / 20 * (i + 0), p.height / 2, 0.4 * i);
      }
  }

  p.drawWavy = function() {
      let lerps = p.map(p.sin(p.frameCount * 0.01), -1, 1, 0, 1);
      oscX = p.lerp(pointA.x, pointB.x, lerps);
      oscY = p.lerp(pointA.y, pointB.y, lerps);
      p.background(255);
      p.translate(0,0);
      scalar = 80 + oscY;
      for (let i = 0; i < ballArray.length; i++) {
          ballArray[i].Move();
      }
      for (let i = 0; i < ballArray.length; i++) {
          var x = ballArray[i].position.x;
          var y = ballArray[i].position.y;
          if (i < ballArray.length - 1) {
              var x2 = ballArray[i + 1].position.x;
              var y2 = ballArray[i + 1].position.y;
          } else {
              var x2 = x;
              var y2 = y;
          }



          let r1 = p.map(y, 0, p.height, 155, 255);
          let g1 = p.map(y, 0, p.height, 255, 155);
          let b1 = p.map(p.cos(angle), -1, 1, 20, 255);

          p.fill(r1 + 40, g1 + 40, b1 + 40);
          // p.fill(
          //     (125 + Math.abs(p.cos(angle) * 20)) * 4,
          //     (45 - y / 2 + p.sin(angle) * 60) * 8,
          //     (10 + (y / 3)) * 4
          // );
          // quad(x, 0, x2, 0, x2, y2, x, y);
          p.rect(x, 0, p.width / 20, p.height);

          let r2 = p.map(y, 0, p.height, 25, 100);
          let g2 = p.map(y, 0, p.height, 0, 255);
          let b2 = p.map(p.cos(angle), -1, 1, 20, 255);

          p.fill(r2 + 180, 0 + 180, b2 + 180);

          // p.fill((2 + y / 10) * 6,
          //     (2 + p.cos(angle) * 60 - oscX * 0.1) * 6,
          //     (2 + (y / 3) + p.cos(angle)) * 8
          // );
          p.quad(x, p.height, x2, p.height, x2, y2, x, y);

          // p.fill(255, 255, 255, 5);
          // p.rect(0, 0, p.width, p.height);
      }
      angle += speed;
  }

  var n;
  var t = 1;
  var h;
  var g = 1;
  var contador1 = 0;
  var contador = 204;
  var dato = 1;
  var sketchSelector;

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.w)
      ww = props.w ;

    if (props.h)
      hh = props.h ;

    };

  p.setup = function() {

      p.createCanvas(ww, hh, p.P2D);
      p.background(0);
      sketchSelector = p.random([0, 1]);
      sketchSelector = 1;
      // sketchSelector = 1;
      p.frameRate(30);
      if (sketchSelector == 0) {
          // p.nofill();
          p.noStroke();
      } else if (sketchSelector == 1) {
          p.noStroke();
          p.initWavy();
      }
  }

  p.draw = function() {

      if (sketchSelector == 0) {
          p.drawJagged();
      } else if (sketchSelector == 1) {
          p.drawWavy();
      }
  }

  p.drawJagged = function() {
      contador1++;
      contador = contador + dato;
      if (contador <= 204) {
          dato = 0.5;
          contador += 0.5;
      }
      if (contador >= 255) {
          dato = -0.5;
          contador -= 0.5;
      }
      p.background(204, contador, 240);
      var ruidoX = 0.00000000018;
      var posX = p.noise(p.millis() * ruidoX);
      p.rotateX(p.map(360, 0, p.height, 0, contador1 / posX / 500));
      p.rotateY(p.map(800, 0, p.width, 0, p.PI));
      p.drawCylinderTrian();
      p.drawCylinderVerde();
      p.drawCylinderAzul();
  }


  p.drawCylinderAzul = function() {
  	p.translate(120, 0);
  	var rX = 0.000000001;
  	var ruidoLoco = p.noise(p.millis() * rX) * 40;
  	var sides = ruidoLoco;

  	p.ambientLight(255, 0, 0);
  	p.ambientMaterial(20, 0, 50, 80);

  	//ambientMaterial(0, 100, 255, 180);
  	var angleIncrement = p.TWO_PI / sides;
  	p.beginShape(p.TRIANGLES);
  	for (var i = 0; i < sides; ++i) {

  		var angle = p.map(i, -7, 0, 90, p.TWO_PI);
  		var rY = 0.0000001;
  		var rrX = 0.0000002;
  		var bR = p.noise(p.millis() * rY) * -1200;
  		var tR = p.noise(p.millis() * rrX) * 1200;
  		var bottomRadius = bR;
  		var topRadius = tR;

  		// - - - - - - - - - - - - - - - - - - - -
  		var ang = p.map(i, 0, bR / 0.35, 800, p.PI / tR);
  		var rT = 0.000003;
  		var ruidoTall = p.noise(p.millis() * rT) * 1200;
  		var tall = ruidoTall * p.cos(ang);

  		p.vertex(topRadius * p.cos(p.mouseX), 0, topRadius * p.sin(angle));
  		p.vertex(bottomRadius * p.cos(angle), tall, bottomRadius * p.sin(angle));
  		angle += angleIncrement;

  	}
  	p.endShape();
  	n += 5;
  	g += 0.015;
  	t += 5;
  }


  p.drawCylinderVerde = function() {
  	p.translate(130, 0);
  	var rX = 0.0000001;
  	var ruidoLoco = p.noise(p.millis() * rX) * 60;
  	var sides = ruidoLoco;

  	p.ambientLight(255, 255, 255);
  	p.ambientMaterial(255, 255, 255, 140);

  	//ambientMaterial(0, 100, 255, 180);
  	var angleIncrement = p.TWO_PI / sides;
  	p.beginShape(p.TRIANGLES);
  	for (var i = 0; i < sides; ++i) {

  		var angle = p.map(i, -7, 0, 90, p.TWO_PI);
  		var rY = 0.000000215
  		var rrX = 0.000001;
  		var bR = p.noise(p.millis() * rY) * -2800;
  		var tR = p.noise(p.millis() * rrX) * 1900;
  		var bottomRadius = bR;
  		var topRadius = tR;

  		// - - - - - - - - - - - - - - - - - - - -
  		var ang = p.map(i, 0, bR / 0.35, 800, p.PI / tR);
  		var rT = 0.00000003;
  		var ruidoTall = p.noise(p.millis() * rT) * p.mouseY;
  		var tall = ruidoTall * p.cos(ang);

  		p.vertex(topRadius * p.cos(angle), 0, topRadius * p.sin(angle));
  		p.vertex(bottomRadius * p.cos(p.mouseY), tall, bottomRadius * p.sin(angle));
  		angle += angleIncrement;

  	}
  	p.endShape();
  	n += 5;
  	g += 0.015;
  	t += 5;
  }


  p.drawCylinderTrian = function(){
  	var rX = 0.0000001;
  	var ruidoLoco = p.noise(p.millis() * rX) * 53;
  	var sides = ruidoLoco;

  	p.ambientLight(255, 255, 255);
  	p.ambientMaterial(255, 150, 0, 180);

  	//ambientMaterial(0, 100, 255, 180);
  	var angleIncrement = p.TWO_PI / sides;
  	p.beginShape(p.TRIANGLES);
  	for (var i = 0; i < sides; ++i) {

  		var angle = p.map(i, -7, 0, 90, p.TWO_PI);
  		var rY = 0.0000021;
  		var rrX = 0.0000001;
  		var bR = p.noise(p.millis() * rY) * 10;
  		var tR = p.noise(p.millis() * rrX) * 4000;
  		var bottomRadius = bR;
  		var topRadius = tR;

  		// - - - - - - - - - - - - - - - - - - - -
  		var ang = p.map(i, 0, bR / 0.35, 800, p.PI / tR);
  		var rT = 0.0000003;
  		var ruidoTall = p.noise(p.millis() * rT) * p.mouseX;
  		var tall = ruidoTall * p.cos(ang);

  		p.vertex(topRadius * p.cos(p.mouseY), 0, topRadius * p.sin(angle));
  		p.vertex(bottomRadius * p.cos(angle), tall, bottomRadius * p.sin(angle));
  		angle += angleIncrement;

  	}
  	p.endShape();
  	n += 5;
  	g += 0.015;
  	t += 5;
  }


};
