import { HelpCircle, Sparkles, User } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="w-full bg-background pt-4">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Lovia"
              className="w-8 h-8 object-contain"
            />
            <h1 className="hidden sm:block text-sm font-semibold tracking-[0.2em]">
              LOVIA
            </h1>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 sm:hidden">
            <button className="p-2 rounded-lg hover:bg-muted transition">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden sm:flex gap-3">
            <Button variant="outline">Comment ça marche</Button>
            <Button variant="outline">Se connecter</Button>
            <Button variant="default">S'inscrire →</Button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* BADGE */}
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          <p>L’intention d’abord</p>
        </div>

        {/* TITLE */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl lg:w-[40%] font-semibold leading-tight">
          Des rencontres, faites avec{" "}
          <span className="text-accent">intention</span>.
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
          Lovia n’est pas une application de swipe. Une plateforme fondée sur la
          compatibilité, la stabilité et vos intentions. Trois rencontres
          sélectionnées. Des échanges authentiques.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button variant="default">S'inscrire →</Button>
          <Button variant="outline">Se connecter</Button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
        © Lovia. Serious matchmaking.
      </footer>
    </div>
  );
}
