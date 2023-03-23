import Head from "next/head";
import Link from "next/link";
import Home from ".";
import animation from "./animation";
import design from "./design";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill, BsTiktok } from "react-icons/bs";

const Illustration = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

{/* Head Info */}
      <Head>
        <title>Sara Baldwin | Portofolio</title>
      </Head>

{/* Main Section */}
      <main className="bg-red-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

{/* Header Navigation */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Link href="/">
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
                  className="bg-gradient-to-r from-cyan-500 
                  text- to-teal-500 text-white px-4 py-2 
                  border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 
                  text- to-teal-500 text-white px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/animation"
                >
                  Animation
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 
                  text- to-teal-500 text-white px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/design"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 
                  text- to-teal-500 text-white px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/illustration"
                >
                  Illustation
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        
      </main>
    </div>
  );
};

export default Illustration;