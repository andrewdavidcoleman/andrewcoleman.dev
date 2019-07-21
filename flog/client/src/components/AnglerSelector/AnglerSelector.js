import React, { Component } from "react";
import API from "../../utils/API";
import PlayerTab from '../../components/PlayerTab';

class AnglerSelector extends Component {

    constructor(props) {

        super(props);

        this.state = {
          anglerList: [],
          activeAngler: props.loggedInUser
        };

    }

    componentWillMount() {
        this.setState({
            anglerList: API.getAnglers()
        });
    }

    render(){
        return(
            <div className='ul'>
                {this.state.anglerList.map(angler => (
                    <PlayerTab
                      key={angler.id}
                      id={angler.id}
                      firstName={angler.firstName}
                      lastName={angler.lastName}
                      catches={angler.catches}
                    />
                ))}
            </div>
        )
    }

};

export default AnglerSelector;
