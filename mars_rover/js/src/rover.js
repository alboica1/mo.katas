const Mars = require('../src/Mars');

class Rover {
  planet = new Mars()
  constructor(x, y, orientation, planet) {
    this.x = x
    this.y = y
    this.orientation = orientation
    this.planet = planet
    this.stopped = false
    this.nextPos = {}
  }

  move(movs) {
    movs.forEach(m => {
      if (m === "f" || m == "b") {
        this.nextPos = this.calcNextPos(m)
        let found = Array.from(this.planet.obstacles).find(e => e.x == this.nextPos.x && e.y == this.nextPos.y )
        if (found != null ){
          this.stopped = true
          console.log('REPORT: I have found an obstacle on my way. Position of the obstacle: x = ' + this.nextPos.x 
            + ' y = ' + this.nextPos.y)
        } else {
          this.x = this.nextPos.x
          this.y = this.nextPos.y
        }
      } else if (m === "l") {
        switch(this.orientation) {
          case 'N':
            this.orientation = 'W'
            break;
          case 'S':
            this.orientation = 'E'
            break;
          case 'E':
            this.orientation = 'N'
            break;
          case 'W':
            this.orientation = 'S'
            break;
          default:
            // code block
        }
      } else if (m === "r") {
        switch(this.orientation) {
          case 'N':
            this.orientation = 'E'
            break;
          case 'S':
            this.orientation = 'W'
            break;
            case 'E':
              this.orientation = 'S'
              break;
          case 'W':
            this.orientation = 'N'
            break;
          default:
             // code block
          }
      }
    })
  }
  calcNextPos(move) {
    if (move == 'f') {
      switch (this.orientation){
        case 'N':
          return {x: this.x, y: (this.y + 1) % this.planet.height}
        case 'S':
          return {x: this.x, y: ((((this.y - 1) % this.planet.height) + this.planet.height) % this.planet.height)}
        case 'E':
          return {x: (this.x + 1) % this.planet.width, y: this.y}
        case 'W':
          return {x: ((((this.x - 1) % 3) + this.planet.width) % this.planet.width), y: this.y}
        default:
      }
    }else if (move == 'b') {
      switch (this.orientation){
        case 'N':
          return {x: this.x, y: ((((this.y - 1) % this.planet.height) + this.planet.height) % this.planet.height)}
        case 'S':
          return {x: this.x, y: (this.y + 1) % this.planet.height}
        case 'E':
          return {x: ((((this.x - 1) % this.planet.width) + this.planet.width) % this.planet.width), y: this.y}
        case 'W':
          return {x: (this.x + 1) % this.planet.width, y: this.y}
        default:
      }
    } else{
      return -1
    }
  }
}

module.exports = Rover
