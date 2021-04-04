/* eslint-disable */
export default function sketch(p) {
  var w = 1920
  var h = 1080
  var noise = 0.1
  var noise2 = 0.5
  var noise3 = 0.25

  var noise4 = 1
  var noise5 = 0.25
  var noise6 = 1
  var noise7 = 0.25

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.wid) w = props.wid
    if (props.hei) h = props.hei
  }

  p.setup = function () {
    p.createCanvas(w, h, p.P2D)
    p.background(0)
  }

  p.draw = function () {
    p.background(0)
    p.stroke(255)
    let len = 20
    let amount = p.floor(w / len)
    noise4 = 0

    noise6 = 0
    let dist = p.map(p.noise(noise2), 0, 1, -1, 1)
    for (let i = 0; i < amount; i++) {
      // if (p.noise(noise4,noise6, noise) > 0.75) p.stroke(255, 255, 0);
      // else p.stroke(255);

      p.strokeWeight(1)
      p.line(15 * dist + i * len, 0, 5 + i * len, h * p.noise(noise4, noise5))
      p.strokeWeight(3)
      p.line(
        10 * dist + i * len,
        h * p.noise(noise4, noise5) + 50,
        10 * dist + i * len,
        h * p.noise(noise6, noise7)
      )
      p.strokeWeight(1)
      p.line(
        -15 * dist + i * len,
        h * p.noise(noise6, noise7) + 50,
        5 + i * len,
        h
      )
      noise4 += 0.5
      noise6 += 0.35
    }

    noise += 0.05
    noise2 += 0.02
    noise3 += 0.0025

    noise5 += 0.00125
    noise7 += 0.00225
  }
}
