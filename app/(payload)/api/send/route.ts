import ContactFormTemplate from "@/components/ContactFormTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Fit-swim <info@fit-swim.de>",
      to: ["info@fit-swim.de"],
      subject: `Kontaktformular - ${subject}`,
      react: ContactFormTemplate({ name, email, subject, message }),
    });

    if (error) {
      console.log("error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
