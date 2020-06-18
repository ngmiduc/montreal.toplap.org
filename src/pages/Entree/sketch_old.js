export default function sketch (p) {
  let w = 1920;
  let h = 1080;
  let size = -20;

  p.setup = function () {
    p.createCanvas(w, h, p.P2D);

  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.w)
      w = props.w ;

    if (props.h)
      h = props.h ;

    };

  p.draw = function () {

    size+=0.15;
    if (size >= 20)
      size = -20;


    if (((p.frameCount % 300)>=150)) {
        p.fill(0);
        p.stroke(255);
      } else {
        p.fill(255);
        p.stroke(0);
      }
      if(p.mouseIsPressed){
        p.fill(p.random(255),p.random(255),p.random(255),p.random(255));
        p.stroke(p.random(255),p.random(255),p.random(255),p.random(255));
        }

      p.ellipse(p.mouseX + p.random(0,20), p.mouseY + p.random(0,20), 40+size, 40+size);
  };
};
