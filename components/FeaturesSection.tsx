import Card from './ui/Card';
import { features } from '../data/features';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-transparent py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            glass
            className="transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-4">
              <feature.icon className="text-5xl text-indigo-400" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-slate-200">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
