import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { Page } from './page';

const pageNode = 'parent1.child1';

const action = async () => {
  const workers = [];

  // injectAsyncReducer(store, 'home', reducer);

  // workers.push(store.dispatch(fetchSomeData1()));
  // workers.push(store.dispatch(fetchSomeData2()));
  // workers.push(store.dispatch(fetchSomeData3()));

  await Promise.all(workers);

  return {
    title: 'Child 1',
    content: (
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return <Page route={route} />;
          }
          return content;
        }}
      </RouteNode>
    ),
  };
};

export default action;
