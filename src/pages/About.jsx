import { motion } from 'framer-motion';

const About = () => {
  const team = [
    { name: 'Alex Rivera', role: 'Creative Director', img: 'https://i.pravatar.cc/300?img=11' },
    { name: 'Samantha Lee', role: 'Lead Developer', img: 'https://i.pravatar.cc/300?img=47' },
    { name: 'Marcus Johnson', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/300?img=33' },
    { name: 'Isabella Silva', role: 'Product Manager', img: 'https://i.pravatar.cc/300?img=5' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400"
          >
            We are a collective of creators, engineers, and strategists driven by a singular mission: to build digital experiences that matter.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To empower businesses by crafting high-quality, modern, and accessible web solutions. We believe in writing clean code and creating intuitive user interfaces that bridge the gap between complex technology and human interaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
              To become the global standard for web excellence. We envision a digital landscape where every application is not only functional but also a joy to use. We constantly innovate to stay ahead of the curve in a rapidly evolving tech world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-slate-400">The brilliant minds behind Elegance.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-emerald-400 mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
