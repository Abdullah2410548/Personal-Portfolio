import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithubSquare, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 to-teal-500 text-white">
      {/* Main Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow px-8 md:px-24">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-4xl md:text-5xl font-bold">Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl font-extrabold">Abdullah Muhammad Arif</h1>
          <p className="text-lg md:text-xl">
            A passionate Front-End Developer with a flair for designing visually stunning and highly functional web experiences that captivate users.
          </p>

          {/* Social Media Links */}
          <ul className="flex justify-center md:justify-start gap-6 mt-6">
            <li>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-blue-500 transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-[#1625c9] transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <FaGithubSquare className="text-3xl hover:text-[#0f0f14] transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="mailto:example@example.com" aria-label="Email">
                <IoMdMail className="text-3xl hover:text-[#0d8dbf] transition-colors" />
              </Link>
            </li>
          </ul>

          {/* Call to Action Button */}
          <Link href="/contact">
            <button className="bg-gradient-to-r from-indigo-900 via-fuchsia-600 to-amber-500 text-white px-8 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 mt-6">
              Hire Me
            </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <Image
              src="/mepic2.png"
              alt="Abdullah Muhammad Arif"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
