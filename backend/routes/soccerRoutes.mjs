import { addNewPlayer, deletePlayer, getPlayers, getPlayerWithID, updatePlayer } from '../controllers/playerControllers.mjs';

const routes = (app) =>{
    app.route('/players')

    .get(getPlayers)
    // POST 
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer)
}


export default routes;