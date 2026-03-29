import options from "@/utils/config";

export default function CalendlyEmbed() {
  const calendlyUrl = options.CALENDLY.URL;

  if (!calendlyUrl) {
    return (
      <div className="bg-rosa-50 dark:bg-rosa-950/30 rounded-3xl p-12 text-center border border-rosa-100 dark:border-rosa-900/50">
        <p className="text-gray-500 dark:text-gray-400">
          El sistema de agendamiento estará disponible pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
      <iframe
        src={calendlyUrl}
        width="100%"
        height="700"
        frameBorder="0"
        title="Agendar cita con Psi. Kyo-Sai Nieves"
        className="w-full min-h-[600px] lg:min-h-[700px]"
      />
    </div>
  );
}
