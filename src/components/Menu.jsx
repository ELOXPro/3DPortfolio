

export const Menu = (props) => {
  const {onSectionChange, menuOpened, setMenuOpened} = props;

  const handleClick = (e) => {
    const label = e.target.innerText;
    e.preventDefault();
    setMenuOpened(false);
    if (label === 'Introduction'){
      onSectionChange(0);
    } else if (label === 'Skills'){
      onSectionChange(1);
    } else if (label === 'About Me'){
      onSectionChange(2);
    } else if (label === 'Projects'){
      onSectionChange(3);
    } else if (label === 'Contact Me'){
      onSectionChange(4);
    }
  }

  return (
    <>
    <button 
      onClick ={()=> setMenuOpened(!menuOpened)}
    className="z-20 fixed top-2 md:top-8 right-4 md:right-12 p-3 hover:bg-blue-500 bg-blue-700 w-11 h-11 rounded-full transition-colors">
      <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}/>
      <div className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""}`}/>
      <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""}`}/>
    </button>
    <div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}>
      <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
        <MenuButton label= "Introduction" onClick={handleClick}/>
        <MenuButton label= "Skills" onClick={handleClick}/>
        <MenuButton label= "About Me" onClick={handleClick}/>
        <MenuButton label= "Projects" onClick={handleClick}/>
        <MenuButton label= "Contact Me" onClick={handleClick}/>
      </div>
    </div>
    </>
  )
}

const MenuButton = (props) => {
  const {label, onClick} = props;

  return (
    <button
      onClick ={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-blue-500 text-blue-700 transition-colors">
      {label}
    </button>
  );
};

