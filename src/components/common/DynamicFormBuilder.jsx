import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Eye,
  EyeOff,
  Info,
  Loader2,
  Upload,
  X,
} from "lucide-react";
import { useCallback, useState } from "react";

// ─── Validation Engine ───────────────────────────────────────────────────────

function validateField(field, value) {
  const rules = field.validation || {};

  if (rules.required && !value && value !== 0 && value !== false) {
    return rules.requiredMessage || `${field.label} is required.`;
  }

  if (typeof value === "string") {
    if (rules.minLength && value.trim().length < rules.minLength)
      return `${field.label} must be at least ${rules.minLength} characters.`;
    if (rules.maxLength && value.trim().length > rules.maxLength)
      return `${field.label} must be at most ${rules.maxLength} characters.`;
    if (rules.pattern && !new RegExp(rules.pattern).test(value))
      return rules.patternMessage || `${field.label} format is invalid.`;
    if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    if (rules.phone && !/^\+?[\d\s\-().]{7,20}$/.test(value))
      return "Please enter a valid phone number.";
  }

  if (rules.min !== undefined && Number(value) < rules.min)
    return `${field.label} must be at least ${rules.min}.`;
  if (rules.max !== undefined && Number(value) > rules.max)
    return `${field.label} must be at most ${rules.max}.`;

  if (rules.custom) {
    const result = rules.custom(value);
    if (result !== true) return result;
  }

  return null;
}

function validateAll(schema, values) {
  const errors = {};
  schema.fields.forEach((field) => {
    if (field.type === "group") {
      field.fields.forEach((subField) => {
        const err = validateField(subField, values[subField.name]);
        if (err) errors[subField.name] = err;
      });
    } else if (field.type !== "divider" && field.type !== "heading") {
      const err = validateField(field, values[field.name]);
      if (err) errors[field.name] = err;
    }
  });
  return errors;
}

// ─── Icon Map ────────────────────────────────────────────────────────────────

const ICON_MAP = {
  user: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  phone: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92Z" />
    </svg>
  ),
  building: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  ),
  note: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  calendar: <Calendar className="w-4 h-4" />,
  clock: <Clock className="w-4 h-4" />,
  default: <Info className="w-4 h-4" />,
};

function FieldIcon({ icon }) {
  const el = ICON_MAP[icon] || ICON_MAP.default;
  return <span className="text-[#452798]/70">{el}</span>;
}

// ─── Individual Field Components ─────────────────────────────────────────────

function FieldWrapper({ field, error, children }) {
  return (
    <div className="flex flex-col">
      {field.label && (
        <label
          htmlFor={field.name}
          className="flex items-center gap-2 font-bold text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1"
        >
          {field.icon && <FieldIcon icon={field.icon} />}
          {field.label}
          {field.validation?.required && (
            <span className="text-[#FF6B6B] text-xs">*</span>
          )}
        </label>
      )}
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-rose-600 font-medium text-xs mt-1.5 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      {field.hint && !error && (
        <p className="text-[#452798]/70 text-xs mt-1.5 ml-1">{field.hint}</p>
      )}
    </div>
  );
}

const inputBase =
  "w-full bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50 text-sm";

const errorBorder =
  "ring-2 ring-rose-400/60 focus:ring-2 focus:ring-rose-500/70";

