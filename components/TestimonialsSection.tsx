import Card from './ui/Card';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} glass>
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Customer Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border border-indigo-400 shadow-lg"
              />

              {/* Feedback */}
              <p className="text-slate-200 italic">"{t.feedback}"</p>

              {/* Name + Role */}
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
