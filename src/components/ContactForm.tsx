import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { sendEmail } from "../lib/emailjs";
import { useToast } from "../hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z
    .string()
    .email("Por favor ingresa un correo electrónico válido"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(
        data as { name: string; email: string; message: string }
      );
      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description:
            "Gracias por tu mensaje. Te responderé lo antes posible.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast({
        title: "Error",
        description:
          "No se pudo enviar el mensaje. Por favor intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 dark:focus:border-teal-600 transition"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 dark:focus:border-teal-600 transition"
          placeholder="tu.correo@ejemplo.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 dark:focus:border-teal-600 transition resize-none"
          placeholder="¿En qué puedo ayudarte?"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-teal-600/25"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
