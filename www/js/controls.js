'use strict';

export const setupRunControls = (store) => {
  window.addEventListener("keydown", event => {
    const movement = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',

      65: 'left',  // w
      87: 'up',    // a
      68: 'right', // s
      83: 'down',   // d

      72: 'left',  // h
      74: 'down',  // j
      75: 'up',    // k
      76: 'right'  // l

    };
    if( movement[event.keyCode] ) {
      store.dispatch({
        type: 'CHANGE_DIR',
        direction: movement[event.keyCode]
      });
    }
  }, true);
}

export const setupOptionsControls = (store) => {
  window.addEventListener("keydown", event => {
    if( event.keyCode === 82 && event.target.tagName != 'INPUT'){
      store.dispatch({ type: 'RESTART' });
    }
  }, true);
}
