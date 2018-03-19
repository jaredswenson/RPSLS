$(document).ready(function () {
	var app = new Vue({
	  el: '#app',
	  data: {
	    playerOne: 'Player One!',
	    playerOnePlayed: false,
	    playerTwo: 'Player Two!',
	    playerTwoPlayed: false,
	    result: "",
	    winner: "",
	    playerOneTotal: 0,
	    playerTwoTotal: 0,
	  },
	    methods: {
	    setPlayerOneToRock: function () {
	      this.playerOne = "Rock";
	      this.playerOnePlayed = true;
	    },
	    setPlayerOneToPaper: function () {
	      this.playerOne = "Paper"
	      this.playerOnePlayed = true;
	    },
	    setPlayerOneToScissors: function () {
	      this.playerOne = "Scissors"
	      this.playerOnePlayed = true;
	    },
	    setPlayerOneToLizard: function () {
	      this.playerOne = "Lizard"
	      this.playerOnePlayed = true;
	    },
	    setPlayerOneToSpock: function () {
	      this.playerOne = "Spock"
	      this.playerOnePlayed = true;
	    },
	    setPlayerTwoToRock: function () {
	      this.playerTwo = "Rock"
	      this.playerTwoPlayed = true;
	      this.checkPlay();
	    },
	    setPlayerTwoToPaper: function () {
	      this.playerTwo = "Paper"
	      this.playerTwoPlayed = true;
	      this.checkPlay();
	    },
	    setPlayerTwoToScissors: function () {
	      this.playerTwo = "Scissors"
	      this.playerTwoPlayed = true;
	      this.checkPlay();
	    },
	    setPlayerTwoToLizard: function () {
	      this.playerTwo = "Lizard"
	      this.playerTwoPlayed = true;
	      this.checkPlay();
	    },
	    setPlayerTwoToSpock: function () {
	      this.playerTwo = "Spock"
	      this.playerTwoPlayed = true;
	      this.checkPlay();
	    },
	    checkPlay: function () {
	    	var _this = this;
	    	//player one winners
	    	if (_this.playerOne === _this.playerTwo) {
	    		_this.result = "TIE"
	    	} else if (_this.playerOne === "Rock" && _this.playerTwo === "Scissors") {
	    		_this.result = "(and as it always has) Rock crushes Scissors"
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Rock" && _this.playerTwo === "Lizard") {
	    		_this.result = "Rock crushes Lizard";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Paper" && _this.playerTwo === "Rock") {
				_this.result = "Paper covers Rock";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Paper" && _this.playerTwo === "Spock") {
				_this.result = "Paper disproves Spock";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Scissors" && _this.playerTwo === "Paper") {
				_this.result = "Scissors cuts Paper";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Scissors" && _this.playerTwo === "Lizard") {
				_this.result = "Scissors decapitates Lizard";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Lizard" && _this.playerTwo === "Spock") {
				_this.result = "Lizard poisons Spock";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Lizard" && _this.playerTwo === "Paper") {
				_this.result = "Lizard eats Paper";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Spock" && _this.playerTwo === "Scissors") {
				_this.result = "Spock smashes Scissors";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Spock" && _this.playerTwo === "Rock") {
				_this.result = "Spock vaporizes Rock";
	    		_this.winner = "Player One";
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	}
	    	//player two winners
	    	else if (_this.playerTwo === "Rock" && _this.playerOne === "Scissors") {
				_this.result = "(and as it always has) Rock crushes Scissors"
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Rock" && _this.playerOne === "Lizard") {
				_this.result = "Rock crushes Lizard";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Paper" && _this.playerOne === "Rock") {
				_this.result = "Paper covers Rock";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Paper" && _this.playerOne === "Spock") {
				_this.result = "Paper disproves Spock";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Scissors" && _this.playerOne === "Paper") {
				_this.result = "Scissors cuts Paper";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Scissors" && _this.playerOne === "Lizard") {
				_this.result = "Scissors decapitates Lizard";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Lizard" && _this.playerOne === "Spock") {
				_this.result = "Lizard poisons Spock";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Lizard" && _this.playerOne === "Paper") {
				_this.result = "Lizard eats Paper";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Spock" && _this.playerOne === "Scissors") {
				_this.result = "Spock smashes Scissors";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Spock" && _this.playerOne === "Rock") {
				_this.result = "Spock vaporizes Rock";
				_this.winner = "Player Two";
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			}
	    },
	    reset: function () {
	    	this.playerOne = "Player One!";
	    	this.playerTwo = "Player Two!";
	    	this.result = "";
	    	this.winner = "";
	      	this.playerOnePlayed = false;
	    }
	  }
	})
})