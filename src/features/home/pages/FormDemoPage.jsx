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
      fields: formData.fields.map((field) => ({
        name: field.id.toString(),
        type: field.type,
        label: field.name.charAt(0).toUpperCase() + field.name.slice(1),
        placeholder: field.placeholder,
        options: field.options?.length ? field.options : undefined,
        fullWidth: field.type === "textarea",
        validation: {
          required: field.is_required,
          pattern: field.regex ? new RegExp(field.regex) : undefined,
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
      value: value?.toString() || "",
    }));

    await submitMutation.mutateAsync({
      form: activeFormId,
      values: formattedValues,
    });
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
