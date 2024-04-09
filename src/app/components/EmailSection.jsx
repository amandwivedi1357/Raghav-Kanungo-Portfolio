 "use client"

import React,{useRef, useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer,toast } from "react-toastify";
import emailjs from "@emailjs/browser"
// import './reacttoastify.css'
// import 'react-toastify/dist/ReactToastify.css';


const EmailSection = () => {
const [email,setEmail] = useState('')
const [name,setName] = useState('')
const [message,setMessage] = useState('')
  const form = useRef()
  const sendmail = (e)=>{

e.preventDefault()
setEmail('')
setMessage('')
setName('')
emailjs.send('service_96cdgo9','template_0f44448',{user_name:name,user_email:email,message:message},'Wm7ULk5_oN1j36Jz3') .then(()=>{
  toast.success('message sent')
},()=>{
  toast.error('something is wrong')
})
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Raghavk4u">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/raghav-kanungo-2b420a1a4/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form ref={form} onSubmit={sendmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
            name="email"
              type="email"
              id="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="subject"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
            value={message}
              onChange={(e)=>setMessage(e.target.value)}
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          
        </form>
        <ToastContainer
        position="top-center" 
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
        />
      </div>
    </section>
  );
};

export default EmailSection;


// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';
// const EmailSection = () => {
//     const [email,setemail]=useState("")
//     const [name,setname]=useState("")
//     const [message,setmessage]=useState("")
//   const form = useRef();
// const sendEmail = (e) => {
//   e.preventDefault();
//   setemail("")
//   setmessage("")
//   setname("")
//   alert("hello")
// console.log(form.value)
// emailjs.send('service_96cdgo9','template_0f44448',{user_name:name,user_email:email,message:message},'Wm7ULk5_oN1j36Jz3')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//         alert('error')
//     });
// };
//   return (
//     <div name="contact" className=" w-full h-auto text-black bg-white md:h-full ">
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8 pt-40">
//           <p className=" text-4xl font-bold">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me </p>
//         </div>
//         <div className="flex justify-center items-center">
//           <form ref={form} onSubmit={sendEmail}className="flex flex-col w-full md:w-1/2">
//             <input value={name}  onChange={(e)=>{setname(e.target.value)}} 
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
//             />
//             <input value={email}  onChange={(e)=>{setemail(e.target.value)}} 
//               type="text"
//               name="email"
//               placeholder="Enter email"
//               className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
//             />
//             <textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}}
//               name="message"
//               rows="10"
//               placeholder="Enter your message"
//               className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
//             ></textarea>
//             <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Submit
//             </button>
//           </form>
//         </div>
        
//       </div>
      
//     </div>



//   );
// };

// export default EmailSection;