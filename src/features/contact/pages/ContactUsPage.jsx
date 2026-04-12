import { useQuery, useMutation } from "@tanstack/react-query";
import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { listAllForms, getFormDetail, submitForm } from "@/lib/api/endpoints";

export default function ContactUsPage() {
  const { data: formsData, isLoading: isLoadingList } = useQuery({
    queryKey: ["formsList"],
    queryFn: listAllForms,
  });

  const contactFormId = formsData?.results?.find(
    (f) =>
      f.title.toLowerCase().includes("contact") || f.title === "Contact Us",
  )?.id;

  const { data: contactSchema, isLoading: isLoadingDetail } = useQuery({
    queryKey: ["formDetail", contactFormId],
    queryFn: () => getFormDetail(contactFormId),
    enabled: !!contactFormId,
    select: (formData) => ({
      title: formData.title,
      submitLabel: "Send Message",
      successTitle: "Message Sent!",
      successMessage:
        "Thanks for reaching out. Our specialized members will contact you shortly.",
      gridCols: 1,
      fields: formData.fields.map((field) => ({
        name: field.id.toString(),
        type: field.type,
        label: field.name,
        placeholder: field.placeholder,
        icon: getIconForField(field.type),
        validation: {
          required: field.is_required ? "This field is required" : false,
          pattern: field.regex
            ? {
                value: new RegExp(field.regex.replace(/\\\\/g, "\\"), "u"),
                message: `Invalid ${field.name} format`,
              }
            : undefined,
        },
      })),
    }),
  });

  const submitMutation = useMutation({
    mutationFn: submitForm,
  });

  const handleSubmit = async (values) => {
    const formattedValues = Object.entries(values).map(([key, value]) => ({
      field_id: parseInt(key, 10),
      value: String(value),
    }));

    const payload = {
      form: contactFormId,
      values: formattedValues,
    };

    return await submitMutation.mutateAsync(payload);
  };

  if (isLoadingList || (contactFormId && isLoadingDetail)) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="container py-12 text-white ">
      <div className="mb-8 md:mb-10 ">
        <h1 className="mb-5 font-semibold text-h2 text-tertiary">Contact us</h1>
        <p className="text-sm font-semibold text-white">
          Contact us 24 hours a day and speak with specialized Members
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {contactSchema ? (
          <DynamicFormBuilder schema={contactSchema} onSubmit={handleSubmit} />
        ) : (
          <p className="text-center text-gray-400">Contact form not found.</p>
        )}
      </div>
    </section>
  );
}

function getIconForField(type) {
  const icons = {
    text: "user",
    email: "email",
    tel: "phone",
    textarea: "note",
  };
  return icons[type] || "edit";
}
