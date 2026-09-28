"use client";

import {
  ArrowDown,
  ArrowUp,
  CornerDownLeft,
  Search,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import {
  findSearchItems,
  pageSearchItems,
  searchItems,
  type SearchItem,
} from "@/data/search";

const LAST_OPENED_KEY = "portfolio-last-opened-search-items";
const LEGACY_RECENT_ITEMS_KEY = "portfolio-recent-searches";
const MAX_LAST_OPENED = 5;

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

function readStoredStrings(key: string, limit: number) {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string").slice(0, limit)
      : [];
  } catch {
    window.localStorage.removeItem(key);
    return [];
  }
}

function getResultId(item: SearchItem, section: "result" | "last" | "page") {
  return `command-result-${section}-${item.id}`;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastOpenedItems, setLastOpenedItems] = useState<SearchItem[]>([]);
  const [motionState, setMotionState] = useState<
    "closed" | "opening" | "open" | "closing"
  >("closed");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      let storedIds = readStoredStrings(LAST_OPENED_KEY, MAX_LAST_OPENED);

      if (storedIds.length === 0) {
        try {
          const legacyItems: unknown = JSON.parse(
            window.localStorage.getItem(LEGACY_RECENT_ITEMS_KEY) ?? "[]",
          );

          if (Array.isArray(legacyItems)) {
            storedIds = legacyItems
              .map((legacyItem) => {
                if (
                  typeof legacyItem !== "object" ||
                  legacyItem === null ||
                  !("href" in legacyItem) ||
                  typeof legacyItem.href !== "string"
                ) {
                  return null;
                }

                return searchItems.find((item) => item.href === legacyItem.href)?.id ?? null;
              })
              .filter((id): id is string => Boolean(id));
          }
        } catch {
          window.localStorage.removeItem(LEGACY_RECENT_ITEMS_KEY);
        }
      }

      setLastOpenedItems(
        storedIds
          .map((id) => searchItems.find((item) => item.id === id))
          .filter((item): item is SearchItem => Boolean(item))
          .slice(0, MAX_LAST_OPENED),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const filteredItems = useMemo(() => findSearchItems(query), [query]);
  const hasQuery = Boolean(query.trim());
  const primaryItems = hasQuery ? filteredItems : lastOpenedItems;
  const displayedItems = hasQuery
    ? filteredItems
    : [...lastOpenedItems, ...pageSearchItems];
  const activeItem = displayedItems[activeIndex];
  const activeSection = hasQuery
    ? "result"
    : activeIndex < lastOpenedItems.length
      ? "last"
      : "page";

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      setMotionState("opening");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        openFrameRef.current = window.requestAnimationFrame(() => {
          setMotionState("open");
          inputRef.current?.focus();
          openFrameRef.current = null;
        });
      } else {
        openFrameRef.current = window.requestAnimationFrame(() => {
          openFrameRef.current = window.requestAnimationFrame(() => {
            setMotionState("open");
            inputRef.current?.focus();
            openFrameRef.current = null;
          });
        });
      }
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      if (openFrameRef.current !== null) {
        window.cancelAnimationFrame(openFrameRef.current);
        openFrameRef.current = null;
      }
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  function closePalette() {
    const dialog = dialogRef.current;

    if (!dialog?.open || motionState === "closing") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }

    setMotionState("closing");
    closeTimerRef.current = window.setTimeout(() => {
      dialog.close();
      closeTimerRef.current = null;
    }, 240);
  }

  function handleDialogClose() {
    setQuery("");
    setActiveIndex(0);
    setMotionState("closed");
    onClose();

    const returnFocusElement = returnFocusRef.current;
    window.requestAnimationFrame(() => returnFocusElement?.focus());
  }

  function openItem(item: SearchItem) {
    const updatedItems = [
      item,
      ...lastOpenedItems.filter((lastOpenedItem) => lastOpenedItem.id !== item.id),
    ].slice(0, MAX_LAST_OPENED);

    setLastOpenedItems(updatedItems);
    window.localStorage.setItem(
      LAST_OPENED_KEY,
      JSON.stringify(updatedItems.map((lastOpenedItem) => lastOpenedItem.id)),
    );
    router.push(item.href);
    closePalette();
  }

  function clearLastOpened() {
    setLastOpenedItems([]);
    setActiveIndex(0);
    window.localStorage.removeItem(LAST_OPENED_KEY);
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
        displayedItems.length === 0 ? 0 : (currentIndex + 1) % displayedItems.length,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        displayedItems.length === 0
          ? 0
          : (currentIndex - 1 + displayedItems.length) % displayedItems.length,
      );
      return;
    }

    if (event.key === "Enter" && displayedItems[activeIndex]) {
      event.preventDefault();
      openItem(displayedItems[activeIndex]);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="command-palette-title"
      data-motion-state={motionState}
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
      className="command-palette-dialog fixed inset-0 z-[100] m-auto h-fit w-[min(calc(100%_-_2rem),620px)] max-w-none overflow-hidden rounded-lg border border-border bg-surface p-0 text-foreground shadow-2xl"
    >
      <h2 id="command-palette-title" className="sr-only">
        Search portfolio
      </h2>

      <div className="command-palette-header flex h-14 items-center gap-3 border-b border-border px-4">
        <Search aria-hidden="true" className="size-5 shrink-0 text-muted" strokeWidth={2} />
        <label htmlFor="command-palette-input" className="sr-only">
          Search portfolio
        </label>
        <input
          ref={inputRef}
          id="command-palette-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-controls={
            hasQuery
              ? "command-palette-results"
              : "command-palette-results command-palette-pages"
          }
          aria-expanded="true"
          aria-activedescendant={
            activeItem
              ? getResultId(activeItem, activeSection)
              : undefined
          }
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          placeholder="Search projects, skills, certificates..."
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
        {hasQuery ? (
          <>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveIndex(0);
                inputRef.current?.focus();
              }}
              className="shrink-0 px-1 text-[12px] font-semibold text-muted transition-colors hover:text-foreground"
            >
              Clear
            </button>
            <span aria-hidden="true" className="h-5 w-px shrink-0 bg-border" />
          </>
        ) : null}
        <button
          type="button"
          aria-label="Close search"
          onClick={closePalette}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="command-palette-results max-h-[min(460px,65vh)] overflow-y-auto p-2">
        <section aria-labelledby="search-results-heading">
          <div className="flex items-center justify-between px-3 pb-2 pt-1">
            <h3
              id="search-results-heading"
              className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted"
            >
              {hasQuery
                ? `${filteredItems.length} ${filteredItems.length === 1 ? "result" : "results"}`
                : "Last opened"}
            </h3>
            {!hasQuery && lastOpenedItems.length > 0 ? (
              <button
                type="button"
                onClick={clearLastOpened}
                className="text-[10px] font-semibold text-muted hover:text-foreground"
              >
                Clear
              </button>
            ) : null}
          </div>

          <div id="command-palette-results" role="listbox" aria-label="Search results">
            {primaryItems.length > 0 ? (
              primaryItems.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.id}
                    id={getResultId(item, hasQuery ? "result" : "last")}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => openItem(item)}
                    className={`command-palette-option flex min-h-12 w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm ${
                      isActive
                        ? "bg-surface-hover font-semibold text-foreground"
                        : "text-muted hover:bg-surface-hover hover:text-foreground"
                    }`}
                  >
                    <span className="min-w-0 truncate">{item.label}</span>
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
              <p className="px-3 py-7 text-center text-sm text-muted">
                {hasQuery
                  ? "No matches. Try a project, technology, certificate, or page name."
                  : "Items opened from search will appear here."}
              </p>
            )}
          </div>
        </section>

        {!hasQuery ? (
          <section
            aria-labelledby="pages-heading"
            className="mt-2 border-t border-border pt-2"
          >
            <h3
              id="pages-heading"
              className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted"
            >
              Pages
            </h3>
            <div id="command-palette-pages" role="listbox" aria-label="Portfolio pages">
              {pageSearchItems.map((item, index) => {
                const displayedIndex = lastOpenedItems.length + index;
                const isActive = displayedIndex === activeIndex;

                return (
                  <button
                    key={item.id}
                    id={getResultId(item, "page")}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(displayedIndex)}
                    onClick={() => openItem(item)}
                    className={`command-palette-option flex min-h-12 w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm ${
                      isActive
                        ? "bg-surface-hover font-semibold text-foreground"
                        : "text-muted hover:bg-surface-hover hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="ml-3 flex shrink-0 items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Page
                      </span>
                      {isActive ? (
                        <CornerDownLeft aria-hidden="true" className="size-4 text-muted" />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>

      <div className="command-palette-footer flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border px-4 py-3 text-[10px] text-muted">
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
