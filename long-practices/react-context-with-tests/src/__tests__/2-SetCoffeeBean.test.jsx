import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
import SetCoffeeBean from '../components/SetCoffeeBean';
import CoffeeProvider from '../context/CoffeeContext';
import coffeeBeans from '../mockData/coffeeBeans.json';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual, // use actual React for everything but useContext
    useContext: vi.fn()
  }
});

describe('SetCoffeeBean', () => {
  const mockFn = vi.fn();

  it ('should be invoked by the App component', () => {
    useContext.mockImplementation(() => ({
      coffeeBean: { id: 5, name: 'Set Bean' },
      setCoffeeBeanId: mockFn,
    }));

    render(
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    );
    
    // Use regex since not checking for whole string
    expect(screen.getByRole('heading', { name: /Select a Coffee Bean/ })).toBeInTheDocument();
    // Use `combobox` to grab the `select` input
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it ('should update coffeeBeanId when new coffee bean is selected from dropdown', async () => {
    const user = userEvent.setup();
    const setCoffeeBeanId = mockFn;
    useContext.mockImplementation(() => ({
      coffeeBean: 
      {
        "id": "3",
        "name": "Liberica"
      },
      setCoffeeBeanId
    }));

    render (
      <CoffeeProvider>
        <SetCoffeeBean coffeeBeans={coffeeBeans} />
      </CoffeeProvider>
    );
    
    await user.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Liberica'})
    )
    expect(setCoffeeBeanId).toHaveBeenCalledWith("3");
    
    await user.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Excelsa'})
    )
    expect(setCoffeeBeanId).toHaveBeenCalledWith("4");
  });

  it ('should cause SelectedCoffeeBean to update when a new coffee bean is selected (Integration test)', async () => {
    const user = userEvent.setup();
    const originalUseContext = (await vi.importActual('react')).useContext;
    useContext.mockImplementation((context) => originalUseContext(context));

    render (
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    );

    await user.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Excelsa'})
    )
    expect(screen.getByRole('heading', { name: 'Current Selection: Excelsa' })).toBeInTheDocument();
  });  
});

