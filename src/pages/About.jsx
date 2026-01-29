import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* ABOUT SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src="/pic3.jpeg"
            alt="Profile"
            className="w-40 h-40 rounded-2xl object-cover border-4 border-purple-500"
          />

          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Umar Daraz
            </h1>
            <p className="text-purple-600 font-semibold mt-1">
              Software Engineer
            </p>
            <p className="text-gray-600 mt-4">
              I am a passionate software engineer with experience in building
              modern web applications. I enjoy solving real-world problems,
              writing clean code, and learning new technologies.
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Postgresql"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                <strong>Email:</strong> umar26660@gmail.com
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Phone:</strong> +923184929544
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Location:</strong> Remote / Worldwide
              </p>
            </div>

            <div>
              <p className="text-gray-600 bg-purple-300 rounded-2xl p-2">
                Feel free to reach out for collaboration, freelance projects,
                or just to say hello 👋
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
