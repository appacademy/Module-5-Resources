# React-Redux Reports Project

**You will have 2 hours for this project. Treat it like an assessment.**

Read the ENTIRE instructions before running specs for the first time; it
contains important information about running tests with Vitest, a fast testing
suite built to take advantage of Vite's module-based approach.

## Background

You will be adding Redux onto a self-reflection report app called "Progress
Tracker Lite". This application should allow for the creation, display,
updating, and deletion of reports.

This application allows the user to perform CRUD on reports. Each report has
three fields: `id`, `understanding`, and `improvement`.

When the application is refreshed, all data will be reset and no data should
persist.

You will create a Redux store and properly connect the components in the React
application to the Redux store and store the reports data in the Redux store.

## Setup

If any step of the setup fails, ask an instructor for help.

1. Download or clone the repository.
2. `cd` into the the repository folder.
3. Run `npm install`.

To test your code live in the browser, run:

1. `npm run dev` runs your app in watch mode so it will update with changes.
2. Navigate to [`localhost:5173`].

## Your task

Your task for this project is to set up the Redux store and to properly
connect the React components to the Redux store to achieve the desired outcomes.

Do not worry about styling or trying to give your app a pretty display.
Functionality is all you need to worry about in this project.

**DO NOT** manipulate the `return` value of any of the React components
**besides** the `Root` component in the __src/main.jsx__. Doing so may not allow
some test specs to run properly. You can add to or manipulate the code in the
React components **except** the `return` value.

## Running specs

You will be testing your code using Vitest with React Testing Library. Run `npm
test` to run all the test specs. Vitest will then enter watch mode, which will
start watching your files for changes and run all the test specs whenever your
files change. To run all your tests again rather than waiting for a file change,
use the `a` command, as outlined in the `h`elp menu of options for running
tests manually. To exit watch mode, type `q` (or `^c`).

See the 'Debugging Tips' section below for information on how to run tests from
a single spec file.

For this practice, Vitest specs live in a single __\_\_tests\_\___ folder within
the __src__ folder:

1. **src/\_\_tests\_\_/1-setup-redux.test.jsx**
2. **src/\_\_tests\_\_/2-display-report-list.test.jsx**
3. **src/\_\_tests\_\_/3-remove-report.test.jsx**
4. **src/\_\_tests\_\_/4-display-report-details.test.jsx**
5. **src/\_\_tests\_\_/5-create-report.test.jsx**
6. **src/\_\_tests\_\_/6-update-report.test.jsx**
7. **src/\_\_tests\_\_/7-reset-reports.test.jsx**

## Phase 1: Set up Redux

In the **src/store/store.jsx** file, **create, initiate, and return** a Redux
store with all the necessary parameters in the `configureStore` function.

The data in the initial Redux store state should be dependent on the data within
the __src/data/initial-reports.json__ file. The data in the file needs to be
converted into the following initial Redux store state:

```js
{
   reports: {
      '1': {
         id: 1,
         improvement: 'Dang, I wish I knew Redux as well as Brad. Also, I need to get better at JavaScript.',
         understanding: 'Confident I understand everything.'
      },
      '2': {
         id: 2,
         improvement: 'Golly, I wish I knew JavaScript as well as Luke. Also, I need to get better at Git.',
         understanding: 'Confident I understand all.'
      },
      '3': {
         id: 3,
         improvement: 'Golly, I wish I knew React as well as Tyler. Also, I need to get better at Redux.',
         understanding: 'Confident I understand all.'
      },
      '4': {
         id: 4,
         improvement: 'Wow, I wish I knew SQL as well as Todd. Also, I need to get better at Jest.',
         understanding: "Extremely comfortable. It's easy. Would ace the assessment."
      },
      '5': {
         id: 5,
         improvement: 'Geez, I wish I knew Sequelize as well as Winston. Also, I need to get better at ES5.',
         understanding: "Extremely comfortable. It's easy. Would ace the assessment."
      }
   }
}
```

Here's an example of how you can use the JSON array in the
__src/data/initial-reports.json__ file by importing it from a file directly
within the __src/store/__ folder:

```js
import initialReports from '../data/initial-reports.json';
```

Provide the Redux store state to the entire React application. This **MUST** be
done in the __src/main.jsx__ file (**NOT** the __src/App.jsx__ file).

Run and pass the test specs to continue:

```sh
npm test 1-setup-redux
```

**HINT:** Make sure you set up your root reducer and add it to the Redux store.

## Phase 2: Display a list of reports

**IMPORTANT NOTE:** This phase requires Phase 1 test specs to be passing.

On the root page of the application, `/`, display a list of the current reports
in the Redux store.

Run the application (`npm run dev`) and make sure the root page of the
application (`/`) looks like this:

![index-page-screenshot]

Run and pass the test specs to continue:

```sh
npm test 2-display-report-list
```

**HINT:** Make sure to look through all the React components to see which
components are being rendered at the root page of the application (`/`).

## Phase 3: Remove a report

**IMPORTANT NOTE:** This phase requires Phase 1 and 2 test specs to be passing.

