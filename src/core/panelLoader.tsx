import Note from './panels/Note/Note';
import Plot from './panels/Plot/Plot';
import StdOut from './panels/StdOut/StdOut';

export function panelsByCategory() {
  const glide = [
    { title: 'Note', component: Note },
    { title: 'Plot', component: Plot }
  ];
  const debug = [{ title: 'Messages', component: StdOut }];

  return {
    glide,
    debug
  };
}

export function panelCategories() {
  return [
    { label: 'Glide', key: 'glide' },
    { label: 'Debug', key: 'debug' }
  ];
}
