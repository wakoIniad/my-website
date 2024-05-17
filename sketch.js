
//const referenceScreenSize = [800,800];
//const referenceMolCount = 1000;

//const referenceTimeRequiredOfAnimation
//  = calcRate(...referenceMolCount,referenceMolCount)
let animationSpeed;//more bigger,more slower
const x = [];
const y = [];

function setup() {
  const count = 1000;
  const minSide = min(windowWidth, windowHeight);
  //createCanvas(minSide, minSide,);
  createCanvas(windowWidth, windowHeight)
  
  animationSpeed = calcRate(width,height,count);
  console.log(animationSpeed)
  const maxium = 
  (-1+((1+4*count/PI)**0.5))/2;
  for(var i = 0; i < maxium;i++) {
    for(var j = 0;j < maxium;j++) { 
      const rad = radians(random(360));
      const r = random((width/2)**2)**0.5;
      x.push(width/2+sin(rad)*r);
      y.push(height/2+cos(rad)*r);
    }
  }
  strokeWeight(1);
  stroke(255,1);
  fill(230,255,155,2);
}

function draw() {
  const c = 3
  background(5.2/c,84/c,100/c,64);
  const xlength = x.length;
  for(var i = 0;i < xlength;i++) {
    const xi = x[i];
    const yi = y[i];
    for(var j = i+1;j < xlength;j++) {
      const dx = x[j]-xi;
      const dy = y[j]-yi;
      const r = animationSpeed*(dx**2+dy**2);
      const dxpr = dx/r;
      const dypr = dy/r;
      x[i] += dxpr;
      y[i] += dypr;
      x[j] -= dxpr;
      y[j] -= dypr;
    }
    circle(xi,yi,16);
  }
}

function calcRate(width,height,count) {
  const gm = (width * height)**0.5;
  let pos = gm;
  let i = 0
  while(true) {
    if(pos < 0) break
    pos -= count/pos**2;
    i++
  }
  
  const DEFAULT_VAL = 170672
  //referenceTimeRequiredOfAnimation;
  //time required on default screen size
  const rate = DEFAULT_VAL/i;
  return rate;
}