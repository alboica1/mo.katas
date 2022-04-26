const Rover = require('../src/rover');
const Mars = require('../src/Mars');


/*
Mars rover moves through


                       N
        --------------------------------
        |   0,2   |   1,2   |   2,2    |
        --------------------------------
     W  |   0,1   |   1,1   |   2,1    |    E
        --------------------------------
        |   0,0   |   1,0   |   2,0    |
        --------------------------------
                       S

*/

describe('Rover', () => {
  it('starts at a given position and orientation', () => {
    let planet  = new Mars(3,3,[{x:1, y:1}])
    let rover = new Rover(0, 0, 'N', planet)

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })

  describe('facing north', () => {
    it('moves forwards', () => {
      let planet  = new Mars(3,3,[{x:1, y:1}])
      let rover = new Rover(0, 0, 'N', planet)

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    it('moves backwards', () => {
      let planet  = new Mars(3,3,[{x:1, y:1}])
      let rover = new Rover(0, 0, 'N', planet)

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })
  });
  describe('turns to', () => {
    it('the right', () => {
      let planet  = new Mars(3,3,[{x:1, y:1}])
      let rover = new Rover(0, 0, 'N', planet)

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })
    it('the left', () => {
      let planet  = new Mars(3,3,[{x:1, y:1}])
      let rover = new Rover(0, 0, 'N', planet)
      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })
  });
  describe('moves', () => {
    it('arround the planet', () => {
      let planet  = new Mars(3,3,[{x:1, y:1}])
      let rover = new Rover(0, 0, 'N', planet)

      rover.move(['l', 'f', 'l', 'f'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('S')
    })
    it('until finding an obstacle', () => {
      let planet  = new Mars(3,3,[{x:1, y: 0}, {x:2, y:2}])
      let rover = new Rover(0, 0, 'N', planet)

      rover.move(['f','f','r','f','f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('E')
      expect(rover.stopped).toEqual(true)
    })
  });

})
