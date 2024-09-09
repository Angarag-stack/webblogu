export const Delete = () => {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer">
        <svg
          className="drawer-overlay"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#4B5563"
            className="dark:stroke-slate-50"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#4B5563"
            className="dark:stroke-slate-50"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>{" "}
    </div>
  );
};
