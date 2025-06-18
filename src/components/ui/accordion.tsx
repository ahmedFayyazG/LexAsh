"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return <div className="border rounded-md">{children}</div>;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

export function AccordionTrigger({
  children,
  onClick,
  isOpen,
}: AccordionTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-left"
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 transition-transform", {
          "rotate-180": isOpen,
        })}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

export function AccordionContent({ children, isOpen }: AccordionContentProps) {
  return (
    <div
      className={cn(
        "px-4 pb-1 transition-all duration-500 ease-in-out overflow-hidden",
        isOpen ? "max-h-[800px] py-1" : "max-h-[0.5px] pt-2"
      )}
    >
      {children}
    </div>
  );
}
