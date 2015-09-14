// App component - represents the whole app
App = React.createClass({
  getCards() {
    return [
      { _id: 1, pictures: ["A", "B", "C", "D", "E", "F", "G", "O"] },
      { _id: 2, pictures: ["C", "H", "I", "J", "K", "L", "M", "N"] },
    ];
  },

  renderCards() {
    return this.getCards().map((card) => {
      return <Card key={card._id} card={card} isBottom={card._id === 2} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Match It!</h1>
        </header>

        <ul>
          {this.renderCards()}
        </ul>
      </div>
    );
  }
});