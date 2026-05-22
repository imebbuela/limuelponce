export default function VirtualAssistantPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Aspiring Virtual Assistant
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            LIMUEL <span className="text-cyan-400">PONCE</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Helping businesses stay organized, efficient, and connected through
            reliable administrative support, customer communication, scheduling,
            and remote assistance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-300 transition text-slate-900 px-6 py-3 rounded-2xl font-bold shadow-xl">
              Hire Me
            </button>

            <button className="border border-slate-500 hover:border-cyan-400 hover:text-cyan-400 transition px-6 py-3 rounded-2xl font-semibold">
              View Services
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-800/70 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <p className="text-cyan-400 font-bold text-2xl">5+</p>
              <p className="text-slate-300">Years in Communication & Support</p>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <p className="text-cyan-400 font-bold text-2xl">Remote</p>
              <p className="text-slate-300">Administrative Assistance</p>
            </div>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Profile"
              className="relative w-[350px] h-[420px] object-cover rounded-[2rem] border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/70 border border-slate-700 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-cyan-400">About Me</h2>

          <p className="text-slate-300 leading-relaxed text-lg">
            I am a reliable and detail-oriented aspiring Virtual Assistant with
            professional experience in customer service, online teaching,
            operations coordination, and administrative support. I help clients
            stay organized, communicate effectively, and manage daily tasks with
            efficiency and professionalism.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4">Services I Offer</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional support services designed to help businesses save time,
            stay organized, and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Administrative Support',
              desc: 'Email management, scheduling, file organization, and task coordination.',
            },
            {
              title: 'Customer Support',
              desc: 'Professional chat and email support with excellent communication.',
            },
            {
              title: 'Research & Data Entry',
              desc: 'Accurate data management, online research, and reporting.',
            },
            {
              title: 'Calendar Management',
              desc: 'Appointment scheduling, reminders, and meeting coordination.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-2 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-5">
                <div className="w-6 h-6 rounded-full bg-cyan-400"></div>
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4">Work Experience</h2>
          <p className="text-slate-400">
            A background built on communication, organization, and leadership.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              role: 'ESL Teacher',
              company: '51Talk & Bizmates Philippines',
              year: '2015 – 2019',
              desc: 'Conducted online lessons, managed schedules, and provided professional support to students and professionals.',
            },
            {
              role: 'Loan Officer',
              company: 'Mount Carmel Rural Bank',
              year: '2012 – 2015',
              desc: 'Processed applications, maintained records, and handled client communication efficiently.',
            },
            {
              role: 'Plant Supervisor',
              company: 'Ventura Plywood Philippines Inc.',
              year: '2010 – 2012',
              desc: 'Supervised operations, organized workflow, and coordinated with management teams.',
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{job.role}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>

                <div className="text-slate-400 font-semibold">{job.year}</div>
              </div>

              <p className="text-slate-400 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] p-10 text-slate-900 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4">Core Skills</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Equipped with communication, administrative, and organizational
                skills that help businesses operate smoothly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Google Workspace',
                'Microsoft Office',
                'Calendly',
                'HubSpot',
                'Customer Service',
                'Data Entry',
                'Research',
                'Scheduling',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-4 font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="bg-slate-800 border border-slate-700 rounded-[2rem] p-12 shadow-2xl">
          <h2 className="text-4xl font-black mb-4">Let’s Work Together</h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Looking for a dependable Virtual Assistant who can help manage your
            tasks and support your business operations? Let’s connect.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <p className="text-cyan-400 font-bold mb-2">Phone</p>
              <p className="text-slate-300">+63 927 068 7377</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <p className="text-cyan-400 font-bold mb-2">Email</p>
              <p className="text-slate-300">callcenter101020@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © 2026 Limuel Ponce • Virtual Assistant Portfolio
      </footer>
    </div>
  )
}
