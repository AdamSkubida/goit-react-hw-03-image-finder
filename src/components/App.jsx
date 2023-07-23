import { Component } from 'react';
import { SearchBar } from './SearchBar';

const API_KEY = `36950464-5a13f55b57e77fe0085f04ef4`;

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  componentDidMount = () => {
    this.fetchImages();
    console.log(this.state.query);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
      console.log(this.state.query);
    }
  };

  handleSubmit = newQuery => {
    this.setState({ query: newQuery });
  };

  fetchImages = async () => {
    try {
      const { query } = this.state;

      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const data = await response.json();
      this.setState(prevState => ({
        ...prevState,
        images: data.hits,
      }));
      console.log(this.state.images);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SearchBar
        onSubmit={query => {
          this.handleSubmit(query);
        }}
      />
    );
  }
}
