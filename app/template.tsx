"use client";

import { TransitionProvider } from "@/context/TransitionContext";
import { TransitionComponent } from "@/components/layout/transition/Transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <TransitionComponent>{children}</TransitionComponent>
    </TransitionProvider>
  );
}
