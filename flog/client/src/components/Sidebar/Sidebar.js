import React, { Component } from "react";
import "./Sidebar.css";
import AnglerSelector from '../../components/AnglerSelector';
import SpeciesSelector from '../../components/SpeciesSelector';
import LocationSelector from '../../components/LocationSelector';
import DateSelector from '../../components/DateSelector';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends Component {

    constructor(props) {

        super(props);

        this.state = {
          loggedInUser: 1,
          filterSelected: props.filterSelected
        };

    }

    render(){
        return(
            <div className='col sidebar _background-cambridge'>
                <div className='row filter-selector-row'>
                    <div onClick={() => this.props.filterSelected('angler')} className={"col d-flex justify-content-center align-items-center filter-selector-icon " + (this.props.filterSelected === 'angler' ? 'active' : null)}>
                        <i className="fas fa-user"></i>
                    </div>
                    <div onClick={() => this.props.filterSelected('species')} className={"col d-flex justify-content-center align-items-center filter-selector-icon " + (this.props.filterSelected === 'species' ? 'active' : null)}>
                        <i className="fas fa-fish"></i>
                    </div>
                    <div onClick={() => this.props.filterSelected('location')} className={"col d-flex justify-content-center align-items-center filter-selector-icon " + (this.props.filterSelected === 'location' ? 'active' : null)}>
                        <i className="fas fa-map-marked"></i>
                    </div>
                    <div onClick={() => this.props.filterSelected('date')} className={"col d-flex justify-content-center align-items-center filter-selector-icon " + (this.props.filterSelected === 'date' ? 'active' : null)}>
                        <i className="fas fa-calendar"></i>
                    </div>
                </div>
                {{
                    angler: (
                      <AnglerSelector/>
                    ),
                    species: (
                      <SpeciesSelector/>
                    ),
                    location: (
                      <LocationSelector/>
                    ),
                    date: (
                      <DateSelector/>
                    )
                }[this.props.filterSelected]}
            </div>
        )
    }

};

export default Sidebar;
