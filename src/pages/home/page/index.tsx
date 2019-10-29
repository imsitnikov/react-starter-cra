import * as React from 'react';
import { Route } from 'router5';
import { TestForm } from '@/_components';

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <>
    <div>Home – {route.name}</div>
    <div>
      <TestForm />
    </div>
  </>
);
