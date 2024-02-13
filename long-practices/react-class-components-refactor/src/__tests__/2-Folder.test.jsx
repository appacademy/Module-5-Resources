import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Folder from '../components/Folder.jsx';

describe('Folder', ()=> {
  const folders = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second folder here' },
    { title: 'three', content: 'Third folder here' }
  ];

  it('should show the Folder/Tabs Widget', () => {
    render(<Folder folders={folders} />);
    expect(screen.getByRole('heading', { name: /^Tabs/ })).toBeInTheDocument();
  });

  it('should switch to a folder when its tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Folder folders={folders} />);

    const tab2 = screen.getByText('two');
    await user.click(tab2);
    expect(screen.getByText('Second folder here')).toBeInTheDocument();
    expect(screen.queryByText('I am the first')).not.toBeInTheDocument();
    expect(screen.queryByText('Third folder here')).not.toBeInTheDocument();

    const tab3 = screen.getByText('three');
    await user.click(tab3);
    expect(screen.queryByText('Second folder here')).not.toBeInTheDocument();
    expect(screen.getByText('Third folder here')).toBeInTheDocument();
    expect(screen.queryByText('I am the first')).not.toBeInTheDocument();
  });
});
