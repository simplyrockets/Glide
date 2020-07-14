import Note from './panels/Note/Note';
import StdOut from './panels/StdOut/StdOut';

export function panelsByCategory() {
  const glide = [{ title: 'Note', component: Note }];
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
