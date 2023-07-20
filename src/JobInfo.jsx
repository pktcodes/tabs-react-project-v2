import Duties from './Duties';

const JobInfo = ({ jobs }) => {
  const { id, title, company, dates, duties } = jobs[0];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
