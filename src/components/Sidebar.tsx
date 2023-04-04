import axios from "axios";
import Link from "next/link";

export function SidebarButton({
  path,
  content,
}: {
  path: string;
  content: string;
}) {
  return (
    <Link href={path}>
      <button
        onClick={() => {
          console.log("Hey");
        }}
        className="w-full bg-emerald-500 hover:bg-emerald-700 border-emerald-600 border text-white font-bold py-2 px-4"
      >
        {content}
      </button>
    </Link>
  );
}

export function Sidebar() {
  const handleGetResults = async () => {
    const resultsURL = "/api/getMegasenaResults";

    await axios.get(resultsURL).then(() => {
      console.log("Salvou");
    });
  };

  return (
    <section className="w-[200px] h-full bg-emerald-500 flex flex-col gap-2 mr-4 py-20">
      <SidebarButton content="Numbers" path="/" />
      <SidebarButton content="Results" path="/results" />
      <button
        onClick={() => handleGetResults()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
      >
        Atualizar resultados
      </button>
    </section>
  );
}
