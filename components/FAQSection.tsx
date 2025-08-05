import FAQItem from './ui/FAQItem';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}