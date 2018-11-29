/* @flow */
import React from 'react';
import './styles.css';

export type IngredientPropType = {
  id: string,
  name: string,
  img: string,
  color: string,
  onDragStart: (ev: SyntheticDragEvent<*>) => void,
  onDragOver: (ev: SyntheticDragEvent<*>) => void,
  onDrop: (ev: SyntheticDragEvent<*>) => void,
};

export default function Ingredient(props: IngredientPropType) {
  return (
    <div
      draggable
      className={`ingredient ${props.name}`}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
    />
  );
}
