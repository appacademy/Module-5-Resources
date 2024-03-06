
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cat from '../Cat';

describe('BONUS: Cat component - reset cat status after 10 minutes of inactivity', () => {
  const getItemSpy = vi.spyOn(global.Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(global.Storage.prototype, 'setItem');

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
    getItemSpy.mockReset();
    setItemSpy.mockReset();
  });

  it('should reset the cat status to "418" if user has not updated the cat status at all', async () => {
    getItemSpy.mockImplementation(() => '420');
    render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    expect(getItemSpy).toHaveBeenCalled();
    expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/420$/));

    act(() => vi.advanceTimersByTime(600000 - 10));
    expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/420$/));
    act(() => vi.advanceTimersByTime(10));
    await waitFor(() => expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/418$/)));
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
    expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/420$/));
  });

  it('should reset cat status to "418" after 10 minutes', async () => {
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
    expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/599$/));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([599, "599"]));

    act(() => vi.advanceTimersByTime(600000 - 100));
    expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/599$/));
    act(() => vi.advanceTimersByTime(100));
    await waitFor(() => expect(screen.getByAltText('404')).toHaveAttribute('src', expect.stringMatching(/418$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([418, "418"]));
  });
});
