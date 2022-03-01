// original code by https://editor.p5js.org/slow_izzm/sketches/WbOyZTFQd

let lyrics = [
  'rain', 'rainfall', 'grasslands', 'calmness', 
  'peace', 'and', 'quiet', 'legend', 'tranquil',
  'faraway', 'land', 'people', 'seek', 'playful', 'the', 
  'a', 'light', 'precipitate', 'heal', 'cold', 'warm', 
  'sea', 'magic', 'drizzle', 'arcane', 'me', 'knowledge', 
  'blissful', 'heavy', 'forest', 'air', 'all', 'smell', 'the', 
  'name', 'of', 'love', 'wilderness', 'you', 'let', 'me', 'lead', 
  'you', 'even', 'when', 'you\'re', 'melancholy?', 'shiny',
  'the', 'bliss,', 'in', 'the', 'middle', 'of', 
  'night', 'In', 'the', 'silence', 'when', 
  'there\'s', 'no', 'one', 'by', 'your', 'side', 'yours',
  'requiem', 'flaws', 'rain?', 'rain', 'rain', 'rain?', 'rain', 'rain',
  'rain', 'rain', 'rain?', 'rain', 'rain', 'rain', 'rain'
];

let lyricDrops = [];

let color1, color2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  color1 = color('#4d46da');
  color2 = color('#6b68a1');

  for (let i = 0; i < lyrics.length; i++)
    lyricDrops[i] = new LyricDrop(lyrics, i, random(0, PI));
}

function draw() {

  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y_AXIS");
  
  for (let i = 0; i < lyricDrops.length; i++) {
    push();
    lyricDrops[i].rain();
    pop();
  }
  
}

class LyricDrop {
  constructor(lyric, idx, rand_angle) {
    this.pos = createVector(random(30, width - 30), random(height));
    this.vel = createVector(0, random(1, 2));
    this.lyric = lyric;
    this.idx = idx;
    this.angle = rand_angle;
  }

  update() {
    // this.vel.add(createVector(random(0.0001, 0.001), random(0.0001, 0.001)));
    this.pos.add(this.vel);

    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
      // this.pos.x = random(width, -30);
    }
  }

  display() {
    fill(242, map(this.pos.y, 0, height, height * 0.25, 0));
    textFont('Kalam');
    textSize(22);
    textAlign(CENTER, CENTER);
    rotate(this.angle);
    text(this.lyric[this.idx], this.pos.x, this.pos.y);
  }

  rain() {
    this.update();
    this.display();
  }

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === "Y_AXIS") {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === "X_AXIS") {
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < lyricDrops.length; i++) {
    lyricDrops[i].pos = createVector(random(30, width - 30), random(height));
  }
}

// original code by https://editor.p5js.org/slow_izzm/sketches/WbOyZTFQd