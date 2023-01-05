import { render } from '@testing-library/react';
import Mission from '../Components/Mission/Missions';

jest.mock('react-redux');

describe('Test for mission component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render mission component', () => {
    const tree = render(
      <Mission
        name="test"
        description="test"
        index={1}
        join={false}
        keyValue="test"
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
