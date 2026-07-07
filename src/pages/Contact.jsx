import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Visit Us',
    details: ['Housing Board Colony,', 'Near Punjab National Bank,', 'Beside BRS Party Office,', 'SIDDIPET, Telangana'],
    color: 'from-brand-red to-brand-orange',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    details: ['8121667040'],
    link: 'tel:8121667040',
    color: 'from-brand-orange to-brand-yellow',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    details: ['happywings119@gmail.com'],
    link: 'mailto:happywings119@gmail.com',
    color: 'from-brand-yellow to-brand-orange',
  },
  {
    icon: <FaClock />,
    title: 'Hours',
    details: ['Mon – Sun', '4:00 PM – 11:00 PM', 'Open all 7 days!'],
    color: 'from-green-500 to-emerald-400',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hi Happy Wings!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918121667040?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>🍗 Contact — Happy Wings | Get in Touch</title>
        <meta name="description" content="Get in touch with Happy Wings in Siddipet. Call us, email, or visit our Housing Board Colony outlet." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-16 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none" />
        <div className="container-main relative z-10">
          <SectionTitle title="Contact Us" subtitle="📞 We'd Love to Hear from You" />
          <p className="text-center text-brand-gray max-w-2xl mx-auto text-sm leading-relaxed -mt-6">
            Have a question, feedback, or want to say hello? Get in touch with us through any of the channels below!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center group hover:border-brand-yellow/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-xl mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                  {info.icon}
                </div>
                <h3 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-brand-gray-light text-sm hover:text-brand-white transition-colors">
                    {info.details.join(' ')}
                  </a>
                ) : (
                  info.details.map((line, j) => (
                    <p key={j} className="text-brand-gray-light text-sm leading-relaxed">{line}</p>
                  ))
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-2xl text-brand-white tracking-wide uppercase mb-6 pb-3 border-b border-brand-dark-border">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-brand-gray text-xs uppercase tracking-wider mb-1.5 font-semibold">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-brand-dark-lighter border border-brand-dark-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-red/50 focus:shadow-[0_0_15px_rgba(227,24,24,0.1)] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-brand-gray text-xs uppercase tracking-wider mb-1.5 font-semibold">Email</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-brand-dark-lighter border border-brand-dark-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-red/50 focus:shadow-[0_0_15px_rgba(227,24,24,0.1)] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-brand-gray text-xs uppercase tracking-wider mb-1.5 font-semibold">Phone</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                        className="w-full bg-brand-dark-lighter border border-brand-dark-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-red/50 focus:shadow-[0_0_15px_rgba(227,24,24,0.1)] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-brand-gray text-xs uppercase tracking-wider mb-1.5 font-semibold">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us what's on your mind..."
                      className="w-full bg-brand-dark-lighter border border-brand-dark-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-red/50 focus:shadow-[0_0_15px_rgba(227,24,24,0.1)] transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow btn-glow-red w-full text-base py-3"
                    id="contact-submit-btn"
                  >
                    {submitted ? '✅ Sent! Check WhatsApp' : '💬 Send Message'}
                  </motion.button>
                </form>
              </div>

              {/* Quick contact */}
              <div className="mt-8 pt-6 border-t border-brand-dark-border">
                <p className="text-brand-gray text-xs uppercase tracking-wider mb-3 font-semibold">Or reach us directly:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  <a
                    href="https://wa.me/918121667040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-4 py-2.5 text-[#25D366] text-sm hover:bg-[#25D366]/20 transition-all font-medium"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href="tel:8121667040"
                    className="flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2.5 text-blue-400 text-sm hover:bg-blue-500/20 transition-all font-medium"
                  >
                    <FaPhoneAlt /> Call
                  </a>
                  <a
                    href="https://instagram.com/happywings_siddipet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2.5 text-pink-400 text-sm hover:bg-pink-500/20 transition-all font-medium"
                  >
                    <FaInstagram /> Instagram
                  </a>
                  <a
                    href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#E23744]/10 border border-[#E23744]/30 rounded-full px-4 py-2.5 text-[#E23744] text-sm hover:bg-[#E23744]/20 transition-all font-medium"
                  >
                    <SiZomato /> Zomato
                  </a>
                  <a
                    href="https://youtube.com/@happywings_siddipet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full px-4 py-2.5 text-[#FF0000] text-sm hover:bg-[#FF0000]/20 transition-all font-medium col-span-2 sm:col-span-1"
                  >
                    <FaYoutube /> YouTube
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-brand-dark-border h-[400px] lg:h-auto min-h-[400px]"
            >
              <iframe
                title="Happy Wings Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4666.769040701011!2d78.8555708!3d18.086557499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc93e5674b9ce9%3A0x8d575f65c784715d!2sHappy%20Wings!5e1!3m2!1sen!2sin!4v1783093216337!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
