import React from 'react';

const PlayerSingle = (props) => {
    return (   
        <div className="row">
            <div className="col s12">
            <div className="card">
                <div className="card-image">
                    <img src="soccer.jpeg" at="Soccer" />
                    <span className="card-title">{props.player.firstName} {props.player.lastName} </span>
                </div>
                <div className="card-content">
                    <p>Phone: {props.player.phone} - Email:{props.player.email}</p>
                    <p>Endurance: {props.player.endurance} - Email:{props.player.email}</p>
                </div>
                <div className="card-action">
                    Team: {props.player.team}
                </div>
            </div>
            </div>
        </div> 
    );
}
 
export default PlayerSingle;