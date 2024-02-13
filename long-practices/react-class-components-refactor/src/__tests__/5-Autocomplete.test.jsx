import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Autocomplete from '../components/Autocomplete.jsx';

describe('Folder', ()=> {
  const names = [
    'Abba',
    'Barbara',
    'Brenda'
  ];

  it('should show the Autocomplete Widget', () => {
    render(<Autocomplete names={names} />);
    expect(screen.getByRole('heading', { name: /^Autocomplete/ })).toBeInTheDocument();
  });

  it('should show a dropdown list of potential names when user clicks in box', async () => {
    const user = userEvent.setup();
    render(<Autocomplete names={names} />);

    const entry = screen.getByRole('textbox');
    expect(screen.queryByText('Abba')).not.toBeInTheDocument();
    await user.click(entry);
    expect(screen.getByText('Abba')).toBeInTheDocument();
    expect(screen.getByText('Barbara')).toBeInTheDocument();
  });

  it('should eliminate names from dropdown as user types', async () => {
    const user = userEvent.setup();
    render(<Autocomplete names={names} />);

    const entry = screen.getByRole('textbox');
    await user.type(entry, 'B');
    expect(screen.getByText('Barbara')).toBeInTheDocument();
    expect(screen.getByText('Brenda')).toBeInTheDocument();
    await waitFor (()=> expect(screen.queryByText('Abba')).not.toBeInTheDocument());

    await user.type(entry, 'a');
    expect(screen.getByText('Barbara')).toBeInTheDocument();
    await waitFor (()=> expect(screen.queryByText('Brenda')).not.toBeInTheDocument());
  });

  it('should autocomplete when a user clicks on a suggested name', async () => {
    const user = userEvent.setup();
    render(<Autocomplete names={names} />);

    const entry = screen.getByRole('textbox');
    await user.type(entry, 'B');
    const brenda = screen.getByText('Brenda');
    await user.click(brenda);
    expect(screen.getByRole('textbox', 'Brenda')).toBeInTheDocument();
  });

  it('should close dropdown when a user clicks on a suggested name', async () => {
    const user = userEvent.setup();
    render(<Autocomplete names={names} />);

    const entry = screen.getByRole('textbox');
    await user.click(entry);
    const brenda = screen.getByText('Brenda');
    await user.click(brenda);
    expect(brenda).not.toBeInTheDocument();
  });

  it('should close dropdown when a user clicks outside the entry box', async () => {
    const user = userEvent.setup();
    render(<Autocomplete names={names} />);

    const entry = screen.getByRole('textbox');
    await user.type(entry, 'B');
    const brenda = screen.getByText('Brenda');
    await user.click(document.body);
    expect(brenda).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', 'B')).toBeInTheDocument();
  });
});
