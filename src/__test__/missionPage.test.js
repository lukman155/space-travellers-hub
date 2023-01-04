import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../Pages/Missions';
import missionsReducer from '../Redux/Mission/mission';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

describe('Missions', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Missions />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
