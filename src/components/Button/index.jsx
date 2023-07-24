import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className={css['loadmore-wrapper']}>
        <button className={css.button} onClick={onClick}>
          LOAD MORE
        </button>
      </div>
    );
  }
}
