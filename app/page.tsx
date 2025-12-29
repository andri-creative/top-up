import Bener from "@/components/Bener";
import CardHome from "@/components/CardHome";
import Navbar from "@/components/Navbar";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-8">
        <Bener />
        <CardHome />

      </main>
    </div>
  );
}
