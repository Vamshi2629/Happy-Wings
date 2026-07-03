import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle';
import OfferCard from '../components/OfferCard';
import offersData from '../data/offersData';

export default function Offers() {
  return (
    <>
      <Helmet>
        <title>🍗 Offers & Deals — Happy Wings | Discounts on Fried Chicken</title>
        <meta name="description" content="Check out the amazing discounts and specials on our fried chicken and combos at Happy Wings!" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-16 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 to-transparent pointer-events-none" />
        {/* Floating emojis */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {['🔥', '🎉', '💰', '🍗', '⭐'].map((emoji, i) => (
            <span
              key={i}
              className="absolute text-3xl opacity-10"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="container-main relative z-10">
          <SectionTitle title="Hot Offers" subtitle="🔥 Deals You Can't Resist" />
          <p className="text-center text-brand-gray max-w-2xl mx-auto text-sm leading-relaxed -mt-6">
            Don't miss out on these sizzling deals! Present the offers below at our counter to avail amazing discounts on your favorites.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offersData.map((offer, i) => {
              const nonFeaturedCount = offersData.filter(o => !o.featured).length;
              const isLastAndSingle = !offer.featured && i === offersData.length - 1 && nonFeaturedCount % 2 !== 0;
              return (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  index={i}
                  isLastAndSingle={isLastAndSingle}
                />
              );
            })}
          </div>

          {/* Terms */}
          <div className="mt-12 text-center">
            <p className="text-brand-gray text-xs">
              * Terms & conditions apply. Offers are subject to availability. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
