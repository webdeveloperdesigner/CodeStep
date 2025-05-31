import React, { useEffect, useState } from "react";
//import { profile_nft_backend } from "../../declarations/profile_nft_backend";
import "./Courses.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesFromBackend = await profile_nft_backend.getCourses();
      setCourses(coursesFromBackend);
    };

    fetchCourses();
  }, []);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <div className="courses-container">
      <h1>Available Learning Modules</h1>
      <div className="courses-list">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                className={`enroll-btn ${
                  enrolledCourses.includes(course.id) ? "enrolled" : ""
                }`}
                onClick={() => handleEnroll(course.id)}
                disabled={enrolledCourses.includes(course.id)}
              >
                {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
              </button>
            </div>
          ))
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
