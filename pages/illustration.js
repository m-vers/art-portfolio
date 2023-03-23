import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Illustration = () => {
  const [darkMode, setDarkMode] = useState(false); //Set dark mode on/off from moon icon

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Head Info */}
      <Head>
        <title>Sara Baldwin | Illustration</title>
        <link rel="icon" href="/profile-pic.jpg" />
      </Head>

{/* Main Section */}
      <main className="bg-blue-100 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

{/* Header Navigation */}
          <nav className="py-10 mb-12 justify-between flex dark:text-blue-100">
            <Link href="/"
            onClick={() => window.scrollTo(0,0)}>
              <h1 className="font-burtons text-xl">Sara Baldwin</h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <div className="flex small:flex-col">
                <li>
                  <Link
                    className=" text-gray-700 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100"
                    href="./animation">
                    Animation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100"
                    href="./design"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100"
                    href="./illustration"
                  >
                    Illustration
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default Illustration;