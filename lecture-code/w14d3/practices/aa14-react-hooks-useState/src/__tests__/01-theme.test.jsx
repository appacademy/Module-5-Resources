import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UseState from '../components/UseState';
import '@testing-library/jest-dom';

describe('Theme in UseState component', () => {
  it('should display an initial theme of "light"', async () => {
    render(
      <UseState />
    );
    
    const theme = screen.getByText('UseState Component').parentElement;
    expect(theme).toHaveClass('state', 'light');
    expect(theme).not.toHaveClass('dark');
  });

  it('should display the "dark" theme when the "Dark" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <UseState />
    );
    
    const darkTheme = screen.getByRole('button', { name: "Dark"});
    const theme = screen.getByText('UseState Component').parentElement;
    expect(theme).toHaveClass('state', 'light');
    expect(theme).not.toHaveClass('dark');
    
    await user.click(darkTheme);
    expect(theme).toHaveClass('state', 'dark');
    expect(theme).not.toHaveClass('light');
    
    await user.click(darkTheme);
    expect(theme).toHaveClass('state', 'dark');
    expect(theme).not.toHaveClass('light');
  });

  it('should display the "light" theme when the "Light" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <UseState />
    );
    
    const darkTheme = screen.getByRole('button', { name: "Dark"});
    const lightTheme = screen.getByRole('button', { name: "Light"});
    const theme = screen.getByText('UseState Component').parentElement;
    
    await user.click(darkTheme);
    expect(theme).toHaveClass('state', 'dark');
    expect(theme).not.toHaveClass('light');
    
    await user.click(lightTheme);
    expect(theme).toHaveClass('state', 'light');
    expect(theme).not.toHaveClass('dark');
    
    await user.click(lightTheme);
    expect(theme).toHaveClass('state', 'light');
    expect(theme).not.toHaveClass('dark');
  });
});
