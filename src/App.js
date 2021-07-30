import { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  /**
   * Fetches the users
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((response) => response.json()) // transforms response body into json array (returns promise)
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleChange}
          ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  handleChange= e => {
     this.setState({searchField: e.target.value})
  }
}

export default App;
