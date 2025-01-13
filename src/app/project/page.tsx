import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "An e-commerce website is an online platform that enables businesses to sell products or services to customers via the internet. ",
      image: "/e-commerce.png",
      link: "https://e-commerce-bqo4.vercel.app/",
    },
    {
      title: "Figma-Template",
      description:
        "A Figma project for Chair Design involves creating a digital representation of a chair for showcasing, marketing, or prototyping.",
      image: "/figma.png",
      link: "https://quarter-2-figma-hackathon.vercel.app/",
    },
    {
      title: "Shoes Shopping",
      description:
        "A Shoes Shop Website is an online platform designed to showcase and sell footwear, providing shopping experience for customers.",
      image: "/shoes.png",
      link: "https://multiple-page-web.vercel.app",
    },
    {
      title: "Blog Website",
      description:
        "A Blog Website is a platform for sharing articles, stories, or updates, designed for user engagement.",
      image: "/blog.png",
      link: "https://blog-web-q2.vercel.app/",
    },
    {
      title: "Resume-Builder",
      description:
        "A Resume Builder is an online tool that helps users create professional resumes effortlessly",
      image: "/dynamic.png",
      link: "https://milestone1-three-kohl.vercel.app/",
    },
    {
      title: "Portfolio-Website",
      description:
        "A Portfolio Website is a personal platform to showcase your skills, work, and achievements",
      image: "/portfolio.png",
      link: "https://website-blue-one-54.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 text-white">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold">My Projects</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-center">
          A collection of my most exciting and impactful projects that demonstrate my skills and creativity.
        </p>
      </header>

      {/* Projects Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-24 py-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-teal-500 rounded-md shadow-md hover:scale-105 transition-transform"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>

   
    </div>
  );
};

export default Projects;

