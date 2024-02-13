import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', ()=> {
  it('should show the Clock Widget', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: /^Clock/})).toBeInTheDocument();
  });

  it('should show a button to toggle the Clock', () => {
    render(<App />);
    expect(screen.getByRole('button', {name: 'Toggle Clock'})).toBeInTheDocument();
  });

  it('should show the Autocomplete Widget', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: 'Autocomplete'})).toBeInTheDocument();
  });

  it('should show the Folder/Tabs Widget', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: 'Tabs'})).toBeInTheDocument();
  });

  it('should show the Weather Widget', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: 'Weather'})).toBeInTheDocument();
  });

  it('should toggle the Clock Widget when the "Toggle Clock" button is pushed', async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggleClockButton = screen.getByRole('button', {name: 'Toggle Clock'});
    await user.click(toggleClockButton);
    expect(screen.queryByRole('heading', {name: /^Clock/})).not.toBeInTheDocument();

    await user.click(toggleClockButton);
    expect(screen.getByRole('heading', {name: /^Clock/})).toBeInTheDocument();
  });
});
