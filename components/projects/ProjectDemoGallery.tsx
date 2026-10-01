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
        className="project-demo-dialog fixed inset-0 z-[120] m-0 hidden h-dvh max-h-none w-full max-w-none bg-black p-0 text-white backdrop:bg-black open:block"
      >
        <div className="relative h-dvh w-full overflow-hidden bg-black">
          <h2 id={titleId} className="sr-only">
            {projectTitle} demo
          </h2>

          <div
            className="flex h-full w-full touch-pan-y items-center justify-center overflow-hidden"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeGallery();
              }
            }}
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
                sizes="100vw"
                onClick={(event) => event.stopPropagation()}
                className="h-auto max-h-dvh w-auto max-w-full object-contain"
              />
            ) : null}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 bg-gradient-to-b from-black/75 via-black/25 to-transparent p-3 pb-12 sm:p-4 sm:pb-14">
            <p
              aria-live="polite"
              className="rounded-full bg-black/55 px-3 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm"
            >
              {activeImage?.title} · {activeIndex + 1} of {images.length}
            </p>
            <button
              type="button"
              aria-label={`Close ${projectTitle} demo`}
              onClick={closeGallery}
              className="pointer-events-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition-colors hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <button
            type="button"
            aria-label="Show previous demo image"
            onClick={showPreviousImage}
            className="absolute left-2 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:left-4 sm:size-11"
          >
            <ArrowLeft aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Show next demo image"
            onClick={showNextImage}
            className="absolute right-2 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:right-4 sm:size-11"
          >
            <ArrowRight aria-hidden="true" className="size-5" />
          </button>

          <div
            role="group"
            aria-label="Choose demo image"
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black/60 px-3 py-2.5 backdrop-blur-sm sm:bottom-4"
          >
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
                    : "border-white/55 bg-transparent hover:border-white"
                }`}
              />
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
