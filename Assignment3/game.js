class Person{
    constructor(fullName){
    this.fullName = fullName;
    }

    name(){
        return this.fullName.split(' ');
    }

    firstName(){
        return this.name()[0]
    }
    
    lastName(){
        return this.name().slice(-1).join(' ');
    }

    get first_name(){
        return this.firstName();
    }
    
    get last_name(){
        return this.lastName();
    }
    
}

class Player extends Person{
    constructor(fullName){
        super(fullName);
        this.setWins = 0;
        this.totalWins = 0;
        this.totalLosses = 0;
    }

    setsWon(){
        return this.setWins++
    }
    gamesWon(){
        return this.totalWins++
    }
    gamesLost(){
        return this.totalLosses++
    }
    get Wins(){
        return this.totalWins;
    }
    get Losses(){
        return this.totalLosses;
    }
    get Sets(){
        return this.setWins;
    }
}

    class Game{
        constructor(player1, player2){
            this.player1 = new Player(player1);
            this.player2 = new Player(player2);
            this.score = 0;
        }

        totalSets(){
            do {
                this.score = Math.floor(Math.random() * 10);
                if((this.score) < 5){
                    this.player1.setsWon();
                }
                else{
                    this.player2.setsWon();
                }
            } while ((this.player2.Sets) < 5 && ((this.player1.Sets) < 5))
            document.getElementById("player1sets").innerHTML = this.player1.first_name + " " + this.player1.last_name + " has won " + this.player1.Sets + " sets."
            document.getElementById("player2sets").innerHTML = this.player2.first_name + " " + this.player2.last_name + " has won " + this.player2.Sets + " sets."
        }

        matchWinner(){
            if(this.player2.setWins > this.player1.setWins){
                this.player2.gamesWon();
                this.player1.gamesLost;
                document.getElementById("winner").innerHTML = this.player2.first_name + " is the winner of the tennis match!!!";
            }
            if(this.player1.setWins > this.player2.setWins){
                this.player1.gamesWon();
                this.player2.gamesLost();
                document.getElementById("winner").innerHTML = this.player1.first_name + " is the winner of the tennis match!!!";
            }
            else{
                return "This is an invalid result."
            }
        }
    }

    function startGame(player1, player2){
         var newMatch = new Game(player1,player2);
         newMatch.totalSets();
         newMatch.matchWinner();
     }