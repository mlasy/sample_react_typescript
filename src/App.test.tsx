import App from './App'
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
  test('App renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})