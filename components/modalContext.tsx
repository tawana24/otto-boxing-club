"use client";

import * as React from "react";

type ModalState = {
  open: boolean;
  variant: "join" | "info";
  prefill?: string;
};

type ModalContextValue = {
  state: ModalState;
  openModal: (variant?: ModalState["variant"], prefill?: string) => void;
  closeModal: () => void;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ModalState>({
    open: false,
    variant: "join",
  });

  const openModal = React.useCallback(
    (variant: ModalState["variant"] = "join", prefill?: string) => {
      setState({ open: true, variant, prefill });
    },
    [],
  );

  const closeModal = React.useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  // Esc to close + lock body scroll while open
  React.useEffect(() => {
    if (!state.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [state.open, closeModal]);

  const value = React.useMemo(
    () => ({ state, openModal, closeModal }),
    [state, openModal, closeModal],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = React.useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
