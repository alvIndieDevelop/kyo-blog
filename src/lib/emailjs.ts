import emailjs from "@emailjs/browser";
import options from "@/utils/config";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      options.EMAILJS.SERVICE_ID,
      options.EMAILJS.TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      options.EMAILJS.PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};
