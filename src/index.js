import React from 'react';
import './balloon.css';

export default function Tooltip(props) {
  const { parent } = props;
  const parentProps = {
    ...parent.props,
    'data-balloon': props.tooltip,
    'data-balloon-pos': props.position,
    'data-balloon-length': props.length,
  };
  return React.createElement(
    parent.type,
    props.disabled ? { ...parent.props } : { ...parentProps },
    { ...parent.props.children }
  );
}

Tooltip.defaultProps = {
  position: 'up',
  disabled: false,
  length: 'small',
}
