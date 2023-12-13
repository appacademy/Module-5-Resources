import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('04 - Display a Report\'s Details', () => {
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

  describe('show a detailed report page when the link to "/reports/:reportId" is clicked on the ReportIndexItem', () => {
    it('should show the first report when the "Report #1" text link is clicked', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "Report #1"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><section>ID: 1<br>Understanding: Confident I understand everything.<br>Improvement: Dang, I wish I knew Redux as well as Brad. Also, I need to get better at JavaScript.<br><a href=\"/\">Back to Report Index</a></section>");
    });

    it('should show the fourth report when the "Report #4" text link is clicked', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "Report #4"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><section>ID: 4<br>Understanding: Extremely comfortable. It's easy. Would ace the assessment.<br>Improvement: Wow, I wish I knew SQL as well as Todd. Also, I need to get better at Jest.<br><a href=\"/\">Back to Report Index</a></section>");
    });
  });
});
