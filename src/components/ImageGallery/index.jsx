import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    isOpen: false,
  };

  openModal = e => {
    this.setState({ isOpen: true });

    this.props.isOpen(this.state.isOpen);
  };

  render() {
    const { images } = this.props;

    return (
      <ul className={css.list}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            item={image}
            onClick={this.openModal}
          />
        ))}
      </ul>
    );
  }
}
