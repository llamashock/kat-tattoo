import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => <div className="container mx-auto px-5">{children}</div>;

export default Container;
