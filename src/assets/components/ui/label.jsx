import React, { forwardRef } from 'react';
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../../../lib/utils";

const Label = forwardRef(({ className, style, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    style={style} // Apply dynamic style for color
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;