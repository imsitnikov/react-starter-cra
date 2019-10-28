import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import { configureRouter } from './modules/router';
import { RouteNode } from './modules/router/components';
import * as serviceWorker from './serviceWorker';
import './index.css';

const router = configureRouter();

router.start(() => {
  ReactDOM.render(
    <RouterProvider key={1} router={router}>
      <RouteNode nodeName="">{({ content }) => content}</RouteNode>
    </RouterProvider>,
    document.getElementById('root'),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
