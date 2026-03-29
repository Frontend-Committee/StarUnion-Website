import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";

// Example backend schema format for Join Requests
const joinRequestSchema = {
  title: "Join Request",
  description:
    "Fill in your details to apply for membership in this committee.",
  submitLabel: "Submit Application",
  cancelLabel: "Maybe Later",
  successTitle: "Application Submitted!",
  successMessage:
    "Thanks for applying! Our team will review your request and reach out within 3–5 business days.",
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
          name: "university",
          type: "text",
          label: "University / Organization",
          icon: "building",
          placeholder: "e.g. Cairo University",
          validation: { required: true },
        },
      ],
    },
    {
      name: "academicYear",
      type: "select",
      label: "Academic Year",
      icon: "calendar",
      placeholder: "Select your year",
      options: [
        { value: "1", label: "Year 1" },
        { value: "2", label: "Year 2" },
        { value: "3", label: "Year 3" },
        { value: "4", label: "Year 4" },
        { value: "grad", label: "Graduate / Postgrad" },
      ],
      validation: { required: true },
    },
    {
      name: "experience",
      type: "select",
      label: "Experience Level",
      placeholder: "Choose experience level",
      options: [
        { value: "beginner", label: "Beginner (< 6 months)" },
        { value: "intermediate", label: "Intermediate (6 mo – 2 yrs)" },
        { value: "advanced", label: "Advanced (2+ years)" },
      ],
      validation: { required: true },
    },
    {
      name: "skills",
      type: "multi-checkbox",
      label: "Relevant Skills",
      layout: "row",
      options: [
        "Leadership",
        "Design",
        "Development",
        "Marketing",
        "Content Writing",
        "Data Analysis",
      ],
      fullWidth: true,
    },
    {
      name: "availability",
      type: "radio",
      label: "Weekly Availability",
      layout: "row",
      options: [
        { value: "lt5", label: "< 5 hrs / week" },
        { value: "5to10", label: "5–10 hrs / week" },
        { value: "gt10", label: "10+ hrs / week" },
      ],
      validation: { required: true },
      fullWidth: true,
    },
    {
      name: "motivation",
      type: "textarea",
      label: "Why do you want to join?",
      icon: "note",
      placeholder: "Tell us what motivates you…",
      rows: 4,
      validation: { required: true, minLength: 30 },
      fullWidth: true,
    },
    {
      name: "linkedIn",
      type: "url",
      label: "LinkedIn Profile (optional)",
      placeholder: "https://linkedin.com/in/…",
    },
    {
      name: "cvFile",
      type: "file",
      label: "Upload CV (optional)",
      accept: ".pdf,.doc,.docx",
      fullWidth: false,
    },
    {
      type: "divider",
    },
    {
      name: "agreeTerms",
      type: "checkbox",
      checkboxLabel:
        'I agree to the <a href="#" class="text-[#9B7EFF] underline">Terms & Conditions</a> and confirm that all provided information is accurate.',
      validation: {
        required: true,
        requiredMessage: "You must agree to the terms.",
      },
      fullWidth: true,
    },
  ],
};

export default function JoinRequestForm({ onCancel }) {
  const handleSubmit = async (values) => {
    // Replace with real API call, e.g.:
    // await api.post("/join-requests", values);
    console.log("Join Request Submitted:", values);
    await new Promise((res) => setTimeout(res, 1200)); // simulate network
  };

  return (
    <DynamicFormBuilder
      schema={joinRequestSchema}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
}
