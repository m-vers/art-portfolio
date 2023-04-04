import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Tao = () => {
  const [darkMode, setDarkMode] = useState(false); //Set dark mode on/off from moon icon

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Head Info */}
      <Head>
        <title>Sara Baldwin | Design</title>
        <link rel="icon" href="/profile-pic.jpg" />
      </Head>

{/* Main Section */}
      <main className="bg-blue-100 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

{/* Header Navigation */}
          <nav className="py-10 mb-12 justify-between flex dark:text-blue-100">
            <Link href="/"
            onClick={() => window.scrollTo(0,0)}>
              <h1 className="font-roboto font-black text-xl text-blue-600 dark:text-blue-400 pl-4">Sara Baldwin</h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-blue-600 dark:text-blue-400"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8 font-sarabun"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <div className="flex small:flex-col">
                <li>
                  <Link
                    className=" text-gray-500 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100 font-sarabun"
                    href="../animation">
                    Animation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100 font-sarabun"
                    href="../design"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100 font-sarabun"
                    href="../illustration"
                  >
                    Illustration
                  </Link>
                </li>
              </div>
            </ul>
          </nav>

          {/* Portfolio Projects */}
          <section className="py-10 max-w-screen-lg m-auto">
            <div>
              <h3 className="text-5xl py-2 bg-gradient-to-r from-blue-600
                  to-purple-500 bg-clip-text text-transparent font-roboto font-black dark:text-blue-400 md:text-6xl max-w-xl pl-4">Tao</h3>
              <p className="py-2 leading-8 text-gray-900 dark:text-blue-100 font-sarabun md:text-xl pl-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 max-w-3xl m-auto small:p-5">
              <div >
                  <Image
                    className="rounded-lg object-cover cursor-pointer"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/IMG_0401.JPG"
                    alt=""
                  />
              </div>
              <div>
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  layout="responsive"
                  src="/IMG_0402.JPG"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={500}
                  layout="responsive"
                  src="/IMG_0404.JPG"
                  alt=""
                />
              </div>
            </div>
          </section> 
        </section>
      </main>
    </div>
  );
};
export default Tao;