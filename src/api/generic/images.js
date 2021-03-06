import {
  genConfig, ReducerGenerator, genActions,
  ONE, MANY, POST, PUT, DELETE,
} from '~/api/internal';

export const config = genConfig({
  plural: 'images',
  endpoint: id => `/images/${id}`,
  supports: [ONE, MANY, POST, PUT, DELETE],
});

export const actions = genActions(config);
export const { reducer } = new ReducerGenerator(config);
