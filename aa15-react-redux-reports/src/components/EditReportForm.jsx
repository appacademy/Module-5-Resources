import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';

const EditReportForm = () => {
  const { reportId } = useParams();
  const report = {}; // populate from Redux store

  return (
    <ReportForm report={report} formType="Update Report" />
  );
}

export default EditReportForm;
