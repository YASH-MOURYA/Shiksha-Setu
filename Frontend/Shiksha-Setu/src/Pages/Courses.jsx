import React from "react";
import "./Courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "6 Months",
      price: "₹4999",
      level: "Beginner to Advanced",
      reviews: "4.8/5",
      isFree: false,
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      duration: "3 Months",
      price: "FREE",
      level: "Beginner",
      reviews: "4.9/5",
      isFree: true,
    },
    {
      id: 3,
      title: "Python for Everyone",
      duration: "2 Months",
      price: "₹1499",
      level: "Beginner",
      reviews: "4.7/5",
      isFree: false,
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-heading">Explore Our Courses</h1>
      <p className="courses-subtitle">Learn from the best mentors at Shiksha Setu</p>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2 className="course-title">{course.title}</h2>

            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <p><strong>Reviews:</strong> ⭐ {course.reviews}</p>

            <p className={`price ${course.isFree ? "free" : ""}`}>
              {course.isFree ? "FREE Course" : course.price}
            </p>

            <button
              className="btn-details"
              onClick={() => window.location.href = `/courses/details?id=${course.id}`}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
