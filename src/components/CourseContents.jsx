/* eslint-disable react/prop-types */

const CourseContents = ({ contents }) => {
  return (
    <ul className="my-2">
      <li style={{ fontSize: "1.1rem" }}>
        <strong>{contents.name}</strong> {contents.exercises}
      </li>
    </ul>
  );
};

export default CourseContents;
