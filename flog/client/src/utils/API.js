import axios from "axios";

// dummy data for UI work
export default {
  getAnglers: function() {
    return [
        {
            id: 1,
            firstName: 'Andrew',
            lastName: 'Coleman',
            catches: 0
        },
        {
            id: 2,
            firstName: 'Jordan',
            lastName: 'Long',
            catches: 0
        },
        {
            id: 3,
            firstName: 'Chris',
            lastName: 'Todd',
            catches: 0
        },
        {
            id: 4,
            firstName: 'Caleb',
            lastName: 'Baldree',
            catches: 0
        }
    ];
  },
  getAllSpecies: function() {
    return [
        {
            id: 1,
            name: 'Brown Trout'
        },
        {
            id: 2,
            name: 'Rainbow Trout'
        },
        {
            id: 3,
            name: 'Brook Trout'
        },
    ]
  },
  getAngler: function(id) {
    return axios.get(`/api/angler/${id}`);
  },
  getCatchesByAnglerId: function(playerId) {
    return [
        {
            caughtById: 1,
            speciesId: 3,
            dateCaught: Date.now,
            note: 'caught by 1 species 3',
            location: 'Green River, Utah'
        },{
            caughtById: 1,
            speciesId: 2,
            dateCaught: Date.now,
            note: 'caught by 1 species 2',
            location: 'Green River, Utah'
        },{
            caughtById: 1,
            speciesId: 1,
            dateCaught: Date.now,
            note: 'caught by 1 species 1',
            location: 'Green River, Utah'
        },
    ]
    // return axios.get(`/api/catches/playerId/${playerId}`)
  },
  getCatchById: function(catchId) {
    return axios.get(`/api/catches/${catchId}`)
  },
  getCatchesBySpeciesId: function(speciesId) {
    return [
        {
            caughtById: 2,
            speciesId: 3,
            dateCaught: Date.now,
            note: 'species 3 caught by 2',
            location: 'Green River, Utah'
        },{
            caughtById: 1,
            speciesId: 3,
            dateCaught: Date.now,
            note: 'species 3 caught by 1',
            location: 'Green River, Utah'
        },{
            caughtById: 3,
            speciesId: 3,
            dateCaught: Date.now,
            note: 'species 3 caught by 3',
            location: 'Green River, Utah'
        },{
            caughtById: 4,
            speciesId: 3,
            dateCaught: Date.now,
            note: 'species 3 caught by 4',
            location: 'Green River, Utah'
        },
    ]
  },
  // getPlayerCardData: function(anglerId, callback) {
  //     //Hard coded for UI work
  //     callback({
  //         lastName: 'Coleman',
  //         firstName: 'Andrew',
  //         catches: 3,
  //         catchList: [
  //               {
  //               caughtById: 1,
  //               createdAt: "2019-05-20T00:31:42.000Z",
  //               id: 1,
  //               speciesId: 3,
  //               updatedAt: "2019-05-20T00:31:42.000Z",
  //               note: 'Caught on a chernobyl ant.',
  //               location: 'Green River, Utah'
  //               },{
  //               caughtById: 1,
  //               createdAt: "2019-05-20T00:31:42.000Z",
  //               id: 2,
  //               speciesId: 3,
  //               updatedAt: "2019-05-20T00:31:42.000Z",
  //               note: 'Caught on a chernobyl ant.',
  //               location: 'Green River, Utah'
  //               },{
  //               caughtById: 1,
  //               createdAt: "2019-05-20T00:31:42.000Z",
  //               id: 3,
  //               speciesId: 3,
  //               updatedAt: "2019-05-20T00:31:42.000Z",
  //               note: 'Caught on a chernobyl ant.',
  //               location: 'Green River, Utah'
  //               }
  //           ]
  //     });
  //     // return axios.get(`/api/catches/${anglerId}`)
  // }
};
