import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-teal-500 to-purple-600 text-white">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold">About Me</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-center">
          Learn more about my journey, skills, and what drives my passion for web development.
        </p>
      </header>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-grow px-8 md:px-24 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">Who Am I?</h2>
          <p className="text-lg md:text-xl">
            I am Abdullah Muhammad Arif, a dedicated Front-End Developer with a knack for creating intuitive and visually engaging user experiences. I specialize in building responsive websites and applications using modern web technologies.
          </p>
          <p className="text-lg md:text-xl">
            With a strong foundation in JavaScript, React, and CSS frameworks, I thrive on solving complex problems and bringing creative ideas to life. When I’m not coding, I enjoy exploring new technologies and sharing my knowledge with the developer community.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <Image
              src="/aboutmepic.jpeg"
              alt="About Abdullah Muhammad Arif"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 md:px-24 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "HTML & CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Typescript",
           
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-800 rounded-lg py-4 shadow-md hover:scale-105 transition-transform"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

  
    </div>
  );
};

export default About;