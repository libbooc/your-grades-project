import React, { useState } from 'react';
import './App.css';
import CourseList from './components/Table';
import Search from './components/Search';
import Total from './components/Total';
import CourseForm from './components/Form'; 

function App() {
  const [courses, setCourses] = useState([
    {
      courseName: 'Operating Systems',
      courseNumber: '4-324',
      units: 3,
      grade: 'A',
    },
    {
      courseName: 'Digital Design',
      courseNumber: '4-323',
      units: 4,
      grade: 'B+',
    },
  ]);

  const [courseNumber, setCourseNumber] = useState('');
  const [courseName, setCourseName] = useState('');
  const [units, setUnits] = useState('');
  const [grade, setGrade] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const gradeMapping = {
    A: 4,
    'B+': 3.5,
    B: 3,
    'C+': 2.5,
    C: 2,
    D: 1,
    F: 0,
  };

  const addCourse = () => {
    if (courseName && courseNumber && units && grade) {
      const course = {
        courseName,
        courseNumber,
        units: parseFloat(units),
        grade,
      };
      setCourses([...courses, course]);
      setCourseName('');
      setCourseNumber('');
      setUnits('');
      setGrade('');
    }
  };

  const calculateQPI = () => {
    const totalUnits = courses.reduce((total, course) => total + course.units, 0);
    const totalGradePoints = courses.reduce((total, course) => total + gradeMapping[course.grade] * course.units, 0);
    return totalGradePoints / totalUnits;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className='left-column'>
          <h2 id='left-title'>Add Course</h2>
          <CourseForm
            addCourse={addCourse}
            courseName={courseName}
            setCourseName={setCourseName}
            courseNumber={courseNumber}
            setCourseNumber={setCourseNumber}
            units={units}
            setUnits={setUnits}
            grade={grade}
            setGrade={setGrade}
          />
        </div>
        <div className="course-container">
          <div className='right-column'>
            <h2 id='title'>Course & Grade List</h2>
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <CourseList courses={courses} searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
            <Total calculateQPI={calculateQPI} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

