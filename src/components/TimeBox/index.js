/* @flow */
import React, { Fragment } from 'react';

export type TimeBoxPropType = {
  selectedTime: number,
};

const times = [15, 30, 45, 60];

export default function TimeBox(props: TimeBoxPropType) {
  return (
    <Fragment>
      <h3>Choose the cooking time</h3>
      <div className="boxesGroup">
        {times.map(time => (
          <div
            className={`button ${time === props.selectedTime ? 'button-active' : 'button-grey'}`}
            onClick={() => props.handleTime(time)}
          >
            {time} min
          </div>
        ))}
      </div>
    </Fragment>
  );
}
