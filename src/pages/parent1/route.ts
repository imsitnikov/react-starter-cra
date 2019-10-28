import child1 from './children/child1/route';

export default {
  name: 'parent1',
  path: '/parent1',
  loadAction: () => import('./index'),
  children: [child1],
};
