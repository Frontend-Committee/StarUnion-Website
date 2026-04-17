import { useQuery, useMutation } from "@tanstack/react-query";
import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { listAllForms, getFormDetail, submitForm } from "@/lib/api/endpoints";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

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
    return <LoadingSpinner fullScreen={true} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=" max-w-[1100px] mx-auto px-4 py-5 md:px-1 md:py-3"
    >
      <ScrollAnimation variant="fade-down">
        <h1 className="mb-5 font-semibold text-h2 text-tertiary">Contact us</h1>
        <p className="text-sm font-semibold text-white">
          Contact us 24 hours a day and speak with specialized Members
        </p>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={100}>
        {contactSchema ? (
          <DynamicFormBuilder schema={contactSchema} onSubmit={handleSubmit} />
        ) : (
          <p className="mt-3 text-center text-gray-400">
            Contact form not found.
          </p>
        )}
      </ScrollAnimation>
    </motion.section>
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
