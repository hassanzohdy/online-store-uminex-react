import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "design-system/lib/utils";
import PropTypes from "prop-types";
import React from "react";

const Accordion = AccordionPrimitive.Root;
Accordion.propTypes = {
  className: PropTypes.string,
};
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-slate-300 border-b ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

AccordionItem.propTypes = {
  className: PropTypes.string,
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { icon: React.ElementType }
>(({ className, children, icon: Icon, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
        {children}
      {Icon && <Icon className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400" />}
      </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

AccordionTrigger.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType as any,
};


const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
AccordionContent.propTypes = {
  className: PropTypes.string,
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
