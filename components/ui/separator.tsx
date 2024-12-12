"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { animate?: boolean, animationDuration?: number }
>(
  (
    { className, orientation = "horizontal", decorative = true, animate = false, animationDuration = 1, ...props },
    ref
  ) => {
    const animationProps = animate
      ? {
          initial: { scaleX: orientation === "horizontal" ? 0 : 1, scaleY: orientation === "vertical" ? 0 : 1 },
          animate: { scaleX: 1, scaleY: 1 },
          transition: { duration: animationDuration },
        }
      : {};

    return (
      <SeparatorPrimitive.Root
        asChild
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      >
        <motion.div {...animationProps} />
      </SeparatorPrimitive.Root>
    )
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
