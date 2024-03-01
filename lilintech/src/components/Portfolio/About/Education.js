const Education = () => {
  return (
    <div className="education-card">
      <h1 className="education-heading">Education</h1>
      <div className="education-info">
        <div className="school-info">
          <h2>DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY</h2>
          <p>Nyeri, Kenya</p>
          <br />
          <p style={{ "font-weight": "900" }}>
            Bachelor of Science in Information Technology
          </p>
          <p>2022 - Present</p>
          {/* <p>CGPA: </p> */}
        </div>
        <div className="school-info">
          <h2>Moi Girls High School - Eldoret</h2>
          <p>Eldoret, Kenya</p>
          <br />
          <p>2018 - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
