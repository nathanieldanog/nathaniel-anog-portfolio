"use client";

import {
  Braces,
  BriefcaseBusiness,
  Folder,
  GraduationCap,
  House,
  Mail,
  Menu,
  ScrollText,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { QuickActions } from "@/components/sidebar/QuickActions";
import { AppearanceControl } from "@/components/theme/AppearanceControl";
import { navigationItems, type NavigationLabel } from "@/data/navigation";
import { profile } from "@/data/profile";

const navigationIcons: Record<NavigationLabel, LucideIcon> = {
  Home: House,
  Projects: Folder,
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
  Certifications: ScrollText,
  Skills: Braces,
};

export function MobileHeader({ activeItem = "Home" }: { activeItem?: NavigationLabel }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [motionState, setMotionState] = useState<
    "closed" | "opening" | "open" | "closing"
  >("closed");

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }

      if (openFrameRef.current !== null) {
        window.cancelAnimationFrame(openFrameRef.current);
      }
    };
  }, []);

  function openMenu() {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsOpen(true);
      setMotionState("opening");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setMotionState("open");
        return;
      }

      openFrameRef.current = window.requestAnimationFrame(() => {
        openFrameRef.current = window.requestAnimationFrame(() => {
          setMotionState("open");
          openFrameRef.current = null;
        });
      });
    }
  }

  function closeMenu() {
    const dialog = dialogRef.current;

    if (!dialog?.open || motionState === "closing") {
      return;
    }

    setIsOpen(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }

    setMotionState("closing");
    closeTimerRef.current = window.setTimeout(() => {
      dialog.close();
      closeTimerRef.current = null;
    }, 260);
  }

  return (
    <header className="mobile-site-header sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6 lg:hidden">
      <Link
        href="/"
        className="min-w-0 font-display text-[18px] font-semibold leading-tight tracking-[-0.025em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <span className="block truncate">
          {profile.name}
        </span>
      </Link>

      <button
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={openMenu}
        className="mobile-menu-trigger inline-flex size-10 items-center justify-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Menu aria-hidden="true" className="mobile-menu-trigger-icon size-5" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        data-motion-state={motionState}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={() => {
          setIsOpen(false);
          setMotionState("closed");
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeMenu();
          }
        }}
        className="mobile-menu-dialog fixed inset-0 z-50 m-0 hidden h-dvh max-h-none w-full max-w-none bg-surface p-0 open:block"
      >
        <div className="mobile-menu-panel flex h-dvh min-h-dvh w-full flex-col overflow-hidden bg-surface">
          <div className="mobile-menu-header flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="min-w-0 font-display text-[18px] font-semibold leading-tight tracking-[-0.025em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <span className="block truncate">{profile.name}</span>
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded="true"
              onClick={closeMenu}
              className="mobile-menu-close mobile-menu-trigger relative inline-flex size-10 items-center justify-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <Menu
                aria-hidden="true"
                className="mobile-menu-morph-icon mobile-menu-morph-menu absolute size-5"
              />
              <X
                aria-hidden="true"
                className="mobile-menu-morph-icon mobile-menu-morph-close absolute size-5"
              />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[clamp(0.5rem,1.25dvh,1.25rem)] sm:px-6">
            <nav
              aria-label="Mobile navigation"
              className="mt-[clamp(0.375rem,1.2dvh,1rem)]"
            >
              <ul className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = navigationIcons[item.label];

                  return (
                    <li key={item.label} className="mobile-menu-nav-item">
                      <Link
                        href={item.href}
                        aria-current={activeItem === item.label ? "page" : undefined}
                        onClick={closeMenu}
                        className={`mobile-menu-link -mx-2 flex h-[clamp(2rem,6dvh,3rem)] items-center gap-4 rounded-[6px] px-2 text-[15px] text-foreground ${
                          activeItem === item.label
                            ? "bg-surface-hover font-semibold"
                            : "font-normal"
                        }`}
                      >
                        <Icon aria-hidden="true" className="size-5 shrink-0" strokeWidth={2} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-[clamp(0.5rem,1.25dvh,1.25rem)] border-t border-border pt-[clamp(0.5rem,1.25dvh,1.25rem)]">
              <QuickActions onAction={closeMenu} />
            </div>

            <section
              aria-labelledby="mobile-contact-heading"
              className="mt-[clamp(0.5rem,1.25dvh,1.25rem)] border-t border-border pt-[clamp(0.5rem,1.25dvh,1.25rem)]"
            >
              <h2
                id="mobile-contact-heading"
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
              >
                Contact
              </h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-foreground">
                For employment opportunities and inquiries, please reach out at
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mobile-menu-link mt-3 flex items-center gap-2 text-[13px] tracking-[-0.025em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Mail aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={2} />
                <span className="min-w-0 break-all">{profile.email}</span>
              </a>
            </section>
          </div>

          <div className="shrink-0 border-t border-border bg-surface px-5 pb-[clamp(0.5rem,1.25dvh,1.25rem)] pt-[clamp(0.5rem,1.25dvh,1.25rem)] sm:px-7">
            <AppearanceControl />
          </div>
        </div>
      </dialog>
    </header>
  );
}
