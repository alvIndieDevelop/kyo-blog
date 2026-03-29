import { Heart } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function EmotionalBlock() {
  return (
    <section className="py-20 bg-cream dark:bg-rosa-950/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="w-14 h-14 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-7 h-7 text-rosa-500 dark:text-rosa-400" />
          </div>
          <blockquote className="text-2xl lg:text-3xl font-display text-gray-900 dark:text-white leading-relaxed mb-6">
            &ldquo;Entenderte también es una forma de sanar&rdquo;
          </blockquote>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            El camino hacia el bienestar emocional comienza cuando te das permiso
            de mirar hacia adentro. No necesitas tener todas las respuestas — solo
            la disposición de iniciar el proceso. Aquí encontrarás un espacio
            seguro, libre de juicio, donde puedes explorar lo que sientes y
            descubrir nuevas formas de relacionarte contigo y con los demás.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
