import child2 from './children/child2/route';

export default {
  name: 'parent2',
  path: '/parent2',
  loadAction: () => import('./index'),
  children: [child2],
};
