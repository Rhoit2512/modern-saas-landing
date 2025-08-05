import Card from './ui/Card';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <Card glass>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-sm text-slate-200 text-center">
              Perfect for small teams and personal projects.
            </p>
            <p className="text-3xl font-bold">$9/mo</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-medium transition">
              Choose Plan
            </button>
          </div>
        </Card>

        <Card glass>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm text-slate-200 text-center">
              Advanced features for growing businesses.
            </p>
            <p className="text-3xl font-bold">$29/mo</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-medium transition">
              Choose Plan
            </button>
          </div>
        </Card>

        <Card glass>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-sm text-slate-200 text-center">
              Custom solutions for large organizations.
            </p>
            <p className="text-3xl font-bold">Contact Us</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-medium transition">
              Choose Plan
            </button>
          </div>
        </Card>

      </div>
    </section>
  );
}
