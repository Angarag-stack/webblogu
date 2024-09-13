const addCon = [
  { name: "Address", text: "1328 Oak Ridge Drive, Saint Louis, Missouri" },
  { name: "Contact", text: "313-332-8662uri", gmail: "info@email.com" },
];
const ContactBox = (props) => {
  const { name, text, gmail, id } = props;
  return (
    <div className="border rounded-lg flex flex-col gap-2 p-4 lg:w-[294px]">
      {id}
      <div className="font-medium text-lg">{name}</div>
      <div className="text-lg text-gray-500">{text}</div>
      <div className="text-lg text-gray-500">{gmail}</div>
    </div>
  );
};
export const Contact = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="px-10 xl:max-w-[1024px] xl:m-auto flex flex-col gap-[20px]  ">
        <div className="lg:p-10">
          <div className="flex flex-col gap-[20px] p-9">
            <h1 className="text-2xl font-semibold">Contact us</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col px-9 pb-9 gap-2 md:flex-row md:justify-between">
            {addCon.map((element) => {
              return (
                <ContactBox
                  key={element.id}
                  name={element.name}
                  text={element.text}
                  gmail={element.gmail}
                ></ContactBox>
              );
            })}
          </div>
          <div className="m-9 p-9 bg-gray-50 rounded-lg ">
            <p className="text-lg font-medium mb-[29px] ">Leave a message</p>
            <div className="lg:flex lg:flex-row lg:justify-between mb-4">
              <input
                className="border rounded-sm lg:w-[225px]"
                placeholder="  Your name"
              />
              <input
                className="border lg:w-[225px] rounded-sm"
                placeholder="  Your email"
              />
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <input
                className="border lg:w-[225px] rounded-md"
                placeholder="  Subject"
              />
              <textarea
                className="border rounded-md pb-[130px]"
                placeholder="  Write a message"
              />
            </div>

            <button class="btn btn-primary px-8 ">Send message</button>
          </div>
        </div>
        {/* <Page></Page> */}
      </div>{" "}
    </div>
  );
};
export default Contact;
import Link from "next/link";
import { useRouter } from "next/router";
// const Page = () => {
//   const router = useRouter();

//   return (
//     <button type="button" onClick={() => router.push("/blog")}>
//       Click me
//     </button>
//   );
// };
