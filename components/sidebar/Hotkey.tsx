type HotkeyProps = {
  shortcutKey: "K" | "R";
};

const keycapStyles =
  "inline-flex h-6 items-center justify-center rounded-[5px] border border-border bg-background font-sans font-medium leading-none text-foreground shadow-[0_1px_0_rgba(17,19,24,0.1)]";

export function Hotkey({ shortcutKey }: HotkeyProps) {
  return (
    <span aria-hidden="true" className="flex items-center gap-1.5 text-[10px] text-muted">
      <kbd className={`${keycapStyles} min-w-8 px-1.5`}>Alt</kbd>
      <span className="font-medium text-muted">+</span>
      <kbd className={`${keycapStyles} size-6`}>{shortcutKey}</kbd>
    </span>
  );
}
