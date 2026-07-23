import MapComponent from "@/components/Map";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        AI街歩きガイド
      </h1>

      <MapComponent />
    </main>
  );
}