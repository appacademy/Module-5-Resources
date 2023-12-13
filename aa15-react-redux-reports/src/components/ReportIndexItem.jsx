import { Link } from 'react-router-dom';

const ReportIndexItem = ({ report }) => {
  const deleteReport = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={deleteReport}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;
