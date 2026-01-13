const IdeaHousePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h1>Idea House Idea Hub</h1>
      </header>
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 className="text-3xl font-bold text-indigo-900 mb-4 ">
          Welcome to the Idea House | <strong>Idea Hub</strong>
        </h2>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          This platform encourages students and faculty to bring their ideas to
          life. Here, you can discuss projects, find solutions, and collaborate
          with industry experts. Join us in contributing to technical and social
          progress.
        </p>
      </section>
      <section
        style={{
          backgroundColor: "#f0f0f0",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3>Key Features</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Innovation Lab</h4>
            <p>A dedicated space to work on new ideas.</p>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Collaboration Desk</h4>
            <p>An interactive platform for student-faculty collaboration.</p>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Industry Connect</h4>
            <p>Opportunities to learn from industry experts.</p>
          </div>
        </div>
      </section>
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3>How It Works</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div>
            <h4>Step 1</h4>
            <p>Share your ideas.</p>
          </div>
          <div>
            <h4>Step 2</h4>
            <p>Discuss with experts and teams.</p>
          </div>
          <div>
            <h4>Step 3</h4>
            <p>Access resources and work on projects.</p>
          </div>
          <div>
            <h4>Step 4</h4>
            <p>Present your solutions and gain recognition.</p>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#6c63ff",
          color: "#fff",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3>Join Us Today!</h3>
        <p>Be a part of this amazing journey of innovation and ideas.</p>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default IdeaHousePage;
