/* @flow */
import React from 'react';

export type IngredientPropType = {
  name: string,
  img: string,
};

export default function Ingredient(props: IngredientPropType) {
  return <div>{props.name}</div>;
}
