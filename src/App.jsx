import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const projects = [
    {
      title: "Movie Ticket Booking System",
      description:
        "Full-stack booking platform with authentication, movie schedules, seat selection, and admin dashboard.",
      tech: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/rishirnjt",
    },
    {
      title: "ChaarPangre – Vehicle Marketplace",
      description:
        "Vehicle e-commerce platform with user authentication, vehicle listings, wishlist functionality, and role-based access control built using Java Servlets and MySQL.",
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      github: "https://github.com/rishirnjt/movie-ticket-system",

    },
    {
      title: "Journal Application",
      description:
        "Desktop journal management application with SQLite database and CRUD operations.",
      tech: ["C#", ".NET", "SQLite"],
      github: "https://github.com/rishirnjt",

    },
    {
      title: "Auto-Part Management System",
      description:
        "Vehicle parts inventory and order management system with authentication, CRUD operations, stock tracking, and PostgreSQL database integration.",
      tech: ["C#", ".NET", "PostgreSQL"],
      github: "https://github.com/rishirnjt",
    }
  ];

  const skills = {
    Frontend: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "ASP.NET Core", "Java", "Python"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    Tools: ["Git", "GitHub", "Docker", "Postman", "Trello"],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="border-b border-green-500/20 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Rishi<span className="text-green-500">Ranjit</span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-green-500">
              About
            </a>
            <a href="#experience" className="hover:text-green-500">
              Experience
            </a>
            <a href="#skills" className="hover:text-green-500">
              Skills
            </a>
            <a href="#projects" className="hover:text-green-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-green-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        className="min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm
              <span className="block text-green-500">
                Rishi Ranjit
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
              I build responsive web applications using React,
              Node.js, MongoDB, ASP.NET Core, and PostgreSQL.
              Passionate about creating modern digital experiences
              and solving real-world problems through technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex justify-center"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

              {/* Profile Circle */}
              <div className="relative w-80 h-80 rounded-full border-4 border-green-500 bg-[#111] flex items-center justify-center overflow-hidden">

                {/* Use your image here */}
                {/* <img
            src="/profile.jpg"
            alt="Rishi"
            className="w-full h-full object-cover"
          /> */}

                <span className="text-8xl font-bold text-green-500">
                  RR
                </span>

              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>
    


      {/* ABOUT */}
      <motion.section id="about" className="max-w-7xl mx-auto px-6 py-24" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} >
        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="bg-[#111111] p-8 rounded-2xl border border-green-500/10">
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm Rishi Ranjit, a Bachelor in Information Technology student
            from Pokhara, Nepal. I enjoy creating web applications,
            learning new technologies, and solving problems through code.
            My interests include full-stack development, .NET development,
            database systems, and UI design.
          </p>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="border-l-2 border-green-500 pl-8">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">
              Frontend Development Intern
            </h3>

            <p className="text-green-500 mt-2">
              Websoft Technology Nepal
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Worked on The Great Ticket project, developing
              responsive dashboard interfaces using HTML, CSS,
              Bootstrap, Tailwind CSS, and Laravel Blade.
              Collaborated with developers using Git and GitHub.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills" className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#111] rounded-2xl p-6 border border-green-500/10 hover:border-green-500 transition"
            >
              <h3 className="text-green-500 text-xl font-semibold mb-6">
                {category}
              </h3>

              <div className="space-y-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>

                    <span className="text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-[#111] border border-green-500/10 rounded-2xl p-6 h-full hover:border-green-500 transition-all duration-300 hover:-translate-y-2">

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold group-hover:text-green-500 transition">
                    {project.title}
                  </h3>

                  <span className="text-green-500 text-xl">
                    ↗
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </a>
          ))}
        </div>
      </motion.section>
      {/* CONTACT */}
      <motion.section id="contact" className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            I'm currently open to internships, freelance opportunities,
            collaborations, and full-time software development roles.
            Feel free to reach out if you'd like to work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="bg-[#111] rounded-3xl p-8 border border-green-500/10">

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-gray-500 uppercase">
                  Email
                </p>

                <a
                  href="mailto:rishiranjit007@gmail.com"
                  className="text-lg hover:text-green-500 transition"
                >
                  rishiranjit007@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase">
                  Phone
                </p>

                <a
                  href="tel:+9779869287610"
                  className="text-lg hover:text-green-500 transition"
                >
                  +977 9869287610
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase">
                  Location
                </p>

                <p className="text-lg">
                  Pokhara, Nepal
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#111] rounded-3xl p-8 border border-green-500/10">

            <h3 className="text-2xl font-semibold mb-8">
              Professional Profiles
            </h3>

            <div className="space-y-5">

              <a
                href="https://github.com/rishirnjt"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center p-4 rounded-xl bg-black hover:border-green-500 border border-transparent transition"
              >
                <div>
                  <p className="font-medium">
                    GitHub
                  </p>

                  <p className="text-sm text-gray-500">
                    View my repositories and projects
                  </p>
                </div>

                <span className="text-green-500">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rishi-ranjit-571740359/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center p-4 rounded-xl bg-black hover:border-green-500 border border-transparent transition"
              >
                <div>
                  <p className="font-medium">
                    LinkedIn
                  </p>

                  <p className="text-sm text-gray-500">
                    Connect with me professionally
                  </p>
                </div>

                <span className="text-green-500">↗</span>
              </a>

            </div>

            <div className="mt-8 p-5 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 font-medium">
                Available for Opportunities
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Internship • Junior Developer Roles • Freelance Projects
              </p>
            </div>

          </div>

        </div>

      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/10 py-8 text-center text-gray-500">
        © 2026 Rishi Ranjit • Full Stack Developer
      </footer>
    </div>
  );
}

