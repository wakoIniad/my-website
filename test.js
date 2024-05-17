function calcRate(width,height,count) {
    const gm = (width * height)**0.5;
    let pos = gm;
    let i = 0
    while(true) {
      if(pos < 0) break
      pos -= count/pos**2;
      i++
    }
    console.log(i)
  }
  calcRate(800,800,1000)