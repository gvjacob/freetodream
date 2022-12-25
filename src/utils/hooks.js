import React from 'react';

export function useToggle(initial = false) {
  const [state, setState] = React.useState(initial);
  const toggle = React.useCallback(() => setState(state => !state), []);

  return [state, toggle];
}
