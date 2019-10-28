import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { Page } from './page';

const pageNode = 'parent2.child2';

const action = async () => {
  return {
    title: 'Child 2',
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
