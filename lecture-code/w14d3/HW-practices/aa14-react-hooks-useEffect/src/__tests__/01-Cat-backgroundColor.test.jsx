/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cat from '../Cat';

describe('Cat component - background color', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should change color to the next color every 5 seconds', async () => {
    const { container } = render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 0, 0)'); // red

    act(() => vi.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(128, 0, 128)'); // purple

    act(() => vi.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 128, 0)'); // green

    act(() => vi.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 165, 0)'); // orange

    act(() => vi.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 0, 255)'); // blue
  });

  it('should reset the color to "red" after it changes its color 5 times', async () => {
    const { container } = render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 0, 0)'); // red

    act(() => vi.advanceTimersByTime(25000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 0, 0)'); // red
    act(() => vi.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(128, 0, 128)'); // purple
  });

  it('should change color to the next color every 2 seconds after the user submits a new delay of "2" seconds' , async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background: rgb(255, 0, 0)'); // red

    const changeDelayInput = screen.getByPlaceholderText('delay in seconds');
    const submitButton = screen.getByRole('button', { name: 'Change Delay' });

    await user.clear(changeDelayInput);
    expect(changeDelayInput).not.toHaveValue();
    await user.type(changeDelayInput, "2");
    expect(changeDelayInput).toHaveValue(2);
    await user.click(submitButton);
    expect(changeDelayInput).not.toHaveValue();

    act(() => vi.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: rgb(128, 0, 128)')); // purple

    act(() => vi.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 128, 0)')); // green
  });

  it('should be able to change the amount of time between color after the user submits any new delay between 1 and 10 secs' , async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter>
         <Cat />
      </MemoryRouter>
    );

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background: rgb(255, 0, 0)'); // red

    const changeDelayInput = screen.getByPlaceholderText('delay in seconds');
    const submitButton = screen.getByRole('button', { name: 'Change Delay' });

    await user.clear(changeDelayInput);
    expect(changeDelayInput).not.toHaveValue();
    await user.type(changeDelayInput, "2");
    expect(changeDelayInput).toHaveValue(2);
    await user.click(submitButton);
    expect(changeDelayInput).not.toHaveValue();

    act(() => vi.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: rgb(128, 0, 128)')); // purple

    act(() => vi.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 128, 0)')); // green

    await user.clear(changeDelayInput);
    expect(changeDelayInput).not.toHaveValue();
    await user.type(changeDelayInput, "8");
    expect(changeDelayInput).toHaveValue(8);
    await user.click(submitButton);
    expect(changeDelayInput).not.toHaveValue();

    act(() => vi.advanceTimersByTime(2000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 128, 0)'); // green
    act(() => vi.advanceTimersByTime(6000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 165, 0)')); // orange

    await user.clear(changeDelayInput);
    expect(changeDelayInput).not.toHaveValue();
    await user.type(changeDelayInput, "6");
    expect(changeDelayInput).toHaveValue(6);
    await user.click(submitButton);
    expect(changeDelayInput).not.toHaveValue();

    act(() => vi.advanceTimersByTime(6000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 0, 255)'); //blue

    await user.clear(changeDelayInput);
    expect(changeDelayInput).not.toHaveValue();
    await user.type(changeDelayInput, "10");
    expect(changeDelayInput).toHaveValue(10);
    await user.click(submitButton);
    expect(changeDelayInput).not.toHaveValue();

    act(() => vi.advanceTimersByTime(8000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(0, 0, 255)'); //blue
    act(() => vi.advanceTimersByTime(2000));
    expect(backgroundDiv).toHaveStyle('background-color: rgb(255, 0, 0)'); // red
  });
});
