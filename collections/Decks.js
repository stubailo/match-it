Decks = new Mongo.Collection("decks");

Decks.schema = {
  name: String,
  createdBy: String, // userId
  createdAt: Date
};

if (Meteor.isServer) {
  Meteor.publish("decks", () => {
    // TODO: Paginate later
    return Decks.find();
  });
}

if (Meteor.isClient) {
  Decks.subscribeToDecks = function subscribeToDecks(deckId) {
    return Meteor.subscribe("decks");
  }
}
