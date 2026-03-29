import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";

// Example backend schema format for Event Registration
export const eventRegistrationSchema = {
  title: "Event Registration",
  description:
    "Register your spot for this event. All fields marked * are required.",
  submitLabel: "Reserve My Spot",
  successTitle: "You're Registered!",
  successMessage:
    "Your spot has been confirmed. Check your email for the event details and joining link.",
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
          placeholder: "e.g. Alex@gmail.com",
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
      name: "eventId",
      type: "select",
      label: "Event Name",
      icon: "calendar",
      placeholder: "Choose an Event",
      // In production, options come from the backend API response
      options: [
        { value: "evt1", label: "Tech Talk: AI & The Future" },
        { value: "evt2", label: "Leadership Summit 2026" },
        { value: "evt3", label: "Hackathon Spring Edition" },
        { value: "evt4", label: "Networking Night" },
      ],
      validation: { required: true },
    },
    {
      name: "attendanceType",
      type: "select",
      label: "Attendance Type",
      placeholder: "Select attendance mode",
      options: [
        { value: "in-person", label: "In-Person" },
        { value: "online", label: "Online" },
      ],
      validation: { required: true },
    },
    {
      name: "dietaryNeeds",
      type: "multi-checkbox",
      label: "Dietary Requirements (if in-person)",
      layout: "row",
      options: ["Vegetarian", "Vegan", "Gluten-Free", "Halal", "None"],
      fullWidth: true,
    },
    {
      name: "hearAbout",
      type: "radio",
      label: "How did you hear about this event?",
      layout: "row",
      options: [
        { value: "social", label: "Social Media" },
        { value: "email", label: "Email Newsletter" },
        { value: "friend", label: "Friend / Colleague" },
        { value: "website", label: "Our Website" },
      ],
      fullWidth: true,
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
      name: "agreeTerms",
      type: "checkbox",
      checkboxLabel:
        'I agree to the event <a href="#" class="text-[#9B7EFF] underline">Terms & Conditions</a> and consent to photos being taken at the event.',
      validation: {
        required: true,
        requiredMessage: "You must accept the terms to register.",
      },
      fullWidth: true,
    },
  ],
};

export default function EventRegistrationForm({ schema, onCancel }) {
  const handleSubmit = async (values) => {
    // Replace with real API call:
    // await api.post(`/events/${values.eventId}/register`, values);
    console.log("Event Registration Submitted:", values);
    await new Promise((res) => setTimeout(res, 1200));
  };

  return (
    <DynamicFormBuilder
      schema={schema || eventRegistrationSchema}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
}
