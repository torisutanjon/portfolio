import { createContext, useRef, useState, Dispatch } from "react";

interface ContextTypes {
  setSectionRef: (id: string, ref: HTMLElement | null) => void;
  onClick: (id: string) => void;
  navList: { name: string; id: string; index: number }[];
  focused: string;
  setFocused: Dispatch<React.SetStateAction<string>>;
}

export const NavigateSection = createContext<ContextTypes>({
  setSectionRef: () => {},
  onClick: () => {},
  navList: [],
  focused: "",
  setFocused: () => {},
});

export function NavigateSectionProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [focused, setFocused] = useState("home");

  const sectionRef = useRef<Array<HTMLElement | null>>([]);

  const navList = [
    { name: "Home", id: "home", index: 0 },
    { name: "About", id: "about", index: 1 },
    { name: "Skills", id: "skills", index: 2 },
    { name: "Projects", id: "projects", index: 3 },
    { name: "Contact", id: "contact", index: 4 },
  ];

  const onClick = (id: string) => {
    if (sectionRef.current) {
      const index = navList.find((nav) => nav.id === id)?.index;
      if (!index) return;
      const element = sectionRef.current[index];
      if (!element) return;
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  const setSectionRef = (id: string, ref: HTMLElement | null) => {
    const index = navList.find((nav) => nav.id === id)?.index;
    if (!index) return;
    sectionRef.current[index] = ref;
  };

  return (
    <NavigateSection.Provider
      value={{ setSectionRef, onClick, navList, focused, setFocused }}
    >
      {children}
    </NavigateSection.Provider>
  );
}
