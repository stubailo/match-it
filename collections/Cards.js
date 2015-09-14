Cards = Mongo.Collection("cards");

Cards.schema = {
  pictures: [String], // pictureIds
  deckId: String, // each card belongs to exactly one deck
};
