import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import createFetchMock from 'vitest-fetch-mock';
import Weather from '../components/Weather.jsx';

createFetchMock(vi).enableMocks();

// The tests need to mock `navigator.geolocation.getCurrentPosition` so
// `getCurrentPosition` will return predictable responses. Simply mocking the
// function, however, is not enough: `navigator.geolocation` could be
// `undefined`--and consequently unable to run `getCurrentPosition`--if, e.g.,
// location services are turned off in the testing environment.
//
// These tests accordingly also need to mock `navigator.geolocation` to ensure
// that it exists (with `getCurrentPosition` defined on it). This is done by 1)
// saving the original `navigator.geolocation`, 2) assigning
// `navigator.geolocation` to a mock object, and 3) restoring the original
// `navigator.geolocation` at the conclusion of the tests.
const originalGeolocation = navigator.geolocation;
const mockGeolocation = {
  getCurrentPosition: vi.fn()
}

// Jest has not implemented `window.alert` in the jest-dom environment, so
// calling it in the code being tested will throw an error if it is not mocked.
window.alert = vi.fn();

describe('Folder', ()=> {
  beforeEach(() => {
    // `getCurrentPosition` passes the current coordinates to the callback that
    // received as its first argument.
    mockGeolocation.getCurrentPosition.mockImplementation(fn => fn({
      coords: {
        // NY coords
        latitude: 40.730610,
        longitude: -73.935242
      }
    }));
    navigator.geolocation = mockGeolocation;
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify({
      name: 'New York City',
      main: {
        temp: 300
      }
    }));
  });

  afterEach(() => {
    navigator.geolocation = originalGeolocation;
  });

  it('should show the Weather Widget', async () => {
    // Provide a 401 response so the site does not subsequently try to update
    // with fetched weather info. Successful updates would produce an `act()`
    // warning since this particular test does not check for them. (Subsequent
    // tests check the validity of such updates.)
    fetch.mockResponseOnce('', { status: 401 });
    render(<Weather />);
    expect(screen.getByRole('heading', { name: /^Weather/ })).toBeInTheDocument();
  });

  it('should fetch the weather from api.openweathermap.org', async () => {
    render(<Weather />);
    await waitFor(() => expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/api\.openweathermap\.org/)));
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should display the fetched city', async () => {
    render(<Weather />);
    expect(await screen.findByText('New York City')).toBeInTheDocument();
  });

  it('should display the fetched temperature', async () => {
    render(<Weather />);
    // Use a regular expression because test is only matching part of the string
    expect(await screen.findByText(/80.3/)).toBeInTheDocument();
  });

  it('should report that weather is unavailable if fetch fails', async () => {
    fetch.mockResponseOnce('Bad API key', { status: 401 });
    render(<Weather />);
    expect(await screen.findByText(/Weather is currently unavailable/)).toBeInTheDocument();
  });
});
