"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in";
type RevealElement =
  | "article"
  | "div"
  | "dl"
  | "header"
  | "li"
  | "ol"
  | "section"
  | "ul";

export type RevealProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  as?: RevealElement;
  children: ReactNode;
  delay?: number;
  stagger?: boolean;
  variant?: RevealVariant;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  stagger = false,
  style,
  variant = "fade-up",
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const setElementRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      element.dataset.revealState = "settled";
      return;
    }

    element.dataset.revealState = "pending";
    let settleTimer: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        element.dataset.revealState = "visible";
        settleTimer = window.setTimeout(
          () => {
            element.dataset.revealState = "settled";
          },
          delay + (stagger ? 1000 : 620),
        );
        observer.unobserve(element);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(settleTimer);
    };
  }, [delay, stagger]);

  const revealStyle = {
    ...style,
    "--reveal-delay": `${Math.max(0, delay)}ms`,
  } as CSSProperties;
  const revealProps = {
    ...props,
    className,
    style: revealStyle,
    "data-reveal": variant,
    "data-reveal-stagger": stagger ? "true" : undefined,
    "data-reveal-state": "static",
  };

  switch (as) {
    case "article":
      return <article ref={setElementRef} {...revealProps}>{children}</article>;
    case "dl":
      return <dl ref={setElementRef} {...revealProps}>{children}</dl>;
    case "header":
      return <header ref={setElementRef} {...revealProps}>{children}</header>;
    case "li":
      return <li ref={setElementRef} {...revealProps}>{children}</li>;
    case "ol":
      return <ol ref={setElementRef} {...revealProps}>{children}</ol>;
    case "section":
      return <section ref={setElementRef} {...revealProps}>{children}</section>;
    case "ul":
      return <ul ref={setElementRef} {...revealProps}>{children}</ul>;
    default:
      return <div ref={setElementRef} {...revealProps}>{children}</div>;
  }
}
