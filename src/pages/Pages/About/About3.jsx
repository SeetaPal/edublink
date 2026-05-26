function About3() {
  const team = [
    { name: "John", role: "CEO" },
    { name: "Sarah", role: "Instructor" },
    { name: "Rahul", role: "Developer" },
  ];

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h1>About Us 3</h1>

      <h3>Our Team</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {team.map((member, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About3;