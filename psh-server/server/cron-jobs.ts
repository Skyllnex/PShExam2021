import cron from 'node-cron';
import axios from 'axios';
import { Player } from './api/models/player';
import { Game } from './api/models/game';
import { Stat } from './api/models/stat';
import GameService from './api/services/game.service';
import StatService from './api/services/stat.service';
import PlayerService from './api/services/player.service';


var tasks = [
  cron.schedule('*/5 * * * *', () => simulateGames(), {scheduled: false})
];

async function simulateGames() {
  let game = await GameService.save(new Game());
  let totalPlayers = getRandomInt(1,10);
  let players = await generatePlayers(totalPlayers);
  console.log("Total: " + totalPlayers);
  console.log(players);

  players.forEach(async player => {
    let stat = new Stat(getRandomInt(1,100));
    stat.game = game;
    stat.player = player;

    let statdb = await StatService.save(stat);
    console.log(statdb);
  });
};

async function generatePlayers(quantity: number): Promise<Player[]>{
  let response = await axios.get('https://randomuser.me/api?results=' + quantity);
  let playerList: Player[] = [];
  
  for(let user of response.data.results){
    let player = await PlayerService.save(new Player(user.login.username, user.picture.large));
    playerList.push(player);
  }

  return playerList;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default tasks;