import { Router } from 'router5';
import { IActionResult } from '../_types';
import { getRoute } from '../utils';

export const getRouteActionResult = (router: Router) => (
  name: string,
): IActionResult | null => {
  const { routes } = router.getDependencies();
  const route = getRoute(name, routes);
  return route.actionResult || null;
};
