import React from "react";
import Image from "next/image";

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
          href="https://drive.google.com/file/d/1Eir7qeWlPUEHUkb9JfbBRI_zl5OvLYS6/view?usp=drive_link"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </p>
      <p>
        <Image
          src="/qr/portfolio-qr.png"
          alt="Scan QR to view portfolio"
          width={120}
          height={120}
          className="mx-auto"
        />
        <span className="text-sm text-gray-600 mt-1 block">
          Scan to view my portfolio
        </span>
      </p>
    </div>
  );
};

export default ContactLinks;
