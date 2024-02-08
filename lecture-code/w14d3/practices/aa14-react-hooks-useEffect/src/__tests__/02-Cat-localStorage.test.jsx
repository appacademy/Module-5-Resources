import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cat from '../Cat';

describe('Cat component - localStorage', () => {
  const getItemSpy = vi.spyOn(global.Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(global.Storage.prototype, 'setItem');

  afterEach(() => {
    getItemSpy.mockReset();
    setItemSpy.mockReset();
  });

  it('should store the cat status initial value of "418" in localStorage if there is no stored cat status in localStorage', async () => {
    getItemSpy.mockImplementation(() => null);
    render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    expect(getItemSpy).toHaveBeenCalled();
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/418$/));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([418, "418"]));
  });

  it('should show an initial cat status of "420" if the stored cat status in localStorage is "420"', async () => {
    getItemSpy.mockImplementation(() => '420');
    render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    expect(getItemSpy).toHaveBeenCalled();
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/420$/));
  });

  it('should show and store a new cat status in localStorage after the user submits a new status code', async () => {
    getItemSpy.mockImplementation(() => null);
    const user = userEvent.setup();
    render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    const changeStatusInput = screen.getByPlaceholderText('find new status');
    const submitButton = screen.getByRole('button', {
      name: 'Change Status',
    });

    await user.clear(changeStatusInput);
    expect(changeStatusInput).not.toHaveValue();
    await user.type(changeStatusInput, "599");
    expect(changeStatusInput).toHaveValue(599);
    await user.click(submitButton);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/599$/));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([599, "599"]));

    await user.clear(changeStatusInput);
    expect(changeStatusInput).not.toHaveValue();
    await user.type(changeStatusInput, "200");
    expect(changeStatusInput).toHaveValue(200);
    await user.click(submitButton);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/200$/));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([200, "200"]));
  });
});
