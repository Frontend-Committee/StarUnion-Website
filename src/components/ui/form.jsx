import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"


const formVariants = cva(
    "w-[400px] mx-auto py-6 px-1"
  
)

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

export { Form, formVariants }
