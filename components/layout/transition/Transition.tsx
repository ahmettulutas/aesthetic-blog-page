"use client";
import { useContext } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap/dist/gsap";
import TransitionContext from "@/context/TransitionContext";
import { usePathname } from "next/navigation";

export const TransitionComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const { toggleCompleted } = useContext(TransitionContext);
  return (
    <SwitchTransition>
      <Transition
        key={path}
        timeout={500}
        onEnter={(node: any) => {
          toggleCompleted(false);
          gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: 100 });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.15 })
            .to(node, { scale: 1, duration: 0.15 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.9, duration: 0.15 })
            .to(node, { xPercent: 2, autoAlpha: 0, duration: 0.15 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};
