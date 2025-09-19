import { atom } from "jotai";

export type Tab = "home" | "write" | "chat";

export const activeTabAtom = atom<Tab>("home");
