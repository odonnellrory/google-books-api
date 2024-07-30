function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href={window.location.href}
          className="btn btn-ghost text-xl"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          Bookle
        </a>
        <h1>Google Books Search</h1>
      </div>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
      />
    </div>
  );
}

export default NavBar;
