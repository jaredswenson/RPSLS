$(document).ready(function () {
	var app = new Vue({
	  el: '#app',
	  data: {
	    playerOne: '',
	    playerOnePlayed: false,
	    playerOneName: '',
	    playerTwo: '',
	    playerTwoPlayed: false,
	    playerTwoName: '',
	    result: "",
	    winner: "",
	    playerOneTotal: 0,
	    playerTwoTotal: 0,
	  },
	    methods: {
	    startGame: function () {
	    	var playerOne = $('#playerOneName').val();
	    	this.playerOneName = playerOne;
	    	var playerTwo = $('#playerTwoName').val();
	    	this.playerTwoName = playerTwo;
	    },
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
	    	//tie
	    	if (_this.playerOne === _this.playerTwo) {
	    		_this.winner = "TIE"
	    	//player one winners
	    	} else if (_this.playerOne === "Rock" && _this.playerTwo === "Scissors") {
	    		_this.result = "(and as it always has) Rock crushes Scissors"
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Rock" && _this.playerTwo === "Lizard") {
	    		_this.result = "Rock crushes Lizard";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Paper" && _this.playerTwo === "Rock") {
				_this.result = "Paper covers Rock";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Paper" && _this.playerTwo === "Spock") {
				_this.result = "Paper disproves Spock";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Scissors" && _this.playerTwo === "Paper") {
				_this.result = "Scissors cuts Paper";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Scissors" && _this.playerTwo === "Lizard") {
				_this.result = "Scissors decapitates Lizard";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Lizard" && _this.playerTwo === "Spock") {
				_this.result = "Lizard poisons Spock";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Lizard" && _this.playerTwo === "Paper") {
				_this.result = "Lizard eats Paper";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Spock" && _this.playerTwo === "Scissors") {
				_this.result = "Spock smashes Scissors";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	} else if(_this.playerOne === "Spock" && _this.playerTwo === "Rock") {
				_this.result = "Spock vaporizes Rock";
	    		_this.winner = _this.playerOneName;
	    		_this.playerOneTotal = _this.playerOneTotal +1;
	    	}
	    	//player two winners
	    	else if (_this.playerTwo === "Rock" && _this.playerOne === "Scissors") {
				_this.result = "(and as it always has) Rock crushes Scissors"
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Rock" && _this.playerOne === "Lizard") {
				_this.result = "Rock crushes Lizard";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Paper" && _this.playerOne === "Rock") {
				_this.result = "Paper covers Rock";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Paper" && _this.playerOne === "Spock") {
				_this.result = "Paper disproves Spock";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Scissors" && _this.playerOne === "Paper") {
				_this.result = "Scissors cuts Paper";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Scissors" && _this.playerOne === "Lizard") {
				_this.result = "Scissors decapitates Lizard";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Lizard" && _this.playerOne === "Spock") {
				_this.result = "Lizard poisons Spock";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Lizard" && _this.playerOne === "Paper") {
				_this.result = "Lizard eats Paper";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Spock" && _this.playerOne === "Scissors") {
				_this.result = "Spock smashes Scissors";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			} else if(_this.playerTwo === "Spock" && _this.playerOne === "Rock") {
				_this.result = "Spock vaporizes Rock";
				_this.winner = _this.playerTwoName;
				_this.playerTwoTotal = _this.playerTwoTotal +1;
			}
	    },
	    reset: function () {
	    	this.playerOne = "";
	    	this.playerTwo = "";
	    	this.result = "";
	    	this.winner = "";
	      	this.playerOnePlayed = false;
	    },
	    quitGame: function () {
	    	this.playerOneName = "";
	    	this.playerTwoName = "";
	    	this.playerOneTotal = 0;
	    	this.playerTwoTotal = 0;
	    },
	  }
	})
})