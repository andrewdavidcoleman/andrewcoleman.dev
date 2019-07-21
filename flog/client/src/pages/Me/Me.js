import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import PlayerCard from '../../components/PlayerCard';
import CatchCard from '../../components/CatchCard';
import API from "../../utils/API";

class Me extends Component {

  state = {
    catches: [0, 1, 2, 3]
  };

  componentWillMount() {

    API.getPlayer('5b9010d967ab4a6b4e1ff8c5').then(res => {

      console.log(res.data);
      this.setState({ player: res.data });

    }).catch(err => console.log(err.response));

  };

  render() {
    return (
      <Wrapper>
          <div className='row h-100 align-items-center'>
            <div className='col-4 h-100'>IMG</div>
            <div className='col-8 h-100'>
              { this.state.player ?
                <PlayerCard
                  name={this.state.player.name}
                  totalScore={this.state.player.totalScore}
                  catches={this.state.player.catches}
                  pounds={this.state.player.pounds}
                  inches={this.state.player.inches}
                /> : null
              }

            </div>
          </div>
          <div className='row h-100 align-items-center'>
            <div className='col h-100'>
              <CatchCard />
            </div>
          </div>
      </Wrapper>
    );
  }
}

export default Me;
