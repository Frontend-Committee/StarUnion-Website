import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "flex items-center gap-2 text-[#452798] font-medium mb-1"
)

const Label = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "label"
  return (
    <Comp
      className={cn(labelVariants({ variant,className}))}
      ref={ref}
      {...props} />
  );
})
Label.displayName = "Label"

export { Label, labelVariants }
