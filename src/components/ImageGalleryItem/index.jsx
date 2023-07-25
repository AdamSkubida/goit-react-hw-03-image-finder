import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  handleModal = () => {
    const { isOpen } = this.state;

    if (isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    const { isOpen } = this.state;

    return (
      <>
        {isOpen && (
          <Modal
            onClick={this.handleModal}
            largeImg={largeImageURL}
            alt={tags}
          />
        )}
        <li onClick={this.handleModal}>
          <img className={css.img} src={webformatURL} alt={tags} />
        </li>
      </>
    );
  }
}
