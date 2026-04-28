export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7fc] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-sm">
        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-center">Rejoins Lovia 💜</h1>

        <p className="text-sm text-muted-foreground text-center mt-2">
          Crée ton compte et commence des rencontres avec intention
        </p>

        {/* FORM */}
        <form className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            placeholder="Adresse email"
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="border rounded-lg px-4 py-2"
          />

          <button className="bg-black text-white py-2 rounded-lg">
            Créer un compte
          </button>
        </form>

        {/* LINKS */}
        <div className="mt-4 text-center text-sm">
          <p>
            Déjà inscrit ?{" "}
            <a href="/login" className="text-accent">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
