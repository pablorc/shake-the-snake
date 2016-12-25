'use strict';

let store;

const bounds = {
  x: 30,
  y: 30
};

//Food collision detector
const foodCollider = () => {
  const state = store.getState();
  const [head, ...body] = state.snake.position;

  if (head[0] === state.food.x && head[1] === state.food.y) {
    store.dispatch({ type: 'EAT' });
  }
};

//Snake crashes with wall detector
const boundsCollider = () => {
  const state = store.getState();
  const position = state.snake.position;
  const head = position[position.length - 1];
  if (head[0] >= bounds.x ||
      head[0] < 0 ||
      head[1] < 0 ||
      head[1] >= bounds.y) {
    gameOver();
  }
}

//Snake crashes onto itself detector
const itselfCollider = () => {
  const state = store.getState();
  const [head, ...body] = state.snake.position;
  if (body.some((bodyPart) => bodyPart.toString() === head.toString())) {
    //gameOver();
  }
}

export const setupColliders = (newStore) => {
  store = newStore;
  store.subscribe(itselfCollider);
  store.subscribe(foodCollider);
  store.subscribe(boundsCollider);
}
