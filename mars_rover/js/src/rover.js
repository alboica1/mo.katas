const Mars = require('./mars');

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
      } else if (m === "l" || m === "r") {
        this.orientation = this.calcOrientation(m)
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
  
  calcOrientation(orient) {
    if (orient === "l") {
      switch(this.orientation) {
        case 'N':
          return 'W'
        case 'S':
          return 'E'
        case 'E':
          return 'N'
        case 'W':
          return 'S'
        default:
          // code block
      }
    } else if ( orient=== "r") {
      switch(this.orientation) {
        case 'N':
          return 'E'
        case 'S':
          return 'W'
          case 'E':
          return 'S'
        case 'W':
          return 'N'
        default:
           // code block
        }
    } else {
      return -1
    }
  }
}

module.exports = Rover
