Pictures = new Mongo.Collection("pictures");

Pictures.schema = {
  name: String,
  imageUrl: String,
  deckId: String,
};
