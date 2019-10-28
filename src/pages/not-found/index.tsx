import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { MainLayout } from '@/layouts/main-layout';
import { Page } from './page';

const pageNode = 'not-found';

const action = async () => ({
  title: '404',
  content: (
    <MainLayout>
      <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
    </MainLayout>
  ),
});

export default action;
