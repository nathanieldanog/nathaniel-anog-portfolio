"use client";

import { FileText, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { AppearanceControl } from "@/components/theme/AppearanceControl";
import { navigationItems, type NavigationLabel } from "@/data/navigation";
import { profile } from "@/data/profile";

export function MobileHeader({ activeItem = "Home" }: { activeItem?: NavigationLabel }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsOpen(true);
    }
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6 lg:hidden">
      <Link href="/#home" className="flex min-w-0 flex-col">
        <span className="truncate font-display text-sm font-bold tracking-[-0.025em] text-foreground">
          {profile.name}
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
          {profile.title}
        </span>
      </Link>

      <button
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={openMenu}
        className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeMenu();
          }
        }}
        className="fixed inset-0 z-50 m-0 hidden h-svh w-full max-w-none bg-transparent p-0 backdrop:bg-black/25 open:block"
      >
        <div className="ml-auto flex h-full w-[min(86vw,320px)] flex-col border-l border-border bg-surface px-5 py-4 sm:px-6">
          <div className="flex h-11 items-center justify-between border-b border-border pb-3">
            <span className="font-display text-sm font-bold uppercase text-foreground">
              Navigation
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-surface-hover"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-4">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={activeItem === item.label ? "page" : undefined}
                    onClick={closeMenu}
                    className={`flex h-11 items-center rounded-md px-3 text-sm text-foreground ${
                      activeItem === item.label
                        ? "bg-surface-hover font-bold"
                        : "font-medium hover:bg-surface-hover"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="mt-auto border-t border-border pt-4" aria-label="Quick access">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              Quick Access
            </p>
            <div className="space-y-1">
              <a
                href={`mailto:${profile.email}`}
                className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-foreground hover:bg-surface-hover"
              >
                <Mail aria-hidden="true" className="size-[18px]" />
                Contact
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-foreground hover:bg-surface-hover"
              >
                <FileText aria-hidden="true" className="size-[18px]" />
                Resume
              </a>
              <div className="pt-1">
                <AppearanceControl compact />
              </div>
            </div>
          </section>
        </div>
      </dialog>
    </header>
  );
}
