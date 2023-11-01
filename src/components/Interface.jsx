import React, { useRef, useState } from "react";
import {motion} from 'framer-motion';
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import emailjs from "@emailjs/browser";


const Section = (props) =>{
  const {children} = props;
  return(<section className="h-screen w-screen p-10 md:p-20 max-w-screen-2xl flex flex-col items-start justify-start md:justify-center">
      {children}
    </section>
)}

export const Interface = (props) => {
  const {setSection} = props;
  return (
    <>
    <div className="flex flex-col items-center w-screen">
      <IntroSection setSection={setSection}/>
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SocialSection />
    </div>
    </>
  )
}

const IntroSection = (props) =>{
  const {setSection} = props;
  return(
 <Section>
  <motion.div
    initial={{
      opacity: 0,
      y:50,
    }}
    whileInView={{
      opacity: 1,
      y:0,
      transition:{
        duration: 1,
        delay: 0.6,
      }
    }}
  >
  <h1 className=" text-xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 w-full md:w-1/2">Let Me Show You Around!</h1>
  <p className="capitalize text-sm md:text-xl text-white mt-2 md:mt-8 font-mono w-full md:w-1/2">
    Hello, I'm Eloi, an aspiring software developer with a strong passion for web applications, game development and website design. While I'm relatively new to the industry, my dedication to learning and my drive for creativity are at the core of what I do.
  </p>
  <button  onClick={()=> setSection(5)}className="rounded-lg bg-blue-700 hover:bg-blue-500 text-base md:text-2xl mt-4 md:mt-8 text-white p-3 font-mono transition-colors">Contact Me</button>
  </motion.div>
 </Section>)
};

const Skills = [
  {
    title: "Three-Js (3D Web Applications)",
    level: 70
  },
  {
    title: "React-Js (Web Applications)",
    level: 70
  },
  {
    title: "HTML/CSS/JavaScript (Websites)",
    level: 90
  },
  {
    title: "3D/2D Animations",
    level: 70
  },
  {
    title: "GDSCripts (3D and 2D Game Development",
    level: 90
  },
]

const Languages = [
  {
    title: "Kinyarwanda",
    level: 100
  },
  {
    title: "English",
    level: 95
  },
  {
    title: "French",
    level: 30
  },
]
const SkillsSection = () =>{
  return(
 <Section>
  <motion.div whileInView={"visible"} className="">
    <h2 className="text-base md:text-3xl font-bold text-blue-700">Skills</h2>
    <div className="mt-2 md:mt-4 space-y-0.5 md:space-y-2">
      {Skills.map((skill, index) =>(
        <div className="w-3/4 md:w-full" key={index}>
          <motion.h3 className="text-sm md:text-xl font bold text-slate-400 font-mono"
          initial={{
            opacity: 0,
            x:-50,
          }}
          variants={{
            visible:{
              opacity: 1,
              x:0,
              transition:{
                duration: 1,
                delay: 0 + index * 0.1,
              }
            }
          }}
          >{skill.title}</motion.h3>
          <div className="h-2 w-full bg-white rounded-md mt-2">
            <motion.div className="h-full  bg-blue-500 rounded-md mt-2"
            
            initial={{
              scaleX: 0,
              originX: 0,
          }}
          variants={{
            visible:{
            scaleX: 1,
            x:0,
            transition:{
              duration: 1,
              delay: 0 + index * 0.1,
            }
            }
          }}
          style={{width:`${skill.level}%`}}
          />
            </div>
          </div>
      ))}
    </div>
    <h2 className="text-base md:text-3xl font-bold text-blue-700">Languages</h2>
    <div className="mt-4 space-y-2">
      {Languages.map((skill, index) =>(
        <div className="w-3/4 md:w-full" key={index}>
          <motion.h3 className="text-sm md:text-xl font bold text-slate-400 font-mono"
          initial={{
            opacity: 0,
            x:-50,
          }}
          variants={{
            visible:{
              opacity: 1,
              x:0,
              transition:{
                duration: 1,
                delay: 0.5 + index * 0.1,
              }
            }
          }}
          >{skill.title}</motion.h3>
          <div className="h-2 w-full bg-white rounded-md mt-2">
            <motion.div className="h-full  bg-blue-500 rounded-md mt-2"
            
            initial={{
              scaleX: 0,
              originX: 0,
          }}
          variants={{
            visible:{
            scaleX: 1,
            x:0,
            transition:{
              duration: 1,
              delay: 0.5 + index * 0.1,
            }
            }
          }}
          style={{width:`${skill.level}%`}}
          />
            </div>
          </div>
      ))}
    </div>
  </motion.div>
 </Section>)
};

