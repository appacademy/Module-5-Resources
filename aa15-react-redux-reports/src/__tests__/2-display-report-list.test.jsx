import { act } from '@testing-library/react';

describe('02 - Display a List of Reports', () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
  });

  afterEach(() => {
    vi.resetModules();
    container.remove();
    container = null;
  });

  describe('ReportsIndex', () => {
    it('should load all the reports in the Redux store to align with how the reports are being used to render the ReportIndexItems', async () => {
      await act(async () => await import("../main.jsx"));
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><section><ul><li><a href=\"/reports/1\">Report #1</a><a href=\"/reports/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/reports/2\">Report #2</a><a href=\"/reports/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/reports/3\">Report #3</a><a href=\"/reports/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/reports/4\">Report #4</a><a href=\"/reports/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/reports/5\">Report #5</a><a href=\"/reports/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/reports/new\">New Report</a><button>Reset Data</button></section>");
    });
  });
});
