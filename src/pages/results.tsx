import { Circle } from "@/components";
import { useMegasenaResultsContext } from "@/hooks/useMegasenaResults";

export default function Home() {
  const { allResults } = useMegasenaResultsContext();

  return (
    <>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h2>Últimos Resultados</h2>
        {allResults.slice(-10).map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
              key={item.game}
            >
              <h1>{item.game}</h1>
              {item.result.map((number) => {
                return (
                  <div key={number}>
                    <Circle number={number}></Circle>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
