import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern frameworks like React and Next.js for ultimate performance.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps that deliver native-like experiences on both iOS and Android devices.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design focusing on intuitive interfaces, engaging experiences, and beautiful aesthetics.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to improve your search engine rankings and increase organic traffic.',
    },
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="py-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Comprehensive digital solutions tailored to elevate your business in the modern web era.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-900/50 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
