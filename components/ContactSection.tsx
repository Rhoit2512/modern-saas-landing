import ContactForm from './ui/ContactForm';

export default function ContactSection() {
  return (
    <section className="py-24 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <ContactForm />
    </section>
  );
}