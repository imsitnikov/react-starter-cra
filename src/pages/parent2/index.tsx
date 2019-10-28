import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { MainLayout } from '@/layouts/main-layout';
// import { IRouterDependecies } from '@/modules/router/_types';
import { Page } from './page';

const pageNode = 'parent2';

const action = async (/* { store }: IRouterDependecies */) => {
  const workers = [];

  // injectAsyncReducer(store, 'home', reducer);

  // workers.push(store.dispatch(fetchSomeData1()));
  // workers.push(store.dispatch(fetchSomeData2()));
  // workers.push(store.dispatch(fetchSomeData3()));

  await Promise.all(workers);

  return {
    title: 'Parent 2 (with nesting)',
    content: (
      <MainLayout>
        <RouteNode nodeName={pageNode}>
          {({ route, content }) => <Page route={route}>{content}</Page>}
        </RouteNode>
      </MainLayout>
    ),
  };
};

export default action;
