import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex">
      {/* LEFT SIDE */}
      <div className="relative w-1/2 h-full hidden lg:flex flex-col justify-between md:p-12 overflow-hidden bg-primary">
        {/* GLOW TOP LEFT */}
        <div className="pointer-events-none absolute -top-60 -left-60 h-[600px] w-[600px] rounded-full bg-accent opacity-30 blur-3xl" />

        {/* GLOW BOTTOM RIGHT */}
        <div className="pointer-events-none absolute -bottom-52 -right-32 h-[500px] w-[500px] rounded-full bg-accent opacity-20 blur-3xl" />

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Lovia" className="w-8 h-8 object-contain" />
          <h1 className="text-white text-sm font-semibold tracking-[0.2em]">
            LOVIA
          </h1>
        </Link>

        {/* TEXT BRANDING */}
        <div className="relative max-w-md">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            L’approche Lovia
          </p>

          <p className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
            "Nous croyons aux connexions{" "}
            <span className="text-accent">intentionnelles</span>."
          </p>

          <p className="mt-4 text-sm text-white/70">
            Trois mises en relation. De vraies conversations. Une plateforme
            conçue pour les personnes qui savent ce qu’elles recherchent.
          </p>
        </div>

        <div className="relative text-xs text-white/50">
          © Lovia · Relations authentiques
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm">
          {/* MOBILE LOGO */}
          <Link to="/" className="flex items-center gap-2 mb-6 lg:hidden">
            <img
              src="/logo.png"
              alt="Lovia"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-foreground text-sm font-semibold tracking-[0.2em]">
              LOVIA
            </h1>
          </Link>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold">Bienvenue sur Lovia </h2>

          <p className="text-sm text-muted-foreground mt-2">
            Rejoins Lovia dès maintenant.
          </p>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/app");
            }}
            className="mt-6 space-y-5"
          >
            {/* NOM */}
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" type="text" placeholder="Votre nom" required />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>

              <Input
                id="password"
                type="password"
                placeholder="Au moins 8 caractères"
                required
              />
            </div>

            {/* LEGAL TEXT */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              En poursuivant, vous acceptez nos conditions et le code de
              conduite Lovia : honnêteté, respect, intention.
            </p>

            {/* BUTTON */}
            <Button type="submit" className="h-11 w-full rounded-full">
              Continuer
            </Button>
          </form>
          {/* FOOTER */}
          <p className="mt-6 text-sm text-center text-muted-foreground">
            Déjà membre ?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
