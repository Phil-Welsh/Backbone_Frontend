import React, { useState, setState } from 'react'
import GameModel from '../models/game'
import GameShowCard from '../components/GameShowCard'
import { useParams } from 'react-router-dom'

const GameShow = () => {
    const [ title, setTitle ] = useState('')
    const [ img, setImg ] = useState('')
    const [ id, setId ] = useState('')

    const params = useParams()

    GameModel.show(params.id).then(data => {
        setTitle( data.game.title )
        setImg ( data.game.coverArtUrl)
        setId ( data.game._id)
    })

    return (
        <div>
            < GameShowCard title={title} img={img} _id={id} />
        </div>
        );
    }

export default GameShow;


// import React from "react";

// import GameModel from "../models/game";

// import "./GameShow.css";

// class GameShow extends React.Component {
//   state = {
//     game: null,
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     GameModel.show(this.props.match.params.id).then(json => {
//       this.setState({
//         game: json.game,
//       });
//     });
//   };

//   deleteGame = event => {
//     GameModel.delete(this.props.match.params.id).then(json => {
//       this.props.history.push("/games");
//     });
//   };

//   render() {
//     return (
//       <div className='game-show'>
//         {this.state.game ? (
//           <>
//             <div className='game-show__hero'>
//               <h1
//                 style={{
//                   background: `linear-gradient(to top, black, transparent), url(${this.state.game.coverArtUrl})`,
//                   backgroundPosition: "top",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               >
//                 {this.state.game.title}
//               </h1>
//               <div className='game-show__publisher'>
//                 {this.state.game.publisher}
//               </div>
//               <button
//                 onClick={this.deleteGame}
//                 style={{
//                   background: "red",
//                   padding: "10px",
//                   color: "white",
//                   border: "none",
//                   margin: "20px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </>
//         ) : (
//           <h1>Loading....</h1>
//         )}
//       </div>
//     );
//   }
// }

// export default GameShow;
