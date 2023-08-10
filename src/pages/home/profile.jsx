import { useSelector } from "react-redux";
import {
  PlusSquareIcon,
  StarIcon,
  EmailIcon,
  ChatIcon,
  ExternalLinkIcon,
  Search2Icon,
  WarningTwoIcon,
  ArrowRightIcon,
  CalendarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { Template } from "../../components/template/template";
import { Logo_instagram } from "../../assets/icons";

export const ProfilePage = () => {
  const userSelector = useSelector((state) => state);
  return (
    <>
      <div
        style={{ padding: "60px 20px 0" }}
        className="mx-auto mt-3 w[390px] gap-1"
      >
        <div
          style={{ margin: "0 0 44px" }}
          className="flex float-left rounded-[50%] w-[77px] h-[77px]"
        >
          <img
            className=" w-[100%] h-[100%] object-cover rounded-[100%] "
            src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>

      <div className=" mt-4 mb-4">
        <li className="inline-block mr-4 cursor-pointer">
          <span className="text-black mb-4">9</span> posts
        </li>
        <li className="inline-block mr-4 cursor-pointer">
          <span className="text-black mt-8 mb-4">980m</span> followers
        </li>
        <li className="inline-block mr-4 cursor-pointer">
          <span className="text-black mt-8 mb-4">1</span> following
        </li>
      </div>
      <div className="pt-5">
        <span className="">Wallpapers 40k</span>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

      {/* <div className="font-bold">1,132</div>
        <div className="font-bold">60k</div>
        <div className="font-bold">4</div> */}

      <div className=" mx-auto flex gap-0">
        {/* <div className="mb-4 flex col-auto items-center px-2 w-[90px] h-[60px]">
          <img
            style={{ border: "1px solid pink" }}
            className=" w-[100%] h-[100%] object-cover rounded-[100%] "
            src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          />
        </div>
        <div className="mb-5 flex col-auto items-center px-2 w-[90px] h-[60px]">
          <img
            style={{ border: "1px solid pink" }}
            className=" w-[100%] h-[100%] object-cover rounded-[100%] "
            src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          />
        </div>
        <div className="mb-5 flex col-auto items-center px-2 w-[90px] h-[60px]">
          <img
            style={{ border: "1px solid pink" }}
            className=" w-[100%] h-[100%] object-cover rounded-[100%] "
            src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>

      <div style={{ border: "1px solid red" }} className="mt-2">
        <img
          style={{ aspectRatio: "1", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        />
        <hr className="my-2" />
        <div className=" flex justify-between p-4 px-6 gap-5 w-[100%]">
          <div className="py-2">
            <Icon as={WarningTwoIcon} />
          </div>
          <div className="py-2">
            <Icon as={ArrowRightIcon} />
          </div>
          <div className="py-2">
            <Icon as={Search2Icon} />
          </div>
          <div className="py-2">
            <Icon as={CalendarIcon} />
          </div>
          <div className="py-2">
            <Icon as={UnlockIcon} />
          </div>
        </div> */}
      </div>
    </>
  );
};
