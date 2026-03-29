import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";

const contactSchema = {
  title: "Get in Touch",
  submitLabel: "Send Message",
  successTitle: "Message Sent!",
  successMessage:
    "Thanks for reaching out. Our specialized members will contact you shortly.",
  gridCols: 1,
  fields: [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      icon: "user",
      placeholder: "Enter your full name",
      validation: { required: true, minLength: 3 },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      icon: "email",
      placeholder: "Enter your email address",
      validation: { required: true, email: true },
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone",
      icon: "phone",
      placeholder: "Enter your phone number",
      validation: { required: true, phone: true },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      icon: "note",
      rows: 5,
      validation: { required: true, minLength: 10 },
    },
  ],
};

export default function ContactUsPage() {
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <section className="container  text-white">
      <div className="">
        <div className="mb-8 md:mb-10">
          <h1 className="text-h2 text-tertiary font-extrabold mb-2">Contact us</h1>
          <p className="text-white text-sm font-semibold">
            Contact us 24 hours a day and speak with specialized Members
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <DynamicFormBuilder schema={contactSchema} onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
