import { Component } from 'react';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

const API_KEY = `36950464-5a13f55b57e77fe0085f04ef4`;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount = () => {
    this.fetchImages();
    console.log(this.state.query);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
      console.log(this.state.query);
    }
  };

  handleSubmit = newQuery => {
    this.setState({
      page: 1,
      query: newQuery,
    });
  };

  fetchImages = async () => {
    this.setState({ isLoading: true });

    try {
      const { query, page } = this.state;

      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${
          page * 15
        }`
      );

      const data = await response.json();
      this.setState(prevState => ({
        ...prevState,
        images: data.hits,
        isLoading: false,
      }));

      console.log(this.state.images);
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  handleClick = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.fetchImages();
    console.log(`page: ${this.state.page}`);
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
        <SearchBar
          onSubmit={query => {
            this.handleSubmit(query);
          }}
        />
        {isLoading && <Loader />}

        <ImageGallery images={images} />
        {/* button have to be the last */}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleClick} />
        )}
      </>
    );
  }
}
