export default function App() {
  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-foreground text-3xl font-bold">
          Lovia Design System
        </h1>
        <p className="text-muted-foreground">
          Test complet des variables CSS + Tailwind mapping
        </p>
      </div>

      {/* CARD SURFACE */}
      <div className="bg-surface border border-border p-5 rounded-lg space-y-3">
        <h2 className="text-foreground text-xl font-semibold">Surface Card</h2>

        <p className="text-muted-foreground">
          Ceci teste surface, border, foreground et muted.
        </p>

        {/* BADGES / STATUS */}
        <div className="flex gap-2 flex-wrap">
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
            Secondary
          </span>

          <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-sm">
            Accent
          </span>

          <span className="bg-muted text-foreground px-2 py-1 rounded-md text-sm">
            Muted
          </span>

          <span className="bg-success text-success-foreground px-2 py-1 rounded-md text-sm">
            Success
          </span>

          <span className="bg-warning text-warning-foreground px-2 py-1 rounded-md text-sm">
            Warning
          </span>

          <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm">
            Error
          </span>
        </div>

        {/* INPUT TEST */}
        <input
          className="w-full p-2 rounded-md border border-border bg-background text-foreground"
          placeholder="Input test..."
        />

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Primary
          </button>

          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
            Secondary
          </button>

          <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg">
            Accent
          </button>
        </div>
      </div>

      {/* FOOTER TEST */}
      <p className="text-muted-foreground text-sm">
        Footer muted text — should be light gray
      </p>
    </div>
  );
}
