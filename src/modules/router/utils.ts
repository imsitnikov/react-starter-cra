import { transitionPath, State } from 'router5';
import { startsWithSegment } from 'router5-helpers';
import { IAdvancedRoute } from './_types';

export const getRoute = (
  segment: string,
  routes: IAdvancedRoute[],
): IAdvancedRoute | never => {
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    if (route.name === segment) {
      return route;
    }

    if (startsWithSegment(segment, route.name) && route.children) {
      const splitSegment = segment.split('.');
      splitSegment.shift();
      if (splitSegment.length > 0) {
        return getRoute(splitSegment.join('.'), route.children);
      }
    }
  }
  throw new Error('route not found');
};

export const getActivatedRoutes = (
  toState: State,
  fromState: State,
  routes: IAdvancedRoute[],
): IAdvancedRoute[] => {
  const { toActivate } = transitionPath(toState, fromState);
  if (!toActivate.includes(toState.name)) {
    toActivate.push(toState.name);
  }
  return toActivate.map(segment => getRoute(segment, routes));
};
