"use client";

import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import type { ReactNode } from "react";

type RouteTransitionProps = {
  children: ReactNode;
};

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <ViewTransition
      key={pathname}
      name="route-content"
      share="route-content"
      enter="route-content"
      exit="route-content"
      default="none"
    >
      <div className="route-transition-frame">{children}</div>
    </ViewTransition>
  );
}
