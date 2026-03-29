import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={show ? "text" : "password"}
        className={cn("w-full pr-12", className)}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors focus:outline-none"
        tabIndex={-1}
        aria-label={show ? "Hide password" : "Show password"}
      >
        <i className={`fa-regular ${show ? "fa-eye" : "fa-eye-slash"} text-base`}></i>
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

