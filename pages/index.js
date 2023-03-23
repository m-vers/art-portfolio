import Head from "next/head";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillBehanceSquare
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsTiktok } from "react-icons/bs";
import { FaTumblrSquare } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { close, menu } from "../public"

export default function Home() {
  const [active, setActive] = useState(' '); //Sets which nav is active
  const [toggle, setToggle] = useState(false); //Sets the menu to toggle on smaller screens
  const [darkMode, setDarkMode] = useState(false); //Set dark mode on/off from moon icon

  // Form information generated on email
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); //for load times

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_dcj2p2d',
      'template_jgs72rm',
      {
        from_name: form.name,
        to_name: "Sara Baldwin",
        from_email: form.email,
        from_subject: form.subject,
        to_email: "mj.baldwin132@gmail.com",
        message: form.message,
      },
      'XdLBPNADovEYwdgf9')

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

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
                  href="./animation"
                >
                  Animation
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./design"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-blue-600
                  to-purple-500 text-blue-100 px-4 py-2 
                  border-none rounded-md ml-8"
                  href="./illustration"
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

{/* Site Contact Form */}
        <section>
          <div className="p-10 max-w-2xl m-auto">
            <h3 className="text-blue-600 text-2xl font-bold md:text-3xl dark:text-blue-400">Contact Me</h3>
            <form ref={formRef}
              onSubmit={handleSubmit}
              className='mt-6 flex flex-col gap-8'>
              <label className="flex flex-col">
                <span className="text-gray-900 font-medium mb-4 dark:text-blue-100">Name</span>
                <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Enter Name'
                  className="py-4 px-6 text-gray-900 rounded-lg border-none font-medium"/>
              </label>
              <label className="flex flex-col">
                <span className="text-gray-900 font-medium mb-4 dark:text-blue-100">Email</span>
                <input 
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Enter Email'
                  className="py-4 px-6 text-gray-900 rounded-lg border-none font-medium"/>
              </label>
              <label className="flex flex-col">
                <span className="text-gray-900 font-medium mb-4 dark:text-blue-100">Subject</span>
                <input 
                  type='text'
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  placeholder='eg, Job Offer'
                  className="py-4 px-6  text-gray-900 rounded-lg border-none font-medium"/>
              </label>
              <label className="flex flex-col">
                <span className="text-gray-900 font-medium mb-4 dark:text-blue-100">General Message</span>
                <textarea
                  rows='7' 
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  className="py-4 px-6  text-gray-900 rounded-lg  border-none font-medium"/>
              </label>
              <button
                type='submit'
                className='bg-gradient-to-r from-blue-600
                to-purple-500 py-3 px-8 rounded-xl outline-none w-fit text-blue-100 font-bold shadow-md'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}