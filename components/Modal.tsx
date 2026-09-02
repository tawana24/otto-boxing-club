"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close, WhatsApp, ArrowRight } from "./Icons";
import { useModal } from "./modalContext";
import { club, waLink } from "@/lib/config";

const pathways = [
  "Fitness & Wellness",
  "Training Camp / Fight Prep",
  "Championship Coaching",
  "Youth Development",
] as const;

export default function Modal() {
  const { state, closeModal } = useModal();
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    pathway: "Fitness & Wellness" as (typeof pathways)[number],
    note: state.prefill ?? "",
  });

  React.useEffect(() => {
    if (state.open) {
      setForm((f) => ({ ...f, note: state.prefill ?? "" }));
    }
  }, [state.open, state.prefill]);

  const message = `Hi ${club.shortName} Boxing Club —%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AInterest: ${form.pathway}${form.note ? `%0ANote: ${form.note}` : ""}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = waLink(decodeURIComponent(message));
    window.open(url, "_blank", "noopener,noreferrer");
    closeModal();
  };

  return (
    <AnimatePresence>
      {state.open && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          <motion.div
            key="modal-panel"
            className="relative w-full max-w-lg bg-grey-card border border-grey-line"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-bone/60 hover:text-bone transition-colors cursor-pointer"
            >
              <Close className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-9">
              <p className="eyebrow text-blood mb-3">Train with us</p>
              <h3
                id="modal-title"
                className="font-display tracking-wide text-bone text-3xl sm:text-4xl leading-tight"
              >
                Book a session.
              </h3>
              <p className="text-bone/60 text-sm mt-3 mb-7">
                We&apos;ll WhatsApp you back within the hour.
              </p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="eyebrow text-bone/60 block mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full bg-black border border-grey-line text-bone px-4 py-3 outline-none focus:border-blood transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="eyebrow text-bone/60 block mb-2"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+263 ..."
                    className="w-full bg-black border border-grey-line text-bone px-4 py-3 outline-none focus:border-blood transition-colors font-tabular"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pathway"
                    className="eyebrow text-bone/60 block mb-2"
                  >
                    Interested in
                  </label>
                  <select
                    id="pathway"
                    name="pathway"
                    value={form.pathway}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        pathway: e.target
                          .value as (typeof pathways)[number],
                      }))
                    }
                    className="w-full bg-black border border-grey-line text-bone px-4 py-3 outline-none focus:border-blood transition-colors appearance-none cursor-pointer"
                  >
                    {pathways.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="note"
                    className="eyebrow text-bone/60 block mb-2"
                  >
                    Note (optional)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    value={form.note}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, note: e.target.value }))
                    }
                    className="w-full bg-black border border-grey-line text-bone px-4 py-3 outline-none focus:border-blood transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 flex-1"
                  >
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeModal}
                    className="btn-outline cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <WhatsApp className="w-4 h-4" />
                    Quick chat
                  </a>
                </div>

                <p className="text-bone/40 text-xs leading-relaxed pt-2">
                  By submitting you&apos;re opening WhatsApp with a pre-filled
                  message. We&apos;ll reply during gym hours.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
