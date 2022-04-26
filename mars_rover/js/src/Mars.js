class Mars{
    constructor(width, height, obstacles){
        this.width = width
        this.height = height
        this.obstacles = new Set(obstacles)
    }
}

module.exports = Mars