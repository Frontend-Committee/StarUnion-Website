import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "p-2 rounded-md outline-none focus:ring-0 bg-[#452798] text-white"
 
)

const Input = React.forwardRef(
  ({ className, variant, size, type = "text", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"

    return (
      <Comp
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
