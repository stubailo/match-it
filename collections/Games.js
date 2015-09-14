Games = new Mongo.Collection();

if (Meteor.isServer) {
  Meteor.publish("game", (gameId) => {
    return Games.find({_id: gameId});
  });
}

if (Meteor.isClient) {
  // Just so we don't have to call Meteor.subscribe directly
  Games.subscribeToGameId = function subscribeToDecks(gameId) {
    return Meteor.subscribe("game", gameId);
  };
}
