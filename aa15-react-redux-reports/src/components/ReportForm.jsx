import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportForm = ({ report, formType }) => {
  const navigate = useNavigate();
  const [understanding, setUnderstanding] = useState(report.understanding);
  const [improvement, setImprovement] = useState(report.improvement);

  const handleSubmit = (e) => {
    e.preventDefault();
    report = { ...report, understanding, improvement };

    navigate(`/reports/${report.id}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>{formType}</h2>
      <label>
        Understanding
        <input
          type="text"
          value={understanding}
          onChange={e => setUnderstanding(e.target.value)}
        />
      </label>
      <label>
        Improvement
        <textarea
          value={improvement}
          onChange={e => setImprovement(e.target.value)}
        />
      </label>
      <input type="submit" value={formType} />
    </form>
  );
}

export default ReportForm;
