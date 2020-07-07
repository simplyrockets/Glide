import React from 'react';
import Note from './panels/Note/Note';

export function panelsByCategory() {
  // const StdOut = require('src/core/panels/StdOut').default;
  // const Note = require('src/core/panels/Note').default;

  const glide = [
    // { title: "StdOut", component: StdOut },
    { title: "Note", component: Note },
  ];

  return {
    glide
  };
}