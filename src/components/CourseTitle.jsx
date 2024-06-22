/* eslint-disable react/prop-types */
const CourseTitle = ({ courseName }) => {
  return (
    <h1 style={{ fontSize: "1.5rem" }}>
      <strong>
        <p>{courseName.name.toUpperCase()}</p>
      </strong>
    </h1>
  );
};

export default CourseTitle;
