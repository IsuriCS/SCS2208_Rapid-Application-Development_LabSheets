class games{
    theme
    avatar
    level
    pause

    constructor(theme, avatar,level) {
        this.theme = theme
        this.avatar = avatar
        this. level = level
    }

    pause() {
        console.log('Game Paused.')
        this.pause=true
    }

    resume() {
        if (this.pause) {
            console.log('Game Resumed.')
        }
        else {
            throw new Error ('Game is playing. Can\'t resume!')
        }
    }

    cancel() {
        win()
        console.log('Game Cancled.')
    }
}

class carGame extends games{
    score

    constructor(theme, avatar, level) {
        super(theme, avatar, level)
        this.score=0
    }

    #increaseScore() {
        this.score+=1
    }

    win() {
        if (this.score == 100) {
            console.log('You WON !!!')
        }
        else {
            console.log('You LOST !!!')
        }
    }
}

class puzzelGame extends games{
    time
    finished

    constructor(theme, avatar, level,time) {
        super(theme, avatar, level)
        this.time = time
        this.finished=false
    }

    finish() {
        this.finished=true
    }

    decresetime() {
        this.time = this.time - 1
        if (this.time == 0) {
            this.win()
        }
    }

    win() {
        if (this.finished) {
            console.log("You WON !!!")
        }
        else {
            console.log('You LOST !!!')
        }
    }
}

class shootingGame{
    missionCompleted

    constructor(theme, avatar, level,) {
        super(theme, avatar, level)
        this.missionCompleted=false
    }

    completed() {
        this.missionCompleted=true
    }

    win() {
        if (this.missionCompleted) {
            console.log("You WON !!!")
        }
        else {
            console.log('You LOST !!!')
        }
    }
}