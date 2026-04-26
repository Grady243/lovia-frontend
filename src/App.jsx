import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className=" bg-background ">
      <header className="px-32 py-8 flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-semibold tracking-[0.22em] text-foreground">
            LOVIA
          </h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Comment ça marche →</Button>
          <Button variant="outline">Se connecter</Button>
          <Button variant="default">S'inscrire</Button>
        </div>
      </header>
    </div>
  );
}
