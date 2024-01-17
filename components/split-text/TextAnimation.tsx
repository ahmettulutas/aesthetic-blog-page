/* "use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
export default function TextAnimation() {
  const component = useRef<HTMLDivElement | null>(null); // a ref for the root-level element; we use selector text for everything else.

  useLayoutEffect(() => {
    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
    let ctx = gsap.context(() => {
      component.split = new SplitText("h1", {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.from(split.chars, {
        // <- selector text, scoped to this component!
        opacity: 0,
        y: 100,
        ease: "back",
        duration: 1,
        stagger: 0.1,
      });

      return () => split.revert(); // context cleanup
    }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div ref={component} className="TextAnimation">
      <h1>GSAP SplitText + React = 💚</h1>
    </div>
  );
}
 */
