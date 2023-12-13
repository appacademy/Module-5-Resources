import { screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('05 - Create a Report', () => {
  let container, user;

  beforeEach(() => {
    user = userEvent.setup();
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
    vi.mock('react-router-dom', async () => {
      // Require the original module to not be mocked...
      const originalModule = await vi.importActual('react-router-dom');
      return {
        ...originalModule,
        createBrowserRouter: originalModule.createMemoryRouter,
      };
    });
  });

  afterEach(() => {
    vi.resetModules();
    container.remove();
    container = null;
  });

  describe('inserts a new report into the Redux store from the CreateReportForm', () => {
    it('should insert the new report into the Redux store when CreateReportForm is submitted', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "New Report"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><form><h2>Create Report</h2><label>Understanding<input type=\"text\" value=\"\"></label><label>Improvement<textarea></textarea></label><input type=\"submit\" value=\"Create Report\"></form>");

      const understandingInput = screen.getByLabelText('Understanding');
      const improvementInput = screen.getByLabelText('Improvement');
      expect(understandingInput).toHaveValue('');
      expect(improvementInput).toHaveValue('');

      const understandingValue = '3';
      const improvementValue = '4';
      fireEvent.change(understandingInput, { target: { value: understandingValue } });
      expect(understandingInput).toHaveValue(understandingValue);
      fireEvent.change(improvementInput, { target: { value: improvementValue } });
      expect(improvementInput).toHaveValue(improvementValue);

      const submitBtn = screen.getByRole('button', { name: "Create Report"});
      await user.click(submitBtn);
      expect(container.innerHTML).toMatch(new RegExp(`<h1>Progress Tracker Lite</h1><section>ID: .{5}<br>Understanding: ${understandingValue}<br>Improvement: ${improvementValue}<br><a href="/">Back to Report Index</a></section>`));
    });
  });
});
