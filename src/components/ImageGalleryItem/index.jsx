import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props.item;

    return (
      <>
        <li>
          <img className={css.img} src={webformatURL} alt={tags} />
        </li>
      </>
    );
  }
}
