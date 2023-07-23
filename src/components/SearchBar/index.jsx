import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
    console.log(this.state);
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();
    this.props.onSubmit(query);
    console.log(`${query} zostało wysłane do props`);
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    );
  }
}
