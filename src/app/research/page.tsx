import React from "react";

const ResearchPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div style={{ marginTop: "2rem" }}>
        <iframe
          src="/research/research.pdf"
          width="80%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ResearchPage;
