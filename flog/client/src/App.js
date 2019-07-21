import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path='/me' component={Me} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
  </Router>
);

export default App;

// import React, { Component } from "react";
// import PlayerTab from "./components/PlayerTab";
// import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Content from './components/Content';
// import Sidebar from './components/Sidebar';
// import PlayerCard from './components/PlayerCard';
// import API from "./utils/API";
// import dummy from "./dummy.json";
// import "./App.css";

// class App extends Component {

//   state = {
//     dummy,
//     playerDisplayed: null,
//     players: []
//   };

//   componentDidMount() {
//     console.log('component did mount');
//     this.loadPlayers();
//   };

//   loadPlayers = () => {
//     console.log('load players');
//     API.getPlayers()
//       .then(res => {
//         console.log(res.data);
//         this.setState({ players: res.data })

//       })
//       .catch(err => console.log(err.response));
//   };

//   showPlayerCard = (id, name, totalScore, catches, inches, pounds) => {

//     console.log(id, name, totalScore, catches, inches, pounds);

//     this.setState({
//       playerDisplayed: {
//         id,
//         name,
//         totalScore,
//         catches,
//         inches,
//         pounds
//       }
//     });

//   };

//   render() {
//     return (
//       <Wrapper>
//         <Header>Friends List</Header>
//         <Body>
//           <Sidebar>
//             {this.state.players.map(player => (
//               <PlayerTab
//                 key={player._id}
//                 id={player._id}
//                 name={player.name}
//                 totalScore={player.totalScore}
//                 catches={player.catches}
//                 inches={player.catches}
//                 pounds={player.pounds}
//                 showPlayerCard={this.showPlayerCard}
//               />
//             ))}
//           </Sidebar>
//           <Content>
//           {this.state.playerDisplayed ? (
//               <PlayerCard
//                 name={this.state.playerDisplayed.name}
//                 totalScore={this.state.playerDisplayed.totalScore}
//                 catches={this.state.playerDisplayed.catches}
//                 pounds={this.state.playerDisplayed.pounds}
//                 inches={this.state.playerDisplayed.inches}
//               />
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Content>
//         </Body>
//       </Wrapper>
//     );
//   }
// }

// export default App;