On the root page of the application, `/`, if a `Delete` button is clicked for a
report, the report should be removed from the Redux store and the list of
reports should no longer have the removed report.

Run the application (`npm run dev`) and make sure the root page of the
application (`/`) looks like this after the `Delete` button next to "Report #1"
is clicked:

![remove-report-screenshot]

Run and pass the test specs to continue:

```sh
npm test 3-remove-report
```

## Phase 4: Display a report's details

**IMPORTANT NOTE:** This phase requires Phase 1 and 2 test specs to be passing.

On the root page of the application, `/`, if the report name (e.g., "Report #1")
link is clicked, the user should be directed to the `/reports/:reportId` route.
At this route, the application should display the details of the report that
have a matching `id` to the `:reportId` route parameter.

Run the application (`npm run dev`) and make sure the report detail page of
"Report #1" at the route `/reports/1` looks like this:

![display-report-details-screenshot]

Run and pass the test specs to continue:

```sh
npm test 4-display-report-details
```

## Phase 5: Create a report

**IMPORTANT NOTE:** This phase requires Phase 1, 2, and 4 test specs to be
passing.

On the root page of the application, `/`, if the `New Report` link is clicked,
the user should be directed to the `/reports/new` route. At this route, the
application should display the form to create a new report. Once that form is
submitted, the new report should be added to the Redux store and the user should
be redirected to the `/reports/:reportId` route where the `:reportId` route
parameter will be replaced by a new 5 character `id` assigned to the newly
created report.

Run the application (`npm run dev`) and fill out the create report form at
`/reports/new`. Once the form is submitted, make sure the report details page
shows the input values of the form, similar to the page below:

![report-details-after-create-screenshot]

Run and pass the test specs to continue:

```sh
npm test 5-create-report
```

## Phase 6: Update a report

**IMPORTANT NOTE:** This phase requires Phase 1, 2, and 4 test specs to be
passing.

On the root page of the application, `/`, if an `Edit` link is clicked for a
report, the user should be directed to the `/reports/:reportId/edit` route where
`:reportId` should be replaced with the `id` of the report. At this route, the
application should display the form to update that report. Once that form is
submitted, the report should be updated in the Redux store and the user
should be redirected to the `/reports/:reportId` route where the `:reportId`
route parameter will be replaced by the `id` of the report that was updated.

Run the application (`npm run dev`) and fill out the create report form at
`/reports/1/edit`. Once the form is submitted, make sure the report details page
shows the input values of the form, similar to the page below:

![report-details-after-update-screenshot]

Run and pass the test specs to continue:

```sh
npm test 6-update-report
```

## Phase 7: Reset report data

On the root page of the application, `/`, if the `Reset Data` button is clicked
the Redux store should be reverted to its initial state in Phase 1.

**IMPORTANT NOTE:** This phase requires Phase 1, 2, and 3 test specs to be
passing.

Run the application (`npm run dev`) and remove "Report #1". The application
should look like this:

![remove-report-screenshot]

Now, press the `Reset Data` button. The application should revert back to having
the 5 initial reports:

![index-page-screenshot]

Run and pass the test specs to continue:

```sh
npm test 7-reset-reports
```

## Debugging tips

Here are some tips for making debugging in Vitest a little less intimidating.

1. Vitest often loads modules--and does other things--asynchronously. As a
   result, the output can multiply significantly when running tests from
   multiple files at once, as each test takes control of the console in
   seemingly random order and re-prints its updated status as each async
   function completes. You can either wait for the final results or, to minimize
   the output, run a single file of tests at a time (see next item).

2. To run the tests for a single test file, specify the file's name of the file
   after `npm test`. What's more, the filename argument will be treated as a
   regular expression, so you don't have to specify the full name. E.g., to run
   only the tests in **3-remove-report.test.jsx**, simply run

   ```sh
   npm test 3
   ```

   in the project's root directory.

   (You will have to specify a bit more for any number that also appears in the
   test files' full path.)

3. Vitest is currently configured to show the console output in your terminal.
   This enables you to see the output of any `console.log`s in your code. It
   also means that the information from Redux logger will print in your
   terminal. If you ever want to turn this off, just open **vite.config.js** and
   add `silent: true` under the `test` key.

4. Vitest is pretty good about restarting in-process tests if you make further
   changes to the relevant files. Nevertheless, if you think a failing test
   should have passed, always re-run it before you start despairing and trying
   to debug. Similarly, if your results seem repeatedly off or the watch feature
   doesn't seem to be triggering, try killing and restarting your Vitest
   process. As with most software, sometimes it just needs to reboot.

5. Examine the test files to see the expected behavior.

## Submission

Make sure you are passing all the test specs by running:

```sh
npm test
```

If you want to submit your project, do the following:

1. Delete the **node_modules** directory.
2. Zip your project.
3. Submit the zip folder through the link on Open.

[`localhost:5173`]: localhost:5173
[index-page-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/index-page-screenshot.png
[remove-report-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/remove-report-screenshot.png
[display-report-details-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/display-report-details-screenshot.png
[report-details-after-create-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/report-details-after-create-screenshot.png
[report-details-after-update-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/report-details-after-update-screenshot.png
