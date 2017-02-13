import React from 'react';
import style from './ProductCard.css';

export default class ProductCard extends React.Component {
  render() {
    const { title, imageUrl } = this.props.product;
    return (
      <div className={style.card}>
        <div className={style.image}>
          <img src={imageUrl}/>
        </div>
        <div className={style.info}>
          <div className={style.title}>{title}</div>
        </div>
      </div>
    );
  }
}

