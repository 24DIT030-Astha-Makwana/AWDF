function Home() {
  return (
    <div className="home-page">
      <div className="home-intro">
        <h1 className="home-heading">Welcome to my portfolio</h1>
        <p className="home-description">
          I build thoughtful web experiences with clean design and practical functionality.
        </p>
      </div>

      <div className="skill-grid">
        <div className="skill-card">
          <h3>HTML</h3>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <h3>React</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;