import { JsonReporter } from 'vitest/reporters';

export default class CustomReporter extends JsonReporter {
  constructor(props) {
    super();
    this.starter = props.starter
  }

  async logTasks(files) {
    const tests = getTests(files)
    const numTotalTests = tests.length
    const numFailedTests = tests.filter(t => t.result?.state === 'fail').length
    const numPassedTests = numTotalTests - numFailedTests
    let testResults = []
    let duration = 0
    let totalPassPoints = 0;
    let totalPoints = 0;

    for (const file of files) {
      const tests = getTests([file])
      duration = tests.reduce((prev, next) => Math.max(prev, next.result?.duration ?? 0 + prev), duration)

      const assertionResults = await Promise.all(tests.map(async (t) => {
        const ancestorTitles = []
        let iter = t.suite
        while (iter) {
          ancestorTitles.push(iter.name)
          iter = iter.suite
        }
        ancestorTitles.reverse()

        let points = 1
        let passPoints = 0
        try {
          const match = t.name.match(/\((\d+)/)
          const matchedPoints = parseInt(match[1])
          if (!isNaN(matchedPoints)) {
            points = matchedPoints
          }
        } catch(err) {}
        if (t.result?.state !== 'fail') {
          passPoints = points
        }
        totalPoints += points
        totalPassPoints += passPoints

        return {
          fullName: ancestorTitles.length > 0 ? `${ancestorTitles.join(' ')} ${t.name}` : t.name,
          title: t.name
        }
      }))

      const status = tests.some(t =>
        t.result?.state === 'fail')
        ? 'failed'
        : 'passed'

      if (tests.some(t => t.result?.state === 'run')) {
        this.ctx.logger.warn('WARNING: Some tests are still running when generating the JSON report.'
        + 'This is likely an internal bug in Vitest.'
        + 'Please report it to https://github.com/vitest-dev/vitest/issues')
      }
      if (status === 'failed') {
        testResults = testResults.concat(assertionResults)
      }
    }

    const result = this.starter ?
      {
        testsPassed: numPassedTests,
        testsTotal: numTotalTests,
        pointsEarned: totalPassPoints,
        pointsPossible: totalPoints
      } :
      {
        stats: {
          suites: numTotalTests,
          tests: totalPoints,
          passes: totalPassPoints,
          failures: totalPoints - totalPassPoints,
          duration: Number((duration / 60).toFixed(2))
        },
        failures: testResults,
      };

    await this.writeReport(JSON.stringify(result, null, 2))
  }
}

function toArray(array) {
  if (array === null || array === undefined)
    array = []

  if (Array.isArray(array))
    return array

  return [array]
}

function isAtomTest(s) {
  return s.type === 'test' || s.type === 'custom'
}

function getTests(suite) {
  const tests = []
  const suite_arr = toArray(suite)
  for (const s of suite_arr) {
    if (isAtomTest(s)) {
      tests.push(s)
    }
    else {
      for (const task of s.tasks) {
        if (isAtomTest(task))
          tests.push(task)
        else
          tests.push(...getTests(task))
      }
    }
  }
  return tests
}
