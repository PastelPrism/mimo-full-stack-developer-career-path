const player = {};

player.playerName = "Leo";
player.goalsScored = 4;
player.gamesPlayed = 2;

const team = {
  teamName: "Lions",
  numberPlayers: 18,
  varsity: true
};

team.member = player;

console.log(team);