const AboutSection = () =>{
  return(
    <Section>
    <motion.div
      initial={{
        opacity: 0,
        y:50,
      }}
      whileInView={{
        opacity: 1,
        y:0,
        transition:{
          duration: 1,
          delay: 0.6,
        }
      }}
    >
    <h1 className="text-xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Who Am I?</h1>
    <p className="capitalize text-sm md:text-xl text-white mt-2 md:mt-8 font-mono w-full md:w-1/2">
      My Name is Eloi IRADUKUNDA but some call me Elox, I'm 19 years old. My journey as a budding software developer is guided by my belief in the power of experience and continuous improvement. Challenges are opportunities for growth, and I'm dedicated to honing my skills.
      I'm currently working on personal projects to apply my knowledge and demonstrate my potential.
      Beyond technology, I'm passionate about Video Games and Spending Time with People especially my friends and mates.
      Feel free to connect with me at contact me form or on other Social Media Platforms.
    </p>
    </motion.div>
   </Section>)
};

const ProjectsSection = (props) => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);


  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <motion.div 
        initial={{
           opacity: 0,
            y:50,
        }}
        whileInView={{
           opacity: 1,
           y:0,
         transition:{
             duration: 1,
             delay: 0.6,
        }
      }}
      className="flex w-full h-full gap-2 relative top-64 md:top-36 items-center justify-center">
        <button
          className="bg-white p-2 rounded-md font-bold md:hover:text-blue-400 transition-colors text-blue-700"
          onClick={previousProject}
        >
          Previous
        </button>
        <h2 className="text-sm md:text-3xl font-bold text-white text-center">Projects I have Worked On</h2>
        <button
          className="bg-white px-5 py-2 rounded-md font-bold md:hover:text-blue-400 transition-colors text-blue-700"
          onClick={nextProject}
        >
          Next
        </button>
      </motion.div>
    </Section>
  );
};

const ContactSection = () =>{
  const formRef = useRef();
  const [form, setForm] = useState({
    names: "",
    email: "",
    phone:"",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.names || !form.email || !form.phone || !form.message) {
      alert("Please fill in all fields");
      return;
    }
  
    setLoading(true);
  
    emailjs
      .send(
        "elox_pro",
        "template_i7n355h",
        {
          from_name: form.names,
          to_name: "ELOX Pro",
          from_email: form.email,
          to_email: "iradeloi41@gmail.com",
          from_phone: form.phone,
          message: form.message,
        },
        "LA35jViYUIgiv9AR5"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
  
          setForm({
            names: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return(
 <Section>
  <motion.div className="mt-4 md:mt-8 p-2 md:p-4 rounded-md bg-white bg-opacity-50 w-96 md:w-1/3 max-w-full"
      initial={{
        opacity: 0,
        y:50,
      }}
      whileInView={{
        opacity: 1,
        y:0,
        transition:{
          duration: 1,
          delay: 0.6,
        }
      }}
    >
  <h2 className="text-2xl md:text-5xl font-bold text-blue-700 mt-2 mb-2 md:mt-5">Contact Me</h2>
  <div>
   <form ref={formRef} onSubmit ={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Names
          </label>
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="names"
            placeholder="Names"
            value={form.names}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your message here"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 md:hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
          {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  </motion.div>
 </Section>
 )
};
const SocialSection = () =>{
  return(
  <div className="absolute bottom-5 items-center justify-center">
  <button onClick={() => window.open("https://wa.me/250736575839?text=Hi%20I%20need%20a%20Service", "_blank")}>
            <img src={"/textures/whatsapp.png"}
             alt="whatsapp"
             className="w-16 h-16 mr-2 md:hover:w-32 md:hover:h-32 transition-all"
            />
          </button>
          <button onClick={() => window.open("https://ig.me/m/_e.l.o.x_", "_blank")}>
            <img src={"/textures/instagram.png"}
              alt="instagram"
              className="w-16 h-16 mr-2 hover:w-32 md:hover:h-32 transition-all"
            />
          </button>
          <button onClick={() => window.open("tel:+250-793-107356", "_blank")}>
            <img src={"/textures/phonecall.png"}
             alt="phonecall"
             className="w-16 h-16 mr-2 md:hover:w-32 md:hover:h-32 transition-all"
            />
          </button>
  </div>)
};