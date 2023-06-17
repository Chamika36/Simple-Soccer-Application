import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModels.mjs';

const Player = mongoose.model('Player' , PlayerSchema)

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);
  
    newPlayer.save()
      .then(savedPlayer => {
        res.json(savedPlayer);
      })
      .catch(error => {
        res.send(error);
      });
  };
  
  export const getPlayers = (req, res) => {
    Player.find({})
      .then(players => {
        res.json(players);
      })
      .catch(error => {
        res.send(error);
      });
  };

  export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId)
      .then(Player => {
        res.json(Player);
      })
      .catch(error => {
        res.send(error);
      });
  };

  export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true})
      .then(Player => {
        res.json(Player);
      })
      .catch(error => {
        res.send(error);
      });
  };

  export const deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.PlayerId})
      .then(Player => {
        res.json(Player);
      })
      .catch(error => {
        res.send(error);
      });
  };