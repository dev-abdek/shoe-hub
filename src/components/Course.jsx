/* eslint-disable react/prop-types */
import CourseTitle from "./CourseTitle";
import CourseContents from "./CourseContents";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/course").then((response) => {
      setCourses(response.data);
    });
  }, []);

  const courseContent = courses.map((course) => {
    const title = <CourseTitle courseName={course} />;
    const content = course.parts.map((course) => (
      <CourseContents key={course.id} contents={course} />
    ));

    const total = course.parts
      .map((course) => course.exercises)
      .reduce((a, b) => Number(a) + Number(b));

    return (
      <section key={course.id} className="mt-5 text-indigo-900">
        {title}
        {content}
        <strong>
          <i>Total of {total} exercises</i>
        </strong>
      </section>
    );
  });

  return <section>{courseContent}</section>;
};

export default Course;
