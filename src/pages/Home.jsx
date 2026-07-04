import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaStar, FaShieldAlt, FaTruck, FaYoutube } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import HeroSection from '../components/HeroSection';
import TodaySpecialSection from '../components/TodaySpecialSection';
import BestSellersSection from '../components/BestSellersSection';
import HappyBoxSection from '../components/HappyBoxSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramGallerySection from '../components/InstagramGallerySection';
import FindUsSection from '../components/FindUsSection';
import menuData from '../data/menuData';
import testimonialsData from '../data/testimonialsData';

import heroImg from '../assets/images/hero-chicken.png';
import koreanImg from '../assets/images/korean-chicken.png';
import happyBoxImg from '../assets/images/happy-box.png';
import gallery1 from '../assets/images/gallery-1.png';
import gallery2 from '../assets/images/gallery-2.png';
import gallery3 from '../assets/images/gallery-3.png';
import gallery4 from '../assets/images/gallery-4.png';
import gallery5 from '../assets/images/gallery-5.png';
import appLogo from '../assets/logo/app-logo.jpeg';

const bestSellers = menuData.filter((item) => item.badges.includes('bestseller'));

const whyChooseUs = [
  { icon: <FaCheckCircle />, title: '100% Fresh', desc: 'Made fresh daily with premium ingredients. Never frozen, always crispy.' },
  { icon: <FaStar />, title: 'Crispy Perfection', desc: 'Our secret blend of spices and cooking technique ensures the perfect crunch.' },
  { icon: <FaShieldAlt />, title: 'Hygienic & Safe', desc: 'Highest standards of hygiene and food safety in our kitchen.' },
  { icon: <FaTruck />, title: 'Fast Service', desc: 'Quick preparation and delivery so your food arrives hot and fresh.' },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>🍗 Happy Wings — The Joy of Crispy Fried Chicken | Siddipet</title>
        <meta name="description" content="Happy Wings serves the crispiest, juiciest fried chicken in Siddipet. Explore our famous wings, burgers, and Happy Box combos." />
      </Helmet>

      <HeroSection heroImg={heroImg} appLogo={appLogo} />

      <div className="section-divider" />

      <TodaySpecialSection
        image={koreanImg}
        title="Today's Special"
        subtitle="🔥 Limited Time Only"
        badgeText="Today Only"
        heading="Korean Fried Chicken"
        description="Fresh chicken with special Korean gochujang glaze, finished with sesame seeds. Crispy, sweet, spicy — an explosion of flavors in every bite!"
        price="₹127"
        originalPrice="₹159"
        offerText="20% OFF"
        buttonText="View Menu"
      />

      <BestSellersSection items={bestSellers} />

      <div className="section-divider" />

      <HappyBoxSection
        image={happyBoxImg}
        items={['Any 2 Burgers', '2 Wings', 'French Fries', 'Coke', 'Any 2 Sauces']}
      />

      <WhyChooseUsSection reasons={whyChooseUs} />

      <div className="section-divider" />

      <ReviewsSection testimonials={testimonialsData} />

      <InstagramGallerySection images={galleryImages} />

      {/* ── Zomato + YouTube Banner ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-card via-brand-dark to-brand-dark-card" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-main relative z-10">
          <p className="text-center text-brand-gray font-body text-xs uppercase tracking-[0.2em] mb-3">Now Available On</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Zomato Card */}
            <a
              href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#E23744]/10 border border-[#E23744]/30 hover:bg-[#E23744]/20 hover:border-[#E23744] rounded-2xl px-8 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,55,68,0.3)] w-full sm:w-auto"
            >
              <div className="w-14 h-14 rounded-full bg-[#E23744] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(226,55,68,0.4)] group-hover:scale-110 transition-transform">
                <SiZomato size={26} />
              </div>
              <div>
                <p className="text-[#E23744] text-xs font-semibold uppercase tracking-widest">Order Online</p>
                <p className="text-brand-white text-xl font-bold">Zomato</p>
                <p className="text-brand-gray text-xs mt-0.5">Fast delivery to your door 🚀</p>
              </div>
            </a>

            <div className="hidden sm:block w-px h-16 bg-brand-dark-border" />

            {/* YouTube Card */}
            <a
              href="https://youtube.com/@happywings_siddipet"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#FF0000]/10 border border-[#FF0000]/30 hover:bg-[#FF0000]/20 hover:border-[#FF0000] rounded-2xl px-8 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] w-full sm:w-auto"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform">
                <FaYoutube size={28} />
              </div>
              <div>
                <p className="text-[#FF0000] text-xs font-semibold uppercase tracking-widest">Subscribe Now</p>
                <p className="text-brand-white text-xl font-bold">YouTube</p>
                <p className="text-brand-gray text-xs mt-0.5">Watch our food magic 🍗🎬</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <FindUsSection />
    </>
  );
}
