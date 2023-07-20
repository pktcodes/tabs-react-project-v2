import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty, index) => {
        const id = uuidv4();
        // console.log(id);

        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
};

export default Duties;
