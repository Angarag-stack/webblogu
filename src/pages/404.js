export default function Custom404() {
  return (
    <div className="flex justify-evenly px-10 xl:max-w-[1024px] xl:m-auto  gap-[20px] lg:gap-[100px] pb-20">
      <h1 className="font-normal text-7xl">404</h1>
      <div className="border-r"></div>
      <div className=" flex flex-col gap-7">
        <div className="font-medium text-2xl">Page not found</div>
        <div className="text-gray-500 text-lg">
          We are sorry, This page is unknown or does not exist the page you are
          looking for.
        </div>
        <button className="btn btn-primary w-fit px-10">Back to Home</button>
      </div>
    </div>
  );
}
