import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { formVariants } from "./form-variants"

const Form = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "form"
  return (
    <Comp
      className={cn(formVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Form.displayName = "Form"

export { Form }
