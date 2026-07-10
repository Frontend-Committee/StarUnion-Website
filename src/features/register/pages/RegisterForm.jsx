import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { getFormDetail, submitForm } from "@/lib/api/endpoints";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function RegisterForm() {
  const { formId } = useParams();

  const { data: formSchema, isLoading } = useQuery({
    queryKey: ["formDetail", formId],
    queryFn: () => getFormDetail(formId),
    enabled: !!formId,
    select: (formData) => ({
      title: formData.title,
      submitLabel: "Register",
      successTitle: "Registration Completed!",
      successMessage:
        "Your registration has been submitted successfully.",
      gridCols: 1,
      fields: formData.fields.map((field) => ({
        name: field.id.toString(),
        type: field.type,
        label: field.name,
        placeholder: field.placeholder,
        options: field.options?.length ? field.options : undefined,
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

    return submitMutation.mutateAsync({
      form: Number(formId),
      values: formattedValues,
    });
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1100px] mx-auto px-4 py-5 md:px-1 md:py-3"
    >
      <ScrollAnimation variant="fade-down">
        <h1 className="mb-5 font-semibold text-h2 text-tertiary">
          Registration
        </h1>
        <p className="text-sm font-semibold text-white">
          Fill in the form below to complete your registration.
        </p>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={100}>
        {formSchema ? (
          <DynamicFormBuilder
            schema={formSchema}
            onSubmit={handleSubmit}
          />
        ) : (
          <p className="mt-3 text-center text-gray-400">
            Registration form not found.
          </p>
        )}
      </ScrollAnimation>
    </motion.section>
  );
}