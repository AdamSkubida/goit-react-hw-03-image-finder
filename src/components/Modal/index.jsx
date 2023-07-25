import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { largeImg, onClick } = this.props;

    return (
      <div className={css.overlay} onClick={onClick}>
        <div className={css.modal}>
          <img src={largeImg} />
        </div>
      </div>
    );
  }
}
