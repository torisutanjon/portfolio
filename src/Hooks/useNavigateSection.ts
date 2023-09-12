import { useContext } from "react";
import { NavigateSection } from "../Context/NavigateSectionProvider";

const useNavigationSection = () => {
  const { setSectionRef, onClick, navList, focused, setFocused } =
    useContext(NavigateSection);
  return {
    setSectionRef,
    onClick,
    navList,
    focused,
    setFocused,
  };
};

export default useNavigationSection;
