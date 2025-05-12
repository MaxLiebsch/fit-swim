interface ContactFormState {
  message: string;
}

export async function contactFormAction(
  prevState: ContactFormState | null,
  formData: FormData
) {
  const { name, email, subject, message, phone } = Object.fromEntries(formData);


  try {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return { message: "Nachricht konnte nicht gesendet werden" };
    }

    return { message: "Nachricht erfolgreich gesendet - Wir werden uns schnellstmöglich um Ihre Nachricht kümmern." };
  } catch (error) {
    return { message: "Nachricht konnte nicht gesendet werden" };
  }
}
