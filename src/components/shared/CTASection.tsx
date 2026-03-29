import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-rosa-600 to-rosa-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-rosa-100 mb-10 max-w-lg mx-auto">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block px-10 py-4 bg-white text-rosa-700 text-sm font-semibold rounded-full hover:bg-rosa-50 transition shadow-lg"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
