import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";

// Example backend schema format for Workshop Registration
export const workshopRegistrationSchema = {
  title: "Workshop Registration",
  description:
    "Secure your seat in one of our workshops. Limited spots available!",
  submitLabel: "Register Now",
  successTitle: "Seat Reserved!",
  successMessage:
    "You're all set! A confirmation email has been sent with details about your workshop.",
  gridCols: 2,
  fields: [
    {
      type: "group",
      gridCols: 2,
      fields: [
        {
          name: "fullName",
          type: "text",
          label: "Full Name",
          icon: "user",
          placeholder: "e.g. Alex Johnson",
          validation: { required: true, minLength: 3 },
        },
        {
          name: "email",
          type: "email",
          label: "Email Address",
          icon: "email",
          placeholder: "e.g. alex@gmail.com",
          validation: { required: true, email: true },
        },
        {
          name: "phone",
          type: "tel",
          label: "Phone",
          icon: "phone",
          placeholder: "e.g. +20 100 000 000 0",
          validation: { required: true, phone: true },
        },
        {
          name: "organization",
          type: "text",
          label: "Company / Organization",
          icon: "building",
          placeholder: "e.g. Cairo University",
          validation: { required: true },
        },
      ],
    },
    {
      name: "workshopId",
      type: "select",
      label: "Workshop Name",
      icon: "calendar",
      placeholder: "Choose a workshop",
      // In production, options come from the backend API response
      options: [
        { value: "ws1", label: "UI/UX Design Fundamentals" },
        { value: "ws2", label: "Full-Stack Web Development" },
        { value: "ws3", label: "Data Science & ML Bootcamp" },
        { value: "ws4", label: "Cybersecurity Essentials" },
        { value: "ws5", label: "Product Management 101" },
      ],
      validation: { required: true },
    },
    {
      name: "organization2",
      type: "text",
      label: "Company / Organization",
      icon: "building",
      placeholder: "e.g. Cairo University",
      validation: { required: true },
    },
    {
      name: "specialRequirements",
      type: "textarea",
      label: "Special Requirements",
      icon: "note",
      placeholder:
        "Please list any accessibility needs or requirements if needed.",
      rows: 3,
      fullWidth: true,
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      label: "Payment Information",
      description: "Workshop seats are confirmed upon payment.",
    },
    {
      name: "paymentMethod",
      type: "radio",
      label: "Payment Method",
      layout: "row",
      options: [
        { value: "credit", label: "Credit Card" },
        { value: "vodafone", label: "Vodafone Cash" },
        { value: "instapay", label: "InstaPay" },
        { value: "onsite", label: "On-site (Cash)" },
      ],
      validation: { required: true },
      fullWidth: true,
    },
    {
      name: "promoCode",
      type: "text",
      label: "Promo Code (optional)",
      placeholder: "STAR2026",
    },
    {
      name: "rating",
      type: "rating",
      label: "How excited are you? (optional)",
      max: 5,
    },
    {
      type: "divider",
    },
    {
      name: "agreeTerms",
      type: "checkbox",
      checkboxLabel:
        'I agree to the <a href="#" class="text-[#9B7EFF] underline">Workshop Terms</a> and understand that seats are non-refundable within 48 hours of the event.',
      validation: {
        required: true,
        requiredMessage: "You must accept the terms.",
      },
      fullWidth: true,
    },
  ],
};

export default function WorkshopRegistrationForm({ schema, onCancel }) {
  const handleSubmit = async (values) => {
    // Replace with real API call:
    // await api.post(`/workshops/${values.workshopId}/register`, values);
    console.log("Workshop Registration Submitted:", values);
    await new Promise((res) => setTimeout(res, 1200));
  };

  return (
    <DynamicFormBuilder
      schema={schema || workshopRegistrationSchema}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
}
