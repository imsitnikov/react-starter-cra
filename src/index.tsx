import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { configureRouter } from './modules/router';
import { createAppStore } from '@/redux/store';
import { RouteNode } from './modules/router/components';
import './index.css';

const ROOT_ELEMENT = document.getElementById('root');

const store = createAppStore();
const router = configureRouter();

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider key={1} router={router}>
        <RouteNode nodeName="">{({ content }) => content}</RouteNode>
      </RouterProvider>
    </Provider>,
    ROOT_ELEMENT,
  );
});
