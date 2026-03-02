import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";
import { useState } from "react";
import { eventRegistrationSchema } from "./schemas/eventRegistrationSchema";
import { joinRequestSchema } from "./schemas/joinRequestSchema";
import { workshopRegistrationSchema } from "./schemas/workshopRegistrationSchema";

const TABS = [
  { key: "join", label: "Join Request" },
  { key: "event", label: "Event Registration" },
  { key: "workshop", label: "Workshop Registration" },
  { key: "all-types", label: "All Field Types Demo" },
];

const allTypesSchema = {
  title: "All Field Types Demo",
  description:
    "Showcasing every supported input type in the DynamicFormBuilder.",
  submitLabel: "Submit Demo Form",
  gridCols: 2,
  fields: [
    { type: "heading", label: "Text Inputs" },
    {
      name: "text",
      type: "text",
      label: "Text",
      icon: "user",
      placeholder: "Plain text input",
      validation: { required: true },
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      icon: "email",
      placeholder: "hello@example.com",
      validation: { required: true, email: true },
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Your password",
      validation: { required: true, minLength: 8 },
    },
    {
      name: "number",
      type: "number",
      label: "Number",
      placeholder: "42",
      validation: { min: 1, max: 999 },
    },
    {
      name: "tel",
      type: "tel",
      label: "Phone",
      icon: "phone",
      placeholder: "+20 100 000 000 0",
    },
    {
      name: "url",
      type: "url",
      label: "Website URL",
      placeholder: "https://example.com",
    },
    { type: "divider" },
    { type: "heading", label: "Multi-line & Rich Inputs" },
    {
      name: "textarea",
      type: "textarea",
      label: "Textarea",
      icon: "note",
      placeholder: "Write something here…",
      fullWidth: true,
    },
    { type: "divider" },
    { type: "heading", label: "Selection Inputs" },
    {
      name: "select",
      type: "select",
      label: "Dropdown Select",
      placeholder: "Pick an option",
      options: ["Option A", "Option B", "Option C"],
      validation: { required: true },
    },
    {
      name: "radio",
      type: "radio",
      label: "Radio Group",
      layout: "row",
      options: ["Choice 1", "Choice 2", "Choice 3"],
      fullWidth: true,
    },
    {
      name: "checkbox",
      type: "checkbox",
      checkboxLabel: "I agree to the terms and conditions",
      fullWidth: true,
    },
    {
      name: "multiCheck",
      type: "multi-checkbox",
      label: "Multi-Checkbox",
      layout: "row",
      options: ["Tag A", "Tag B", "Tag C", "Tag D"],
      fullWidth: true,
    },
    { type: "divider" },
    { type: "heading", label: "Date & Time" },
    { name: "date", type: "date", label: "Date", icon: "calendar" },
    { name: "time", type: "time", label: "Time", icon: "clock" },
    {
      name: "datetimeLocal",
      type: "datetime-local",
      label: "Date & Time",
      fullWidth: true,
    },
    { type: "divider" },
    { type: "heading", label: "Special Inputs" },
    {
      name: "range",
      type: "range",
      label: "Range Slider",
      min: 0,
      max: 100,
      step: 5,
      unit: "%",
      defaultValue: 50,
      fullWidth: true,
    },
    { name: "rating", type: "rating", label: "Star Rating", max: 5 },
    { name: "toggle", type: "toggle", label: "Toggle Switch" },
    {
      name: "file",
      type: "file",
      label: "File Upload",
      accept: ".pdf,.png,.jpg",
      fullWidth: true,
    },
  ],
};

const SCHEMAS = {
  join: joinRequestSchema,
  event: eventRegistrationSchema,
  workshop: workshopRegistrationSchema,
  "all-types": allTypesSchema,
};

export default function FormDemoPage() {
  const [activeTab, setActiveTab] = useState("join");

  const handleSubmit = async (values) => {
    console.log(`[${activeTab}] Submitted:`, values);
    await new Promise((res) => setTimeout(res, 1200));
  };

  return (
    <div className="min-h-screen bg-gradientBg3 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Dynamic Form Builder
        </h1>
        <p className="text-center text-white/50 text-sm mb-8">
          Schema-driven forms — fully dynamic, validated, and accessible
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#7441FF] text-white shadow-[0_4px_16px_rgba(116,65,255,0.4)]"
                  : "bg-[#241352] text-white/60 hover:bg-[#452798]/40 hover:text-white border border-[#6B4FD0]/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <DynamicFormBuilder
          key={activeTab}
          schema={SCHEMAS[activeTab]}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
