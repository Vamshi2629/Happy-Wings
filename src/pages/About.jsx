import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaStar, FaHeart, FaUsers } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import aboutHero from '../assets/images/about-hero.png';

const timeline = [
  { year: 'Jan 2026', title: 'The Dream Begins', desc: 'The idea for Happy Wings was born — we thought to start bringing the crispiest fried chicken to Siddipet.' },
  { year: 'May 2026', title: 'Recipe Perfection', desc: 'We fixed our plan to start serving premium crispy fried chicken with our perfect secret spice blend.' },
  { year: 'June 29, 2026', title: 'Grand Opening', desc: 'Happy Wings opened its doors at Housing Board Colony, Siddipet. The response has been overwhelming!' },
  { year: 'July 2026', title: 'Fan Favorite', desc: 'Became the #1 fried chicken spot in Siddipet with thousands of happy customers.' },
];

const values = [
  { icon: <FaCheckCircle />, title: 'Quality First', desc: 'We use only the freshest ingredients. Our chicken is never frozen and always prepared to order.' },
  { icon: <FaStar />, title: 'Flavor Mastery', desc: 'Our secret blend of 12 spices creates an unforgettable taste that keeps you coming back.' },
  { icon: <FaHeart />, title: 'Made with Love', desc: 'Every piece of chicken is prepared with passion and care by our skilled team.' },
  { icon: <FaUsers />, title: 'Community', desc: 'We\'re proud to be a part of the Siddipet community, serving families and friends daily.' },
];

const stats = [
  { number: '10,000+', label: 'Happy Customers' },
  { number: '50,000+', label: 'Pieces Served' },
  { number: '4.8', label: 'Average Rating' },
  { number: '7', label: 'Days a Week' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>🍗 About Us — Happy Wings | Our Story & Values</title>
        <meta name="description" content="Learn about Happy Wings — our journey from a dream to Siddipet's favorite fried chicken restaurant. Discover our values, quality commitment, and the story behind the crunch." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="Our kitchen" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark" />
        </div>

        <div className="container-main relative z-10">
          <SectionTitle title="Our Story" subtitle="🍗 The Happy Wings Journey" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 relative">
        <div className="container-main">
          <div className="lg:flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 mb-10 lg:mb-0"
            >
              <img
                src={aboutHero}
                alt="Happy Wings cooking"
                className="rounded-2xl shadow-2xl border border-brand-dark-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="font-heading text-3xl sm:text-4xl gradient-text-fire tracking-wider uppercase mb-6">
                From Love to Crunch
              </h2>
              <div className="space-y-4 text-brand-gray-light text-sm leading-relaxed">
                <p>
                  Happy Wings was born out of a simple passion — the love for perfectly crispy fried chicken. We believed that Siddipet deserved a premium fried chicken experience, one that rivals the best in the country.
                </p>
                <p>
                  After months of experimenting with spice blends, cooking techniques, and sourcing the freshest ingredients, we perfected our signature recipe. Every piece of chicken is marinated for hours, coated in our secret 12-spice blend, and fried to golden perfection.
                </p>
                <p>
                  Today, Happy Wings is more than just a restaurant — it's a community of chicken lovers who share the joy of crispy, juicy, flavorful fried chicken. Whether you're celebrating with family or grabbing a quick bite, we're here to make every moment delicious.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="font-heading text-lg tracking-wider gradient-text-fire">Stay Happy, Eat Happy!</span>
                <span className="text-2xl">🍗❤️</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Stats */}
      <section className="py-16">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center glass-card p-6"
              >
                <p className="font-heading text-3xl sm:text-4xl gradient-text-fire tracking-wider">{stat.number}</p>
                <p className="text-brand-gray text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-main">
          <SectionTitle title="Our Values" subtitle="What We Stand For" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center group hover:border-brand-yellow/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center text-white text-xl mx-auto mb-4 group-hover:shadow-[0_0_25px_rgba(227,24,24,0.3)] transition-shadow">
                  {val.icon}
                </div>
                <h3 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-2">{val.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-16">
        <div className="container-main">
          <SectionTitle title="Our Journey" subtitle="📍 Milestones" />

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-brand-orange to-brand-yellow" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-red border-4 border-brand-dark z-10 mt-1" />

                {/* Content */}
                <div className={`glass-card p-5 ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'}`}>
                  <span className="font-heading text-brand-yellow text-sm tracking-widest">{item.year}</span>
                  <h3 className="font-heading text-lg text-brand-white tracking-wider uppercase mt-1 mb-2">{item.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
