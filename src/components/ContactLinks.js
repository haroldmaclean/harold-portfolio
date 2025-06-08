import React from "react";

const ContactLinks = () => {
  return (
    <div className="text-center mt-5 space-y-2">
      <p>📧 <a href="mailto:haroldmzumara@example.com" className="text-blue-600 underline">haroldmzumara@example.com</a></p>
      <p>💼 <a href="https://www.linkedin.com/in/haroldmzumara" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a></p>
      <p>🌐 <a href="https://github.com/haroldmzumara" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a></p>
      <p>📁 <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Resume</a></p>
    </div>
  );
};

export default ContactLinks;
