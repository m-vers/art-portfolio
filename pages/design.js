import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Design = () => {
  const [darkMode, setDarkMode] = useState(false); //Set dark mode on/off from moon icon

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Head Info */}
      <Head>
        <title>Sara Baldwin | Design</title>
        <link rel="icon" href="/profile-pic.jpg" />
      </Head>

{/* Main Section */}
      <main className="bg-blue-100 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

{/* Header Navigation */}
          <nav className="py-10 mb-12 justify-between flex dark:text-blue-100">
            <Link href="/"
            onClick={() => window.scrollTo(0,0)}>
              <h1 className="font-roboto font-black text-xl text-blue-600 dark:text-blue-400">Sara Baldwin</h1>
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
                    href="./animation">
                    Animation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100 font-sarabun"
                    href="./design"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 px-2 py-2 ml-6 hover:text-black text-[18px] cursor-pointer dark:text-blue-100 font-sarabun"
                    href="./illustration"
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
                  to-purple-500 bg-clip-text text-transparent font-roboto font-black dark:text-blue-400 md:text-6xl max-w-xs">Design</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/BaldwinGym">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/BaldwinGym.jpg"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>Balwin Gym</div>
                  </div>
                </Link>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/HowIWork">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/AnkeChessboardFinalEdit.jpg"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>How I Work</div>
                  </div>
                </Link>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/Logos">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/GlobalCommsSummit1.JPG"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>Logo Designs</div>
                  </div>
                </Link>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/Spacecraft">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/CosmicArtClub1.jpg"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>Spacecraft</div>
                  </div>
                </Link>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/TechTerm">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/4.jpg"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>Tech Terms</div>
                  </div>
                </Link>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <Link href="./components/WabiTiny">
                  <Image
                    className="rounded-lg object-cover"
                    width={500}
                    height={500}
                    layout="responsive"
                    src="/WabiTinyLogo.jpg"
                    alt=""
                  />
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-blue-900 w-full h-1/3 text-white bg-opacity-60 flex items-center justify-center font-sarabun text-3xl hover:h-full transition-[height]">
                    <div>Wabi Tiny Logo</div>
                  </div>
                </Link>                
              </div>
            </div>
          </section> 
        </section>
      </main>
    </div>
  );
};

export default Design;