import "./CourseDetails.css";

export default function CourseDetails() {
  return (
    <div className="details-page">

      <section className="banner">
        <h1 className="floating">Full Stack Web Development</h1>
        <p>6 Months • Free Course • Mentor: Harshit</p>
      </section>

      <section className="overview">
        <h2>About This Course</h2>
        <p>
          This course covers HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
          You will learn full stack development from beginner to advanced.
        </p>
      </section>

      <section className="syllabus">
        <h2>Syllabus</h2>
        <ul>
          <li>Module 1: HTML, CSS</li>
          <li>Module 2: JavaScript ES6+</li>
          <li>Module 3: React</li>
          <li>Module 4: Node.js & Express</li>
          <li>Module 5: Database: MongoDB</li>
        </ul>
      </section>

      <button className="enroll-btn">Enroll Now</button>
    </div>
  );
}
