import React from 'react'

const Form = ({ addCourse, courseNumber, setCourseNumber, courseName, setCourseName, units, setUnits, grade, setGrade }) => {
  
    const gradeMapping = {
    A: 4,
    'B+': 3.5,
    B: 3,
    'C+': 2.5,
    C: 2,
    D: 1,
    F: 0,
  };

  return (
    <div>
        <div className="label">
          <label>Course Number</label>
          <input type="text" placeholder="e.g. 4-125" value={courseNumber} onChange={(e) => setCourseNumber(e.target.value)} />
        </div>
        <div className="label">
          <label>Course Name</label>
          <input type="text" placeholder="e.g. IT Elective 2" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </div>
        <div className="label">
          <label>Units</label>
          <input type="number" placeholder="#" value={units} onChange={(e) => setUnits(e.target.value)} />
        </div>
        <div className="radio-group">
          <label className='label'> Grades </label>
          {Object.keys(gradeMapping).map((gradeValue) => (
            <label className="custom-radio-button" key={gradeValue}>
                <input
                type="radio"
                name="grade"
                value={gradeValue}
                checked={grade === gradeValue}
                onChange={() => setGrade(gradeValue)}
                />
                <span className="helping-el"></span>
                <span className="label-text">{gradeValue}</span>
            </label>
            ))}
        </div>
        <button onClick={addCourse}>Submit</button>
    </div>
  );
}

export default Form;