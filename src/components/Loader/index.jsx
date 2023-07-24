import { Component } from 'react';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <div className={css.spinner}></div>
      </div>
    );
  }
}
