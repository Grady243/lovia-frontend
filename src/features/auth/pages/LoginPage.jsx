export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7fc] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-sm">
        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-center">Bon retour 👋</h1>

        <p className="text-sm text-muted-foreground text-center mt-2">
          Connecte-toi pour retrouver tes rencontres
        </p>

        {/* FORM */}
        <form className="mt-6 flex flex-col gap-4">
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
            Se connecter
          </button>
        </form>

        {/* LINKS */}
        <div className="mt-4 text-center text-sm">
          <p>
            Pas encore de compte ?{" "}
            <a href="/signup" className="text-accent">
              S’inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
