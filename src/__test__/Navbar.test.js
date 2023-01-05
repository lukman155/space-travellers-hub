import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Navbar from '../Components/Navbar';
import App from '../App';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    fireEvent.click(screen.getByText(/My Profile/));

    expect(screen.getByText(/My Missions/)).toBeInTheDocument();
  });
});
