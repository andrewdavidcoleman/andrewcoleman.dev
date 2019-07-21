import React, { Component } from "react";
import SpeciesTab from '../../components/SpeciesTab';
import API from "../../utils/API";



class SpeciesSelector extends Component {

    constructor(props) {

        super(props);

        this.state = {
            speciesList: []
        };

    }

    componentWillMount() {

        const that = this;
        this.setState({
            speciesList: API.getAllSpecies()
        });
        // API.getAnglers(this.state.id, function(res){
        //     console.log(res);
        //     that.setState({
        //       anglerList: res.anglerList
        //     });
        //
        // });

    }

    render(){
        return(
            <div className='ul'>
                {this.state.speciesList.map(species => (
                    <SpeciesTab
                      key={species.id}
                      id={species.id}
                      name={species.name}
                    />
                ))}
            </div>
        )
    }

};

export default SpeciesSelector;
