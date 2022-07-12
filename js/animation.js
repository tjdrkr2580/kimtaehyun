function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function setCoordinate(c, maxWidth) {
    if (c >= maxWidth) return c % maxWidth;
    else if (c <= 0) return maxWidth + c;
    else return c;
  }
  const canvas = document.getElementById("starfield");
  const context = canvas.getContext("2d");
  const colorrange = [0, 60, 240];
  class Star {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.radius = Math.random() * 1.2;
      this.hue = colorrange[getRandom(0, colorrange.length - 1)];
      this.sat = getRandom(50, 100);
      this.depth = getRandom(1, 3);
    }
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 369);
      context.fillStyle = "hsl(" + this.hue + ", " + this.sat + "%, 88%)";
      context.fill();
    }
    animate() {
      switch (this.depth) {
        case 1:
          this.x = setCoordinate(this.x - 0.3, window.outerWidth);
          this.y = setCoordinate(this.y + 0.1, window.outerHeight);
          break;
        case 2:
          this.x = setCoordinate(this.x + 0.03, window.outerWidth);
          this.y = setCoordinate(this.y + 0.5, window.outerHeight);
          break;
        case 3:
          this.x = setCoordinate(this.x - 0.04, window.outerWidth);
          this.y = setCoordinate(this.y + 0.7, window.outerHeight);
          break;
      }
    }
    parallax(_w, _h, _mouseX, _mouseY) {
      switch (this.depth) {
        case 1:
          this.x = setCoordinate(
            this.x - (_mouseX - _w) * 0.01,
            window.outerWidth
          );
          this.y = setCoordinate(
            this.y - (_mouseY - _h) * 0.01,
            window.outerHeight
          );
          break;
        case 2:
          this.x = setCoordinate(
            this.x - (_mouseX - _w) * 0.02,
            window.outerWidth
          );
          this.y = setCoordinate(
            this.y - (_mouseY - _h) * 0.02,
            window.outerHeight
          );
          break;
        case 3:
          this.x = setCoordinate(
            this.x - (_mouseX - _w) * 0.05,
            window.outerWidth
          );
          this.y = setCoordinate(
            this.y - (_mouseY - _h) * 0.05,
            window.outerHeight
          );
          break;
      }
    }
  }
  class Stars {
    constructor() {
      this.generate();
    }
    animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.starArray.forEach((star) => {
        star.animate();
        star.draw();
      });
    }
    parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < this.size; ++i) {
        this.starArray[i].parallax(_w, _h, _mouseX, _mouseY);
        this.starArray[i].draw();
      }
    }
    scroll(scrl) {
      this.lastScroll = scrl - this.lastScroll;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < this.size; ++i) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        this.starArray[i].parallax(_w, _h, this.lastScroll, _h);
        this.starArray[i].draw();
      }
    }
    onResize() {
      this.generate();
    }
    generate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.size = Math.round((window.outerWidth * window.outerHeight) / 1000);
      this.starArray = new Array(this.size);
      this.lastScroll = 0;
      for (let i = 0; i < this.size; i++) {
        this.starArray[i] = new Star();
        this.starArray[i].draw();
      }
    }
  }
  function main() {
    let stars = new Stars();
    window.addEventListener("resize", () => stars.onResize());
    if (typeof animated !== "undefined") {
      const anim = setInterval(() => {
        stars.animate();
      }, 20);
    } else {
      document.addEventListener("mousemove", (e) => {
        stars.parallax(e);
      });
      let content = document.getElementById("content");
      content.addEventListener("scroll", (e) => {
        stars.scroll(content.scrollLeft);
      });
    }
  }
  main();
