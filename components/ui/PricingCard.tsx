import Button from './Button';

type PricingTier = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className={`rounded-2xl p-8 glass shadow-xl min-w-[250px] ${tier.popular ? 'border-2 border-indigo-500 scale-105' : ''}`}>
      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
      <p className="text-3xl font-extrabold mb-4">{tier.price}</p>
      <ul className="mb-6 text-sm space-y-2">
        {tier.features.map((f, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span> {f}
          </li>
        ))}
      </ul>
      <Button variant={tier.popular ? 'glass' : 'outline'} size="lg">
        Choose {tier.name}
      </Button>
    </div>
  );
}