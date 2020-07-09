import Note from './panels/Note/Note';

export function panelsByCategory() {
  // const StdOut = require('src/core/panels/StdOut').default;
  // const Note = require('src/core/panels/Note').default;

  const glide = [
    { title: 'StdOut', component: () => {} },
    { title: 'Note', component: Note }
  ];

  const debug = [{ title: 'Messages', component: Note }];

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
