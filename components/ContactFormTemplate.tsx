



interface ContactFormTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

const ContactFormTemplate = ({ name, email, subject, message, phone }: ContactFormTemplateProps) => {
  return (
    <div>
        <h1>Contact Form Request</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Subject: {subject}</p>
        <p>Message: {message}</p>
    </div>
  )
}

export default ContactFormTemplate