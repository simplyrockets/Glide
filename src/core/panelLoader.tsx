import React from 'react';

export function panelsByCategory() {
  const StdOut = require('src/core/panels/StdOut').default;

  const glide = [
    { title: "StdOut", component: StdOut }
  ];

  return { glide };
}