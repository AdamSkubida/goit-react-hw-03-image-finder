import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };

  handleSubmit = () => {
    const { query } = this.state;
    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className={css[`form-wrapper`]}>
        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
        <button
          className={css.button}
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </header>
    );
  }
}
