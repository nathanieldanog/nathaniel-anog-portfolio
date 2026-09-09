"use client";

import { ArrowDown, ArrowUp, CornerDownLeft, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { navigationItems } from "@/data/navigation";
import { projects } from "@/data/projects";

const searchItems = [
  ...navigationItems.map((item) => ({ ...item, category: "Page" })),
  ...projects.map((project) => ({
    label: project.title,
    href: `/projects#${project.slug}`,
    category: "Project",
  })),
];

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!normalizedQuery) {
      return searchItems;
    }

    return searchItems.filter((item) =>
      item.label.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function closePalette() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setQuery("");
    setActiveIndex(0);
    onClose();

    const returnFocusElement = returnFocusRef.current;
    window.requestAnimationFrame(() => returnFocusElement?.focus());
  }

  function openItem(href: string) {
    window.location.assign(href);
    closePalette();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        filteredItems.length === 0 ? 0 : (currentIndex + 1) % filteredItems.length,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        filteredItems.length === 0
          ? 0
          : (currentIndex - 1 + filteredItems.length) % filteredItems.length,
      );
      return;
    }

    if (event.key === "Enter" && filteredItems[activeIndex]) {
      event.preventDefault();
      openItem(filteredItems[activeIndex].href);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="command-palette-title"
      onCancel={(event) => {
        event.preventDefault();
        closePalette();
      }}
      onClose={handleDialogClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePalette();
        }
      }}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[100] m-auto h-fit w-[min(calc(100%_-_2rem),560px)] max-w-none overflow-hidden rounded-lg border border-border bg-surface p-0 text-foreground backdrop:bg-black/35"
    >
      <h2 id="command-palette-title" className="sr-only">
        Search portfolio
      </h2>

      <div className="flex h-14 items-center gap-3 border-b border-border px-4">
        <Search aria-hidden="true" className="size-5 shrink-0 text-muted" strokeWidth={2} />
        <label htmlFor="command-palette-input" className="sr-only">
          Search pages
        </label>
        <input
          ref={inputRef}
          id="command-palette-input"
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="command-palette-results"
          aria-expanded="true"
          aria-activedescendant={
            filteredItems[activeIndex]
              ? `command-result-${filteredItems[activeIndex].label
                  .toLocaleLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`
              : undefined
          }
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          placeholder="Search pages..."
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
        <button
          type="button"
          aria-label="Close search"
          onClick={closePalette}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded text-muted hover:bg-surface-hover hover:text-foreground"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="max-h-[min(360px,50vh)] overflow-y-auto p-2">
        <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
          Pages and Projects
        </p>
        <div id="command-palette-results" role="listbox" aria-label="Search results">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.label}
                  id={`command-result-${item.label
                    .toLocaleLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => openItem(item.href)}
                  className={`flex h-11 w-full items-center justify-between rounded-md px-3 text-left text-sm ${
                    isActive
                      ? "bg-surface-hover font-semibold text-foreground"
                      : "text-muted hover:bg-surface-hover hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="ml-3 flex shrink-0 items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {item.category}
                    </span>
                    {isActive ? (
                      <CornerDownLeft aria-hidden="true" className="size-4 text-muted" />
                    ) : null}
                  </span>
                </button>
              );
            })
          ) : (
            <p className="px-3 py-8 text-center text-sm text-muted">No results found.</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border px-4 py-3 text-[10px] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <ArrowUp aria-hidden="true" className="size-3.5" />
          <ArrowDown aria-hidden="true" className="size-3.5" />
          Navigate
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CornerDownLeft aria-hidden="true" className="size-3.5" />
          Open
        </span>
        <span>Esc Close</span>
      </div>
    </dialog>
  );
}
