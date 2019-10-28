import * as React from 'react';
import { Route } from 'router5';

interface IProps extends React.Props<any> {
  route: Route;
}

export const Page = ({ route }: IProps) => <div>Child 1 – {route.name}</div>;
