import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

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
        to_name: "Mitchell Baldwin",
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
    <section>
      <div className="p-10 max-w-2xl m-auto">
          <h3 className="text-blue-600 text-2xl font-bold md:text-3xl">Contact Me</h3>

          <form ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-8'>
            <label className="flex flex-col">
              <span className="text-gray-800 font-medium mb-4">Name</span>
              <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Name'
              className="py-4 px-6 text-gray-800 rounded-lg border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-gray-800 font-medium mb-4">Email</span>
              <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email'
              className="py-4 px-6 text-gray-800 rounded-lg border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-gray-800 font-medium mb-4">Subject</span>
              <input 
              type='text'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              placeholder='eg, Job Offer'
              className="py-4 px-6  text-gray-800 rounded-lg border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-gray-800 font-medium mb-4">General Message</span>
              <textarea
              rows='7' 
              name='message'
              value={form.message}
              onChange={handleChange}
              className="py-4 px-6  text-gray-800 rounded-lg  border-none font-medium"/>
            </label>

            <button
              type='submit'
              className='bg-indigo-400 py-3 px-8 rounded-xl outline-none w-fit text-gray-800 font-bold shadow-md'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
      </div>
    </section>
  );
};

export default Contact;