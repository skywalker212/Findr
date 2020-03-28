import React from 'react';
import './Spinner.css';

/**
 * Available variants
 * Size: la-small, la-default, la-2x, la-3x
 * Color: default white, la-dark for black color. Other colors can be applied through color property
 */
export default (props) => {
  let appliedClasses = props.className ? `la-ball-8bits ${props.className}` : "la-ball-8bits";
  return (
    <div className={appliedClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}