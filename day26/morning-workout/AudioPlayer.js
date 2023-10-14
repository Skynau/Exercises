class AudioPLayer {
    constructor(author, piece) {
        this.author = author;
        this.piece = piece;
    }

    buildContainerNames() {
        //building blocks for the elemnt
        displayAuthor(this.author) {
            // pick author from database and display their official name for miniplayers
        }
        displayPiece(this.piece) {
            //from author pieces pick the piece chosen by the search or what you want to display and name it inside
        }
    }

    buildContainerDuration() {
        // using this.piece to get the durateion of the piece set the progress bar with min and max, min always 0 default, max the duration
        this.piece
        //create the toggle html which is clickable/movable and make the min move with it and get the track playing from the second
        //of the value in min that the user has moved it to
    }

    controlPanel () {
        //build up the container structure and place following 'operators' to correct positions:
        shuffle() {
            //access the whole playlist on this.author and randomise the initiation of playing of pieces/or no initiation just display it
            //in the Names container, so perhaps call
            this.author
            this.buildContainerNames
        }

        repeat () {
            
        }
    }



    




}