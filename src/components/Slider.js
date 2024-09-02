import moment from "moment";
import { Back } from "./icons/back";
import { Next } from "./icons/next";
export const Slide = (props) => {
  const { img, text, date, tags, index } = props;
  return (
    <div id={index} className="relative carousel w-full">
      <div className="carousel-item">
        <img className="rounded-2xl" src={img}></img>{" "}
        <div className="p-10 bg-white text-start flex flex-col gap-7 absolute top-44 left-2 rounded-2xl ">
          <div className="font-normal text-sm text-blue-600 py-1 px-[10px] rounded-lg bg-gray-50 ">
            {tags}
          </div>
          <div className="text-4xl font-medium ">{text}</div>
          <div className="font-normal text-gray-400">
            {moment(date).format("ll")}
          </div>
        </div>
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ">
          <a href={index + 1} class="btn btn-circle">
            ❮
          </a>
          <a href={index} class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
{
  /* <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full"
    />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">
        ❮
      </a>
      <a href="#slide2" class="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full"
    />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">
        ❮
      </a>
      <a href="#slide3" class="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide3" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full"
    />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="btn btn-circle">
        ❮
      </a>
      <a href="#slide4" class="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide4" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full"
    />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="btn btn-circle">
        ❮
      </a>
      <a href="#slide1" class="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
</div>; */
}
