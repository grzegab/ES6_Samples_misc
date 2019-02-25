export const team = {
  name: "Dino",
  _players: [
    {
      firstName: "Matt",
      lastName:"Dunken",
      age: 22
    },
    {
      firstName: "Chris",
      lastName: "Tomm",
      age: 25
    },
    {
      firstName: "Daren",
      lastName: "Wonderbaum",
      age: 19
    },
    {
      firstName: "Katlen",
      lastName:"Kingstone",
      age: 29
    },
    {
      firstName: "Sunshine",
      lastName:"Roberts",
      age: 23
    },
  ],
  
  get players(){
    return this._players;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    this.players.push(player);
  },
  
  _games: [
    {opponent: "Dragonfly", teamPoints: 42, opponentPoints: 27},
    {opponent: "Baloon", teamPoints: 12, opponentPoints: 45},
    {opponent: "Milk", teamPoints: 60, opponentPoints: 5},
    {opponent: "Potato", teamPoints: 22, opponentPoints: 22},
    {opponent: "Velvet", teamPoints: 35, opponentPoints: 30},
    {opponent: "AC", teamPoints: 31, opponentPoints: 32},
    {opponent: "Fire", teamPoints: 6, opponentPoints: 17},
  ],
  
  get games() {
  	return this._games;
	},
  
  addGame(oponent, teamPoints, oponentPoints){
    let game = {
      oponent: oponent,
      teamPoints: teamPoints,
      oponentPoints: oponentPoints
    };
    
    this.games.push(game);
  }
  
};

console.log(team.players);

team.addPlayer('Jonh', 'Dawson', 33);

console.log(team.players);

console.log(team.games);

