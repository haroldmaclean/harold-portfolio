import React from "react";

const ContactLinks = () => {
  return (
    <div className="text-center mt-5 space-y-2">
      <p>
        📧{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=haroldmacleanb@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          haroldmacleanb@gmail.com
        </a>
      </p>
      <p>
        💼{" "}
        <a
          href="https://www.linkedin.com/in/haroldmj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          LinkedIn
        </a>
      </p>
      <p>
        🌐{" "}
        <a
          href="https://github.com/haroldmaclean"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
      </p>
      <p>
        📁{" "}
        <a
          href="https://drive.google.com/uc?export=download&id=1r8TEozmYVdFN3SYDhZPOEBhnjDCvgljk"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default ContactLinks;
