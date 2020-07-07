import React from 'react';

interface Props {
  componentName: string;
}

const Test = (props: Props): JSX.Element => {
  return <p>This is a {props.componentName}</p>;
};

export default Test;
