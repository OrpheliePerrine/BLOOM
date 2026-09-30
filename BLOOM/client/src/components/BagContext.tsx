import { createContext, useContext, useState, type ReactNode } from "react";

type BagValue = {
  count: number;
  add: () => void;
};

const BagContext = createContext<BagValue | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <BagContext.Provider value={{ count, add: () => setCount((c) => c + 1) }}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error("useBag must be used within BagProvider");
  return ctx;
}