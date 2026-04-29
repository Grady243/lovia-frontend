import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // BASE
        "h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-4 py-1 text-base transition-colors outline-none",
        "placeholder:text-muted-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",

        // 🔥 FOCUS LOVIA
        "focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/50",

        // STATES
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",

        // DARK MODE
        "dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
