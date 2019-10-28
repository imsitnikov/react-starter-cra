import * as React from 'react';
import { Route } from 'router5';

interface IProps extends React.Props<any> {
  route: Route;
}

export const Page = ({ route, children }: IProps) => (
  <>
    <div>Parent 2 (with nesting) – {route.name}</div>
    {children}
  </>
);
