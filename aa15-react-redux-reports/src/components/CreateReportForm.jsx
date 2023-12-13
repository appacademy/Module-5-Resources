import { nanoid } from 'nanoid';
import ReportForm from './ReportForm';

const CreateReportForm = () => {
  const report = {
    id: nanoid(5),
    understanding: '',
    improvement: ''
  };

  return (
    <ReportForm report={report} formType="Create Report" />
  );
}

export default CreateReportForm;