// Text / Email / Number / URL / Tel
function TextField({ field, value, onChange, onBlur, error }) {
  const [show, setShow] = useState(false);
  const isPassword = field.type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : field.type;

  return (
    <FieldWrapper field={field} error={error}>
      <div className="relative">
        <input
          id={field.name}
          name={field.name}
          type={inputType}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          onBlur={() => onBlur(field.name)}
          placeholder={field.placeholder}
          disabled={field.disabled}
          autoComplete={field.autoComplete}
          className={`${inputBase} ${error ? errorBorder : ""} ${isPassword ? "pr-12" : ""} ${field.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            {show ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </FieldWrapper>
  );
}

// Textarea
function TextareaField({ field, value, onChange, onBlur, error }) {
  return (
    <FieldWrapper field={field} error={error}>
      <textarea
        id={field.name}
        name={field.name}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        onBlur={() => onBlur(field.name)}
        placeholder={field.placeholder}
        disabled={field.disabled}
        rows={field.rows || 4}
        className={`${inputBase} resize-y min-h-[100px] ${error ? errorBorder : ""} ${field.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
    </FieldWrapper>
  );
}

// Select / Dropdown
function SelectField({ field, value, onChange, onBlur, error }) {
  const [open, setOpen] = useState(false);
  const selected = field.options?.find((o) =>
    typeof o === "string" ? o === value : o.value === value,
  );
  const displayLabel = selected
    ? typeof selected === "string"
      ? selected
      : selected.label
    : field.placeholder || "Choose an option";

  return (
    <FieldWrapper field={field} error={error}>
      <div className="relative">
        <button
          id={field.name}
          type="button"
          onClick={() => setOpen((s) => !s)}
          onBlur={() => {
            setTimeout(() => {
              setOpen(false);
              onBlur(field.name);
            }, 150);
          }}
          disabled={field.disabled}
          className={`${inputBase} flex items-center justify-between text-left ${
            !value ? "text-white/40" : "text-white"
          } ${error ? errorBorder : ""} ${field.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <span className="truncate">{displayLabel}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-white/70 flex-shrink-0 ml-2"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
              transition={{ duration: 0.15 }}
              style={{ transformOrigin: "top" }}
              className="absolute z-50 mt-1 w-full rounded-xl border border-white/70 bg-white shadow-2xl overflow-hidden max-h-52 overflow-y-auto scrollbar-hide"
            >
              {field.options?.map((option, idx) => {
                const optVal =
                  typeof option === "string" ? option : option.value;
                const optLabel =
                  typeof option === "string" ? option : option.label;
                const isSelected = value === optVal;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onChange(field.name, optVal);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                      isSelected
                        ? "bg-[#452798]/10 text-[#452798] font-semibold"
                        : "text-[#452798]/80 hover:bg-[#452798]/10 hover:text-[#452798]"
                    }`}
                  >
                    {optLabel}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FieldWrapper>
  );
}

// Radio Group
function RadioField({ field, value, onChange, onBlur, error }) {
  return (
    <FieldWrapper field={field} error={error}>
      <div
        className={`flex ${field.layout === "row" ? "flex-row flex-wrap gap-4" : "flex-col gap-2"}`}
      >
        {field.options?.map((option, idx) => {
          const optVal = typeof option === "string" ? option : option.value;
          const optLabel = typeof option === "string" ? option : option.label;
          const isSelected = value === optVal;
          return (
            <label
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-[#452798]/50 bg-[#452798]/10"
                  : "border-[#452798]/20 bg-white hover:border-[#452798]/40 hover:bg-[#452798]/5"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  isSelected ? "border-[#452798]" : "border-[#452798]/40"
                }`}
              >
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#452798]" />
                )}
              </span>
              <input
                type="radio"
                id={`${field.name}-${idx}`}
                name={field.name}
                value={optVal}
                checked={isSelected}
                onChange={() => onChange(field.name, optVal)}
                onBlur={() => onBlur(field.name)}
                className="sr-only"
              />
              <span
                className={`text-sm font-medium ${isSelected ? "text-[#452798]" : "text-[#452798]/70"}`}
              >
                {optLabel}
              </span>
            </label>
          );
        })}
      </div>
    </FieldWrapper>
  );
}

// Checkbox (single boolean)
function CheckboxField({ field, value, onChange, onBlur, error }) {
  return (
    <FieldWrapper field={field} error={error}>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div
          onClick={() => {
            onChange(field.name, !value);
            onBlur(field.name);
          }}
          className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-200 ${
            value
              ? "bg-[#452798] border-[#452798] shadow-[0_0_12px_rgba(69,39,152,0.35)]"
              : "border-[#452798]/40 bg-white group-hover:border-[#452798]/60"
          }`}
        >
          {value && (
            <motion.svg
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              viewBox="0 0 12 10"
              fill="none"
              className="w-3 h-2.5"
            >
              <path
                d="M1 5l3.5 3.5L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </div>
        <input
          type="checkbox"
          id={field.name}
          name={field.name}
          checked={!!value}
          onChange={(e) => {
            onChange(field.name, e.target.checked);
            onBlur(field.name);
          }}
          className="sr-only"
        />
        <span
          className={`text-sm leading-relaxed ${value ? "text-[#452798]" : "text-[#452798]/70"}`}
          dangerouslySetInnerHTML={{
            __html: field.checkboxLabel || field.label,
          }}
        />
      </label>
    </FieldWrapper>
  );
}

// Multi-Checkbox (array of values)
function MultiCheckboxField({ field, value = [], onChange, onBlur, error }) {
  const toggle = (optVal) => {
    const current = Array.isArray(value) ? value : [];
    const updated = current.includes(optVal)
      ? current.filter((v) => v !== optVal)
      : [...current, optVal];
    onChange(field.name, updated);
    onBlur(field.name);
  };

  return (
    <FieldWrapper field={field} error={error}>
      <div
        className={`flex ${field.layout === "row" ? "flex-row flex-wrap gap-3" : "flex-col gap-2"}`}
      >
        {field.options?.map((option, idx) => {
          const optVal = typeof option === "string" ? option : option.value;
          const optLabel = typeof option === "string" ? option : option.label;
          const isChecked = Array.isArray(value) && value.includes(optVal);
          return (
            <label
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                isChecked
                  ? "border-[#452798]/50 bg-[#452798]/10"
                  : "border-[#452798]/20 bg-white hover:border-[#452798]/40"
              }`}
            >
              <div
                onClick={() => toggle(optVal)}
                className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  isChecked
                    ? "bg-[#452798] border-[#452798]"
                    : "border-[#452798]/40"
                }`}
              >
                {isChecked && (
                  <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2">
                    <path
                      d="M1 4l2.5 2.5L9 1"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggle(optVal)}
                className="sr-only"
              />
              <span
                className={`text-sm font-medium ${isChecked ? "text-[#452798]" : "text-[#452798]/70"}`}
              >
                {optLabel}
              </span>
            </label>
          );
        })}
      </div>
    </FieldWrapper>
  );
}

// Date / Time / DateTime
function DateTimeField({ field, value, onChange, onBlur, error }) {
  return (
    <FieldWrapper field={field} error={error}>
      <div className="relative">
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          onBlur={() => onBlur(field.name)}
          min={field.min}
          max={field.max}
          disabled={field.disabled}
          placeholder={field.placeholder}
          className={`${inputBase} [color-scheme:dark] ${error ? errorBorder : ""} ${field.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>
    </FieldWrapper>
  );
}

// Range / Slider
function RangeField({ field, value, onChange, onBlur, error }) {
  const min = field.min ?? 0;
  const max = field.max ?? 100;
  const step = field.step ?? 1;
  const current = value ?? min;
  const pct = ((current - min) / (max - min)) * 100;

  return (
    <FieldWrapper field={field} error={error}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs text-[#452798]/70">
          <span>
            {min}
            {field.unit}
          </span>
          <span className="text-[#452798] font-bold text-sm">
            {current}
            {field.unit}
          </span>
          <span>
            {max}
            {field.unit}
          </span>
        </div>
        <div className="relative h-2 rounded-full bg-[#452798]/20">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#452798] to-[#683CE3] transition-all"
            style={{ width: `${pct}%` }}
          />
          <input
            id={field.name}
            type="range"
            min={min}
            max={max}
            step={step}
            value={current}
            onChange={(e) => onChange(field.name, Number(e.target.value))}
            onBlur={() => onBlur(field.name)}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          />
        </div>
      </div>
    </FieldWrapper>
  );
}

// File Upload
function FileField({ field, value, onChange, onBlur, error }) {
  const [fileName, setFileName] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    onChange(field.name, file);
  };

  return (
    <FieldWrapper field={field} error={error}>
      <label
        htmlFor={`${field.name}-file`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFile(e.dataTransfer.files[0]);
        }}
        className={`flex flex-col items-center gap-2 px-4 py-6 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
          dragging
            ? "border-[#452798]/60 bg-[#452798]/10"
            : error
              ? "border-[#FF6B6B]/50 bg-[#FF6B6B]/5"
              : "border-[#452798]/35 bg-white hover:border-[#452798]/50 hover:bg-[#452798]/5"
        }`}
      >
        <Upload className="w-6 h-6 text-[#452798]/70" />
        {fileName ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#452798] font-medium truncate max-w-[200px]">
              {fileName}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setFileName(null);
                onChange(field.name, null);
              }}
              className="text-[#FF6B6B] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <>
            <span className="text-sm text-[#452798]/70 text-center">
              Drag & drop or{" "}
              <span className="text-[#452798] font-medium">
                click to upload
              </span>
            </span>
            {field.accept && (
              <span className="text-xs text-[#452798]/50">{field.accept}</span>
            )}
          </>
        )}
      </label>
      <input
        id={`${field.name}-file`}
        type="file"
        accept={field.accept}
        multiple={field.multiple}
        onChange={(e) => handleFile(e.target.files[0])}
        onBlur={() => onBlur(field.name)}
        className="sr-only"
      />
    </FieldWrapper>
  );
}

// Rating (Star)
function RatingField({ field, value, onChange, onBlur, error }) {
  const [hovered, setHovered] = useState(0);
  const max = field.max || 5;

  return (
    <FieldWrapper field={field} error={error}>
      <div className="flex gap-1">
        {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => {
              onChange(field.name, star);
              onBlur(field.name);
            }}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="transition-transform hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill={star <= (hovered || value || 0) ? "#EFD830" : "none"}
              stroke={star <= (hovered || value || 0) ? "#EFD830" : "#6B4FD0"}
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        ))}
      </div>
    </FieldWrapper>
  );
}

// Toggle / Switch
function ToggleField({ field, value, onChange, onBlur, error }) {
  return (
    <FieldWrapper field={field} error={error}>
      <button
        type="button"
        role="switch"
        aria-checked={!!value}
        onClick={() => {
          onChange(field.name, !value);
          onBlur(field.name);
        }}
        className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
          value ? "bg-[#452798]" : "bg-[#452798]/20 border border-[#452798]/30"
        }`}
      >
        <motion.span
          layout
          className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"
          animate={{ x: value ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </button>
    </FieldWrapper>
  );
}

// Heading / Divider (non-input elements)
function HeadingBlock({ field }) {
  return (
    <div className={`col-span-full ${field.className || ""}`}>
      <h3 className="text-[#452798] font-bold text-lg">{field.label}</h3>
      {field.description && (
        <p className="text-[#452798]/70 text-sm mt-1">{field.description}</p>
      )}
    </div>
  );
}

function DividerBlock() {
  return (
    <div className="col-span-full">
      <div className="h-px bg-gradient-to-r from-transparent via-[#452798]/35 to-transparent" />
    </div>
  );
}

// ─── Field Router ─────────────────────────────────────────────────────────────

function renderField({ field, values, errors, touched, onChange, onBlur }) {
  if (field.type === "group") {
    return (
      <div
        key={field.id || field.name}
        className={`col-span-full grid gap-4 ${field.gridCols === 2 ? "md:grid-cols-2" : field.gridCols === 3 ? "md:grid-cols-3" : "grid-cols-1"}`}
      >
        {field.fields.map((sub) =>
          renderField({
            field: sub,
            values,
            errors,
            touched,
            onChange,
            onBlur,
          }),
        )}
      </div>
    );
  }

  const commonProps = {
    field,
    value: values[field.name],
    error: touched[field.name] ? errors[field.name] : null,
    onChange,
    onBlur,
  };

  const colSpan = field.fullWidth
    ? "col-span-full"
    : field.colSpan
      ? `md:col-span-${field.colSpan}`
      : "";

  let el;
  switch (field.type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "url":
    case "tel":
    case "search":
      el = <TextField {...commonProps} />;
      break;
    case "textarea":
      el = <TextareaField {...commonProps} />;
      break;
    case "select":
      el = <SelectField {...commonProps} />;
      break;
    case "radio":
      el = <RadioField {...commonProps} />;
      break;
    case "checkbox":
      el = <CheckboxField {...commonProps} />;
      break;
    case "multi-checkbox":
      el = <MultiCheckboxField {...commonProps} />;
      break;
    case "date":
    case "time":
    case "datetime-local":
    case "month":
    case "week":
      el = <DateTimeField {...commonProps} />;
      break;
    case "range":
      el = <RangeField {...commonProps} />;
      break;
    case "file":
      el = <FileField {...commonProps} />;
      break;
    case "rating":
      el = <RatingField {...commonProps} />;
      break;
    case "toggle":
      el = <ToggleField {...commonProps} />;
      break;
    case "heading":
      return <HeadingBlock key={field.id || field.label} field={field} />;
    case "divider":
      return <DividerBlock key={field.id || Math.random()} />;
    default:
      el = <TextField {...commonProps} />;
  }

  return (
    <div key={field.id || field.name} className={colSpan}>
      {el}
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({ schema }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-6 py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-[#452798]/10 border border-[#452798]/25 flex items-center justify-center shadow-[0_0_30px_rgba(69,39,152,0.18)]"
      >
        <CheckCircle className="w-10 h-10 text-[#452798]" />
      </motion.div>
      <div>
        <h3 className="text-2xl font-bold text-[#452798] mb-2">
          {schema.successTitle || "Submitted Successfully!"}
        </h3>
        <p className="text-[#452798]/70 text-sm max-w-sm">
          {schema.successMessage ||
            "Your form has been submitted. We'll get back to you soon."}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main DynamicFormBuilder ──────────────────────────────────────────────────

/**
 * DynamicFormBuilder
 *
 * @param {Object} schema - The form schema from backend
 * @param {Function} onSubmit - async (values) => { ... } — receives form data. Should throw on error.
 * @param {Function} [onCancel] - optional cancel handler
 * @param {string} [className] - wrapper class name
 *
 * Schema shape:
 * {
 *   title: string,
 *   description: string,
 *   submitLabel: string,
 *   cancelLabel: string,
 *   successTitle: string,
 *   successMessage: string,
 *   gridCols: 1 | 2 | 3,          // top-level grid columns
 *   fields: Field[]
 * }
 *
 * Field types: text, email, password, number, url, tel, search,
 *              textarea, select, radio, checkbox, multi-checkbox,
 *              date, time, datetime-local, month, week,
 *              range, file, rating, toggle, heading, divider, group
 */
export default function DynamicFormBuilder({
  schema,
  onSubmit,
  onCancel,
  className = "",
}) {
  const [values, setValues] = useState(() => {
    const defaults = {};
    const collect = (fields) =>
      fields?.forEach((f) => {
        if (f.type === "group") collect(f.fields);
        else if (f.type !== "divider" && f.type !== "heading" && f.name) {
          defaults[f.name] =
            f.defaultValue !== undefined
              ? f.defaultValue
              : f.type === "checkbox" || f.type === "toggle"
                ? false
                : f.type === "multi-checkbox"
                  ? []
                  : "";
        }
      });
    collect(schema?.fields);
    return defaults;
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onChange = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const onBlur = useCallback(
    (name) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      // Validate single field on blur
      const allFields = [];
      const collect = (fields) =>
        fields?.forEach((f) => {
          if (f.type === "group") collect(f.fields);
          else allFields.push(f);
        });
      collect(schema?.fields);
      const field = allFields.find((f) => f.name === name);
      if (field) {
        const err = validateField(field, values[name]);
        setErrors((prev) => {
          if (err) return { ...prev, [name]: err };
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
    [schema, values],
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const allErrors = validateAll(schema, values);

    // Touch all fields
    const allTouched = {};
    const collect = (fields) =>
      fields?.forEach((f) => {
        if (f.type === "group") collect(f.fields);
        else if (f.name) allTouched[f.name] = true;
      });
    collect(schema?.fields);
    setTouched(allTouched);
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setIsSuccess(true);
    } catch (err) {
      setSubmitError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cols = schema?.gridCols || 2;
  const gridClass =
    cols === 3
      ? "md:grid-cols-3"
      : cols === 2
        ? "md:grid-cols-2"
        : "grid-cols-1";

  return (
    <div
      className={`w-full bg-white/60 backdrop-blur-xs border border-white/50 rounded-3xl shadow-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      {(schema?.title || schema?.description) && (
        <div className="px-6 md:px-10 pt-6 md:pt-10 pb-4 md:pb-6 border-b border-[#452798]/15">
          {schema.title && (
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#452798] mb-2 text-center tracking-tight">
              {schema.title}
            </h2>
          )}
          {schema.description && (
            <p className="text-[#452798]/70 text-center text-sm md:text-base font-medium">
              {schema.description}
            </p>
          )}
        </div>
      )}

      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <SuccessScreen key="success" schema={schema} />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={`grid gap-x-5 gap-y-6 grid-cols-1 ${gridClass}`}>
                {schema?.fields?.map((field) =>
                  renderField({
                    field,
                    values,
                    errors,
                    touched,
                    onChange,
                    onBlur,
                  }),
                )}
              </div>

              {/* Submit error */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200"
                  >
                    <AlertCircle className="w-4 h-4 text-[#FF6B6B] flex-shrink-0" />
                    <span className="text-rose-600 text-sm font-medium">
                      {submitError}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div
                className={`mt-8 flex gap-3 ${onCancel ? "justify-between" : "justify-end"}`}
              >
                {onCancel && (
                  <button
                    type="button"
                    onClick={onCancel}
                    disabled={isSubmitting}
                    className="px-6 h-12 rounded-xl border border-[#452798]/30 text-[#452798]/80 text-sm font-semibold hover:bg-[#452798]/10 hover:text-[#452798] transition-all disabled:opacity-40"
                  >
                    {schema?.cancelLabel || "Cancel"}
                  </button>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 md:flex-none px-8 h-12 rounded-xl bg-[#452798] hover:bg-[#683CE3] text-white text-lg font-bold transition-all duration-200 shadow-lg shadow-[#452798]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    schema?.submitLabel || "Submit"
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
