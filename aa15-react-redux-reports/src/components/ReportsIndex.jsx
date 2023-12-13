import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';

const ReportsIndex = () => {
  const reports = []; // populate from Redux store
  const resetData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ul>
        {
          reports.map(report => (
            <ReportIndexItem
              report={report}
              key={report.id}
            />
          ))
        }
      </ul>
      <Link to="/reports/new">New Report</Link>
      <button onClick={resetData}>Reset Data</button>
    </section>
  );
}

export default ReportsIndex;
