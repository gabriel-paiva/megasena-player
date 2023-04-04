import { MegasenaResult } from "@/types/MegasenaResult";
import {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from "react";
import { possibleNumbers } from "../utils/possibleNumbers";
import { getAllResults } from "../utils/getAllResults";

interface MetasenaResultsContextData {
  allMegasenaNumbers: string[];
  allResults: MegasenaResult[];
}

interface MegasenaResultsProps {
  children: ReactElement;
}

const MegasenaResultsContext = createContext<MetasenaResultsContextData>(
  {} as MetasenaResultsContextData
);

export function MegasenaResultsProvider({ children }: MegasenaResultsProps) {
  const [allMegasenaNumbers, setAllMegasenaNumbers] = useState(possibleNumbers);

  const [allResults, setAllResults] = useState<MegasenaResult[]>(() =>
    getAllResults()
  );

  const value = useMemo(() => {
    return { allMegasenaNumbers, allResults };
  }, [allMegasenaNumbers, allResults]);

  return (
    <MegasenaResultsContext.Provider value={value}>
      {children}
    </MegasenaResultsContext.Provider>
  );
}
export function useMegasenaResultsContext() {
  return useContext(MegasenaResultsContext);
}
