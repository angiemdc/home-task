import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

describe('click submit button', () => {
  it('test submit button', () => {
    const { getByTestId } = render(<Search />);
    const btn = getByTestId('searchBtn');
    expect(btn).toBeTruthy();
  });

  it('onSubmit', () => {
    const { getByText } = render(<Search />);
    const btn = getByText(/search/i);
    userEvent.click(btn);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/search/`, {
      replace: false
    });
  });

  it('onSubmit with a input value', () => {
    const { getByRole, getByTestId } = render(<Search />);
    const inputSearch = getByRole('searchbox');
    const btn = getByTestId('searchBtn');

    userEvent.type(inputSearch, 'pulp fiction');

    userEvent.click(btn);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/search/pulp fiction`, {
      replace: false
    });
  });
});

describe('get input value and user hits Enter ', () => {
  it('keyDown', () => {
    const { getByRole } = render(<Search />);
    const inputSearch = getByRole('searchbox');

    userEvent.type(inputSearch, 'la la land{enter}');
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/search/la la land`, {
      replace: false
    });
  });
});
