import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderComponent = ({ value, max }) => {
  return (
    <Slider
      value={value}
      max={max}
      trackStyle={{ backgroundColor: 'green', height: 10 }}
      handleStyle={{
        borderColor: 'green',
        height: 20,
        width: 20,
        marginLeft: -10,
        marginTop: -5,
        backgroundColor: 'white',
      }}
      railStyle={{ backgroundColor: '#d3d3d3', height: 10 }}
    />
  );
};

export default SliderComponent;
