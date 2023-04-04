import { Circle } from "@/components";
import { useMegasenaResultsContext } from "@/hooks/useMegasenaResults";

export default function Home() {
  const { allMegasenaNumbers } = useMegasenaResultsContext();

  return (
    <>
      <h2>Todos os números</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          maxWidth: 900,
          margin: 24,
        }}
      >
        {allMegasenaNumbers.map((item) => {
          return (
            <div key={item}>
              <Circle number={item}></Circle>
            </div>
          );
        })}
      </div>
    </>
  );
}
