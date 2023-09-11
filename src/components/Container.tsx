const Container = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="relative h-full w-full bg-lightBG dark:bg-darkBG overflow-y-auto text-lightPrimary dark:text-darkPrimary">
      {children}
    </div>
  );
};

export default Container;
