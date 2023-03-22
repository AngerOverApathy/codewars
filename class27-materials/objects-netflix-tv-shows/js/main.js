//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(showName, showTheme, showLength, showSong){
        this.name = showName
        this.theme = showTheme
        this.length = showLength
        this.song = showSong
    }
    startShow(){
        console.log(`Starting the song ${this.song}`)
    }
    endShow(){
        console.log('The show is ending')
    }
    bloopers(){
        console.log('Here are some bloopers')
    }
}
