import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { title: 'Modern Design', description: 'Pixel-perfect UI built for the modern web.' },
    { title: 'Lightning Fast', description: 'Optimized for speed and high performance.' },
    { title: 'Scalable Architecture', description: 'Built to grow with your business needs.' },
  ];

  const testimonials = [
    { name: 'Sarah Jenkins', role: 'CEO at TechNova', text: '"Elegance transformed our digital presence. Highly recommended!"' },
    { name: 'David Chen', role: 'Founder, StartupX', text: '"The best web agency we have ever worked with. Fast and reliable."' },
    { name: 'Emily Rodriguez', role: 'Marketing Director', text: '"Incredible attention to detail and a truly premium feel."' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Future</span> of Web.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            We craft digital experiences that are elegant, performant, and designed to convert. Elevate your brand with our premium solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-colors border border-slate-700">
              Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-slate-400">Everything you need to launch your next big idea.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <CheckCircle className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-900/20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">500+</h4>
              <p className="text-slate-400 font-medium">Projects Delivered</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-4">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">98%</h4>
              <p className="text-slate-400 font-medium">Client Retention</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-4">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">24/7</h4>
              <p className="text-slate-400 font-medium">Expert Support</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-4">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">15+</h4>
              <p className="text-slate-400 font-medium">Awards Won</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg italic text-slate-300 mb-6">{test.text}</p>
                <div>
                  <p className="font-semibold">{test.name}</p>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-slate-800/50 border border-slate-700/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full translate-y-1/2"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your business?</h2>
            <p className="text-xl text-slate-400 mb-10 relative z-10">
              Join hundreds of forward-thinking companies building their future with us.
            </p>
            <Link to="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
