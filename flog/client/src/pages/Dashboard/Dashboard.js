import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import CatchCard from '../../components/CatchCard';
import API from "../../utils/API";
import "../../App.css";

class Dashboard extends Component {

  constructor(props) {

    super(props);

    this.state = {
      loggedInUser: 1,
      filterSelected: 'angler',
      filterById: 1,
      catchList: [],
    };

  }

    componentWillMount() {

      const catchList = API.getCatchesByAnglerId(this.state.loggedInUser);

      this.setState({
        catchList
      });

    };

    filterTabClick(filterSelected){
        this.setState({
          filterSelected
        });
    }

    anglerTabClick(anglerId){
        this.setState({
            filterById: anglerId
        });
    }

    speciesTabClick(speciesId){
        this.setState({
            filterById: speciesId
        })
    }

  render() {

    return (
      <Wrapper>
        <Header>Friends List</Header>
        <Body>
          <Sidebar
            filterSelected={this.state.filterSelected}
            filterTabClick={this.filterTabClick}
            anglerTabClick={this.anglerTabClick}
            speciesTabClick={this.speciesTabClick}
          />
          <Content>
            {this.state.catchList.map(fish => (
                <CatchCard
                  key={fish.id}
                  id={fish.id}
                  caughtById={fish.caughtById}
                  speciesId={fish.speciesId}
                  note={fish.note}
                  location={fish.location}
                  dateCaught={fish.dateCaught}
                />
            ))}
          </Content>
        </Body>
      </Wrapper>
    );
  }
}

export default Dashboard;
