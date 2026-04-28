export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#f7f7fc] px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Comment fonctionne Lovia ?
        </h1>

        <p className="text-muted-foreground mt-4">
          Une nouvelle manière de faire des rencontres, basée sur l’intention et
          la compatibilité.
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-4xl mx-auto mt-16 grid gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg">1. Crée ton profil</h2>
          <p className="text-muted-foreground mt-2">
            Tu définis tes intentions, tes valeurs et ce que tu recherches
            vraiment.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg">
            2. Nous analysons la compatibilité
          </h2>
          <p className="text-muted-foreground mt-2">
            Lovia ne swipe pas. On sélectionne les profils les plus alignés avec
            toi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg">
            3. Tu rencontres les bonnes personnes
          </h2>
          <p className="text-muted-foreground mt-2">
            Moins de bruit, plus de vraies connexions.
          </p>
        </div>
      </div>
    </div>
  );
}
