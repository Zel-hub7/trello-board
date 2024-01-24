import AddNewTask from "./AddNewTask";

const Header = () => {
  return (
    <header className="p-4 h-[85px]  bg-white border-b border-lightGreyLine dark:bg-darkGrey dark:text-white dark:border-darkGreyLine md:p-0">
      <div className="flex items-center justify-center gap-4 md:pr-4">
        <AddNewTask />
      </div>
    </header>
  );
};

export default Header;
