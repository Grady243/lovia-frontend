import {
  ArrowRight,
  Briefcase,
  Clock,
  Heart,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const pillars = [
  {
    letter: "A",
    icon: ShieldCheck,
    title: "Intention & transparence",
    desc: "On commence par l’essentiel : ton statut, tes intentions et un engagement à être honnête. Pas de faux jeux.",
  },
  {
    letter: "B",
    icon: Briefcase,
    title: "Stabilité & mode de vie",
    desc: "Ton activité, ton équilibre de vie et une courte présentation vocale. La voix révèle ce que les photos cachent.",
  },
  {
    letter: "C",
    icon: MapPin,
    title: "Localisation précise",
    desc: "Du pays jusqu’au quartier. La vraie proximité compte quand on cherche quelque chose de réel.",
  },
  {
    letter: "D",
    icon: Sparkles,
    title: "Préférences",
    desc: "Ce que tu recherches vraiment, tes attentes et ce qui est non négociable pour toi.",
  },
];

const steps = [
  {
    n: "01",
    t: "Inscription",
    d: "Crée ton compte et complète ton profil structuré. Environ 10 minutes.",
  },
  {
    n: "02",
    t: "Sélection intelligente",
    d: "Notre système analyse les 4 piliers pour te proposer des profils vraiment compatibles.",
  },
  {
    n: "03",
    t: "3 connexions max",
    d: "Tu peux avoir jusqu’à 3 matchs actifs. Moins de choix, mais de meilleure qualité.",
  },
  {
    n: "04",
    t: "48h pour agir",
    d: "Chaque match a une durée limitée. Une vraie discussion ou rien.",
  },
];

function Principle({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
          {" "}
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full bg-background pt-4">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Lovia"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-sm font-semibold tracking-[0.2em]">LOVIA</h1>
            </div>
          </Link>

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
            <Button variant="outline" asChild>
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/signup">S'inscrire →</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-6 pb-24 pt-12 lg:px-12 lg:pt-20">
        {/* HERO */}
        <section className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            La méthode
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] lg:text-6xl">
            Une nouvelle façon de rencontrer quelqu’un de vrai.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Lovia remplace le swipe inutile par une approche claire, structurée
            et intentionnelle. Moins de bruit, plus de connexions sincères.
          </p>
        </section>

        {/* PILLARS */}
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">
            Le modèle des 4 piliers
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.letter}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-mono font-bold text-accent">
                    {p.letter}
                  </div>
                  <div className="flex items-center gap-2">
                    <p.icon className="h-4 w-4 text-accent" />
                    <h3 className="font-semibold">{p.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STEPS */}
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">
            Du profil à la conversation
          </h2>
          <ol className="mt-6 space-y-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition"
              >
                <span className="text-mono text-2xl font-bold text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Principle
            icon={Users}
            title="Règle des 3"
            desc="Pas plus de trois connexions actives. Priorité à la qualité."
          />
          <Principle
            icon={Clock}
            title="Fenêtre de 48h"
            desc="Démarre la conversation, sinon le match disparaît."
          />
          <Principle
            icon={Heart}
            title="Relations sérieuses"
            desc="Pas de swipe inutile. Ici, on vient avec une vraie intention."
          />
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-border bg-card p-10 text-center shadow-elevated lg:p-14">
          <h2 className="font-display text-3xl font-semibold lg:text-4xl">
            Prêt à tenter l’expérience ?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            10 minutes d’honnêteté aujourd’hui. Une vraie rencontre demain.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-full px-7">
            <Link to="/signup">
              Commencer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
