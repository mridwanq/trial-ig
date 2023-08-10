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

export const HomePage = () => {
  const userSelector = useSelector((state) => state);
  return (
    <>
      <Logo_instagram className="px-4 mb-4 max-w-[150px] absolute" />
      <div className=" flex justify-end p-4 px-6 gap-5 w-[100%]">
        <div className="py-2">
          <Icon as={PlusSquareIcon} />
        </div>
        <div className="py-2">
          <Icon as={StarIcon} />
        </div>
        <div className="py-2">
          <Icon as={EmailIcon} />
        </div>
      </div>

      <div className=" mx-auto flex gap-0">
        <div className="mb-4 flex col-auto items-center px-2 w-[90px] h-[60px]">
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
      <hr className="mb-2" />
      <div>
        <div className="col-auto items-center px-2 w-[46px] h-[32px]">
          <img
            style={{ border: "1px solid pink" }}
            className=" w-[100%] h-[100%] object-cover rounded-[100%]"
            src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>

      <div style={{ border: "1px solid red" }} className="mt-2">
        <img
          style={{ aspectRatio: "1", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1691413435115-64b9c3141dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        />
        <div className=" flex justify-start py-2 px-4 gap-5 w-[100%]">
          <div>
            <Icon as={StarIcon} />
          </div>
          <div>
            <Icon as={ChatIcon} />
          </div>
          <div>
            <Icon as={ExternalLinkIcon} />
          </div>
          <div className="flex justify-end">
            <Icon as={ExternalLinkIcon} />
          </div>
        </div>
        <p className="px-4">
          Liked by <span className="font-semibold">thekamraan </span>
          <span>and </span>
          <span className="font-semibold">905,235 others</span>
        </p>
        <p className="font-semibold px-4">
          marvel{" "}
          <span className="font-normal">
            Start your countdown to the glorious arrival of Marvel Studio's
            #Loki<span className="text-gray-400">...more</span>
          </span>
          <p className="text-gray-400 font-normal">View all 103 comments</p>
        </p>
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
        </div>
      </div>
    </>
  );
};
