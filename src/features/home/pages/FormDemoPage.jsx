import DynamicFormBuilder from "@/components/common/DynamicFormBuilder";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { listAllForms, getFormDetail, submitForm } from "@/lib/api/endpoints";

export default function FormDemoPage() {
  const [activeFormId, setActiveFormId] = useState(null);

  const { data: formsData, isLoading: isLoadingForms } = useQuery({
    queryKey: ["formsList"],
    queryFn: () => listAllForms(),
  });

  useEffect(() => {
    if (formsData?.results?.length > 0 && !activeFormId) {
      setActiveFormId(formsData.results[0].id);
    }
  }, [formsData, activeFormId]);

  const { data: currentSchema, isFetching: isFetchingSchema } = useQuery({
    queryKey: ["formDetail", activeFormId],
    queryFn: () => getFormDetail(activeFormId),
    enabled: !!activeFormId,
    select: (formData) => ({
      title: formData.title,
      description: "Please fill out the form below.",
      submitLabel: "Submit Form",
      gridCols: 1,
      fields: formData.fields.map((field) => {
        const cleanRegexString = field.regex
          ? field.regex.replace(/\\\\/g, "\\").replace(/\\+/g, "\\")
          : null;

        return {
          name: field.id.toString(),
          type: field.type,
          label: field.name,
          placeholder: field.placeholder,
          options: field.options?.length > 0 ? field.options : undefined,
          fullWidth: field.type === "textarea",
          validation: {
            required: field.is_required ? "This field is required" : false,
            pattern: (() => {
              if (!cleanRegexString) return undefined;
              try {
                return {
                  value: new RegExp(cleanRegexString, "u"),
                  message: `Invalid ${field.name} format`,
                };
              } catch (e) {
                console.error(
                  `Invalid Regex for ${field.name}:`,
                  cleanRegexString,
                );
                return undefined;
              }
            })(),
          },
        };
      }),
    }),
  });

  const submitMutation = useMutation({
    mutationFn: submitForm,
  });

  const handleSubmit = async (values) => {
    const formattedValues = Object.entries(values)
      .filter(([_, value]) => value !== undefined && value !== "")
      .map(([key, value]) => ({
        field_id: parseInt(key, 10),
        value: String(value),
      }));

    const payload = {
      form: activeFormId,
      values: formattedValues,
    };

    return await submitMutation.mutateAsync(payload);
  };
  if (isLoadingForms) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen px-4 py-12 mt-2 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-center text-white">
          Dynamic Form Builder
        </h1>
        <p className="mb-8 text-sm text-center text-white/50">
          Schema-driven forms powered by React Query
        </p>

        {!formsData?.results || formsData.results.length === 0 ? (
          <div className="flex flex-wrap justify-center gap-2 mb-8 font-bold text-white">
            NO AVAILABLE FORMS YET
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {formsData.results.map((form) => (
                <button
                  key={form.id}
                  onClick={() => setActiveFormId(form.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeFormId === form.id
                      ? "bg-[#7441FF] text-white shadow-[0_4px_16px_rgba(116,65,255,0.4)]"
                      : "bg-[#241352] text-white/60 hover:bg-[#452798]/40 hover:text-white border border-[#6B4FD0]/30"
                  }`}
                >
                  {form.title}
                </button>
              ))}
            </div>

            <div className="min-h-[400px] relative">
              {isFetchingSchema && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradientBg3/50 backdrop-blur-sm rounded-3xl">
                  <LoadingSpinner />
                </div>
              )}

              {currentSchema && (
                <DynamicFormBuilder
                  key={activeFormId}
                  schema={currentSchema}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
