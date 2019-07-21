import React, { Component } from "react";
import CatchCard from '../../components/CatchCard';
import API from "../../utils/API";
import './PlayerCard.css';

class PlayerCard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: props.anglerDisplayed,
            firstName: null,
            lastName: null,
            catches: null,
            catchList: []
        };

    }

    componentWillMount() {

        const that = this;

        API.getPlayerCardData(this.state.id, function(res){

            that.setState({
              firstName: res.firstName,
              lastName: res.lastName,
              catches: res.catches,
              catchList: res.catchList
            });

        });

        // API.getAngler(this.state.id)
        // .then(res => {
        //
        //   this.setState({
        //       firstName: res.data.firstName,
        //       lastName: res.data.lastName,
        //       catches: res.data.catches
        //   });
        //
        // })
        // .catch(err => console.log(err.response));
        //
        // API.getCatchesByAnglerId(this.state.id)
        // .then(res => {
        //
        //     console.log(res.data);
        //     this.setState({
        //         catchList: res
        //     });
        //
        // })
        // .catch(err => console.log(err.response));

    };

    render() {
        return (
            <div className='player-card flex-fill card m-3'>
                <div className='player-card-header card-header'>
                {this.state.firstName} {this.state.lastName}
                </div>
                <div className='player-card-body container-fluid d-flex pb-0 pt-0 card-body'>
                    <div className='row flex-fill'>
                        <div className='col _overflow-auto'>
                        {this.state.catchList.map(fish => (
                          <CatchCard
                            key={fish.id}
                            id={fish.id}
                            caughtById={fish.caughtById}
                            speciesId={fish.speciesId}
                            note={fish.note}
                            location={fish.location}
                          />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerCard;
