export default function SectionTitle({ title, subtitle, light = false, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <p className="text-brand-orange font-body text-sm tracking-[0.2em] uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase brush-underline leading-tight ${
          light ? 'text-brand-dark' : 'gradient-text-fire'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
