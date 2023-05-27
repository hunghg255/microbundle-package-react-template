import React from 'react';

interface IPropsHello {
  title: string;
}

const Hello = (props: IPropsHello) => {
  return (
    <React.Fragment>
      <h1>Hello Hello {props.title}</h1>
    </React.Fragment>
  );
};

export { Hello };
