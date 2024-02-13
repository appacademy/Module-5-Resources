import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Clock, { ClockToggle } from '../components/Clock.jsx';

describe('ClockToggle', () => {
  it('should display a "Toggle Clock" button', () => {
    render(<ClockToggle />);
    expect(screen.getByRole('button', { name: 'Toggle Clock' })).toBeInTheDocument();
  });

  it('should run its callback when clicked', async () => {
    const user = userEvent.setup();
    const toggleClock = vi.fn();
    render(<ClockToggle toggleClock={toggleClock} />);

    const clockToggleButton = screen.getByRole('button', { name: 'Toggle Clock' });
    await user.click(clockToggleButton);
    expect(toggleClock).toHaveBeenCalled();
  });
})

describe('Clock', ()=> {
  // Mock console.error to eliminate erroneous `act` warning. This can be
  // removed once the testing library is fixed.
  console.error = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    // Always set the test time to 10:15:20 on Tuesday, Feb 14, 2023
    vi.setSystemTime(new Date(2023, 1, 14, 10, 15, 20));
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  // Because these tests use `FakeTimers`, an `act()` warning will appear if the
  // tests do not use (and await) asynchronous methods (e.g., `findBy*`). This
  // ensures that the tests will not miss any updates that a user might see.
  it('should show the Clock Widget', async () => {
    render(<Clock />);
    expect(await screen.findByRole('heading', { name: /^Clock/ })).toBeInTheDocument();
  });

  it('should display the correct time', async () => {
    render(<Clock />);
    expect(await screen.findByText(/^10:15:20/)).toBeInTheDocument();
  });

  it('should display the correct date', async () => {
    render(<Clock />);
    expect(await screen.findByText(/^Tue Feb 14 2023/)).toBeInTheDocument();
  });

  it('should increment the seconds every second', async () => {
    render(<Clock />);
    expect(await screen.findByText(/^10:15:20/)).toBeInTheDocument();
    await vi.advanceTimersByTime(1000);
    expect(screen.getByText(/^10:15:21/)).toBeInTheDocument();
  });
});
