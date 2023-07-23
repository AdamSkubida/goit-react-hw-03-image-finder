import { Component } from 'react';
import css from './SearchBar.module.css';

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
      <header className={css[`form-wrapper`]}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button className={css.button} type="submit">
            Submit
          </button>
        </form>
      </header>
    );
  }
}
