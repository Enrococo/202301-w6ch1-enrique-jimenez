import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../app/store';
import { Counter } from './Counter';

describe('Given a Counter', () => {
  test('when rendered there should display seven buttons', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(7);
  });

  test('When a the dicrease button - is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrementValue = jest.fn();
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton, (onclick = decrementValue()));
    expect(decrementValue).toHaveBeenCalledTimes(1);
  });

  test('When a the dicrease button + is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementValue = jest.fn();
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton, (onclick = incrementValue()));
    expect(incrementValue).toHaveBeenCalledTimes(1);
  });

  test('When a the addAsync button is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const addAsync = jest.fn();
    const addAsyncButton = screen.getByText('Add Async');
    fireEvent.click(addAsyncButton, (onclick = addAsync()));
    expect(addAsync).toHaveBeenCalledTimes(1);
  });

  test('When a the addAmount button is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const addAmount = jest.fn();
    const addAmountButton = screen.getByText('Add Amount');
    fireEvent.click(addAmountButton, (onclick = addAmount()));
    expect(addAmount).toHaveBeenCalledTimes(1);
  });
  test('When a the addIfOdd button is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const addIfOdd = jest.fn();
    const addIfOddButton = screen.getByText('Add If Odd');
    fireEvent.click(addIfOddButton, (onclick = addIfOdd()));
    expect(addIfOdd).toHaveBeenCalledTimes(1);
  });

  test('When a the initfromAPI button is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const initApi = jest.fn();
    const initApiButton = screen.getByText('Init from api');
    fireEvent.click(initApiButton, (onclick = initApi()));
    expect(initApi).toHaveBeenCalledTimes(1);
  });

  test('When a the reset button is clicked, a function is called', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const reset = jest.fn();
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton, (onclick = reset()));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
