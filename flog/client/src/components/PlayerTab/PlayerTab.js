import React, { Component } from "react";
import "./PlayerTab.css";

class PlayerTab extends Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (
      <li
        className='player-tab list-group-item m-2 border-0 rounded'
        key={this.props.id}
        onClick={() => { this.props.playerTabClick( this.props.id ) }}>
        <div className='container'>
            <div className='row'>
                <div className='d-flex align-items-center'>
                    IMG
                </div>
                <div className='col'>
                    <div className='row'>
                        {this.props.firstName}
                    </div>
                </div>
            </div>
        </div>
      </li>
    );
  }
}

// const PlayerTab = props => (
//   <li
//     className='player-tab list-group-item m-2 border-0 rounded'
//     key={props.id}
//     onClick={this.props.showAnglerCard}>
//     <div className='container'>
//         <div className='row'>
//             <div className='d-flex align-items-center'>
//                 IMG
//             </div>
//             <div className='col'>
//                 <div className='row'>
//                     {props.firstName}
//                 </div>
//             </div>
//         </div>
//     </div>
//   </li>
// );

export default PlayerTab;
