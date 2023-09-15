import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Balance from './features/balance/balance';
import { Provider } from 'react-redux';

import store from "./store";

  test('renders learn react link', () => {
    
    const storage = store;
    render(<App />);
    
    var state = storage.getState();

    // Temukan tombol dan klik
    const buttonElement = screen.getByTestId('deposit');
    fireEvent.click(buttonElement);
    
    // Dapatkan state Redux setelah tindakan dilakukan
    var newState = storage.getState();

    // Lakukan assertion pada state Redux
    expect(newState.balance.total).toBe(state.balance.total+10); 
    state = newState;

    const withdraw = screen.getByTestId('withdraw');
    fireEvent.click(withdraw);

    newState = storage.getState();
    expect(newState.balance.total).toBe(state.balance.total-10); 
    state = newState;
    
    const text = screen.getByTestId("nilai");
    expect(text).toBeInTheDocument();



    // render(<App />);
    // expect(state.textContent).toBe("$ 0");
    // // Memeriksa nilai state awal

    // // Memicu perubahan state (contoh: dengan memicu event)
    // const buttonElement = screen.getByTestId('deposit');
    // fireEvent.click(buttonElement);

    // // Memeriksa nilai state setelah perubahan
    // // const state = screen.getByTestId("nilai");
    // expect(state.textContent).toBe("$ 10");
  });
