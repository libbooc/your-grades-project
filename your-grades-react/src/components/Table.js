import React from 'react';

const CourseList = ({ courses, searchTerm, handleSearchChange }) => {

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.courseNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <table id='courselist'>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Units</th>
            <th>Grades</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.units}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;