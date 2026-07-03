import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

export default function ReviewsSection({ testimonials }) {
  return (
    <section className="py-20 relative bg-brand-dark-lighter" id="reviews">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main">
        <SectionTitle title="Customer Love" subtitle="💛 What Our Fans Say" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
