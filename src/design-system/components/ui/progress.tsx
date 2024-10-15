import * as ProgressPrimitive from "@radix-ui/react-progress";
import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "shared/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20",
      className,
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-yellow transition-all dark:bg-slate-50"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

Progress.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
};

export { Progress };
