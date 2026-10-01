"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { ProjectDemoImage } from "@/data/projects";

const SWIPE_THRESHOLD = 48;

export function ProjectDemoGallery({
  images,
  projectTitle,
}: {
  images: readonly ProjectDemoImage[];
  projectTitle: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const titleId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  function openGallery() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open || images.length === 0) {
      return;
    }

    setActiveIndex(0);
    setIsOpen(true);
    dialog.showModal();
  }

  function closeGallery() {
    dialogRef.current?.close();
  }

  function showPreviousImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  function showNextImage() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const touchStartX = touchStartXRef.current;
    const touchEndX = event.changedTouches[0]?.clientX;
    touchStartXRef.current = null;

    if (touchStartX === null || touchEndX === undefined) {
      return;
    }

    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > SWIPE_THRESHOLD) {
      showNextImage();
    } else if (swipeDistance < -SWIPE_THRESHOLD) {
      showPreviousImage();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openGallery}
        className="project-action inline-flex items-center gap-2 border-b-2 border-foreground pb-1.5 text-[14px] font-bold uppercase tracking-[0.02em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        View demo
        <ArrowRight aria-hidden="true" className="project-action-arrow size-4" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          closeGallery();
        }}
        onClose={() => {
          setIsOpen(false);
          setActiveIndex(0);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPreviousImage();
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            showNextImage();
          }
        }}
        className="project-demo-dialog fixed inset-0 z-[120] m-auto hidden h-dvh max-h-none w-full max-w-none items-center justify-center bg-black/80 p-3 text-white backdrop:bg-black/80 open:flex sm:p-6"
      >
        <div className="flex h-[min(96dvh,1080px)] w-full max-w-[720px] flex-col overflow-hidden rounded-md border border-white/15 bg-[#0a0b0d] shadow-2xl">
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/15 px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <h2 id={titleId} className="truncate text-[16px] font-bold text-white">
                {projectTitle} demo
              </h2>
              <p aria-live="polite" className="mt-0.5 text-[13px] text-white/65">
                {activeImage?.title} · {activeIndex + 1} of {images.length}
              </p>
            </div>

            <button
              type="button"
              aria-label={`Close ${projectTitle} demo`}
              onClick={closeGallery}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </header>

          <div
            className="flex min-h-0 flex-1 touch-pan-y items-center justify-center overflow-hidden px-3 py-2 sm:px-5 sm:py-4"
            onTouchStart={(event) => {
              touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={handleTouchEnd}
          >
            {isOpen && activeImage ? (
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                width={941}
                height={1672}
                sizes="(max-width: 640px) calc(100vw - 3rem), 620px"
                className="h-full w-auto max-w-full object-contain"
              />
            ) : null}
          </div>

          <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-white/15 px-3 py-3 sm:px-5">
            <button
              type="button"
              aria-label="Show previous demo image"
              onClick={showPreviousImage}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>

            <div className="flex min-w-0 items-center justify-center gap-2" aria-label="Choose demo image">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show ${image.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`size-2.5 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none ${
                    index === activeIndex
                      ? "border-white bg-white"
                      : "border-white/50 bg-transparent hover:border-white"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Show next demo image"
              onClick={showNextImage}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </footer>
        </div>
      </dialog>
    </>
  );
}
