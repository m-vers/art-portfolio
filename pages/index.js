import Head from "next/head";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillBehanceSquare
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsTiktok } from "react-icons/bs";
import { FaTumblrSquare } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Contact from "./components/contact";
import design from "./components/design";
import animation from "./components/animation";
import illustration from "./components/illustration";
// import { close, menu } from "../public"

export default function Home() {
  const [active, setActive] = useState(' '); //Sets which nav is active
  const [toggle, setToggle] = useState(false); //Sets the menu to toggle on smaller screens
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

{/* Head Info */}
      <Head>
        <title>Sara Baldwin | Portofolio</title>
        <link rel="icon" href="/profile-pic.jpg" />
      </Head>

{/* Main Section */}
      <main className="bg-blue-100 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

{/* Header Navigation */}
          <nav className="py-10 mb-12 flex justify-between dark:text-blue-100">
            <Link href="/"
            onClick={() => {
            setActive("");
            window.scrollTo(0,0);}}>
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
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-600
                   to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/animation"
                >
                  Animation
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/design"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./components/illustration"
                >
                  Illustation
                </Link>
              </li>
            </ul>
          </nav>

{/* Site Banner */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-600 font-bold dark:text-blue-400 md:text-6xl">
              Sara Baldwin
            </h2>
            <h3 className="text-2xl py-2 text-gray-900 dark:text-blue-100 md:text-3xl">
              Illustrator & Designer
            </h3>
            <p className="text-left py-5 leading-8 text-gray-900 dark:text-blue-100 max-w-xl mx-auto md:text-xl">
            Hello! My name is Sara Baldwin and I am a graphic designer and illustrator living in the PNW. I graduated from Missouri State University and I am fluent in an array of digital media, traditional art, visual communication, design, and illustration.
            I'm always ready to expand my artistic scope and learn something new!
            <br /><br />
            When I'm not creating, I love being outside! Most of my inspiration is fueled by outdoor adventures with my friends and my dog.
            </p>
            <div className="text-5xl flex flex-wrap justify-center gap-16 py-3 text-blue-600 dark:text-blue-400">
              <Link href="https://www.linkedin.com/in/lemonwatercolor/" target="_blank">
                <AiFillLinkedin />
              </Link>
              <Link href="https://www.behance.net/SaraElizabethBaldwin" target="_blank">
                <AiFillBehanceSquare />
              </Link>
              <Link href="https://www.instagram.com/lemonprisma/" target="_blank">
                <AiFillInstagram />
              </Link>
              <Link href="https://www.tiktok.com/@lemonprisma" target="_blank">
                <BsTiktok />
              </Link>
              <Link href="https://www.tumblr.com/lemonprisma" target="_blank">
                <FaTumblrSquare />
              </Link>
            </div>
            <div className="mx-auto bg-gradient-to-b
             from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src="/profile-pic.jpg" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}