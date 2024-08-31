const menus = ["All", "Design", "Travel", "fashion", "Technology", "Branding"];
export const Menu = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-start text-2xl font-semibold">All blog post</div>
      <div className="flex justify-between">
        <div className="flex gap-5 text-gray-700 font-semibold">
          {menus.map((menu) => {
            return <div key={menus.index}>{menu}</div>;
          })}
        </div>
        <div className=" text-gray-700 font-semibold">View all</div>
      </div>
    </div>
  );
};
