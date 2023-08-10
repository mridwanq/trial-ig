import { useState } from "react";
import {
  Closed_Eye,
  Eye,
  Fb_logo,
  Google_logo,
  Logo_instagram,
} from "../../assets/icons";
import { Template } from "../../components/template/template";
import { useFormik } from "formik";
import { useEffect } from "react";
import { debounce } from "lodash";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/middlewares/auth-middleware";
import { useToast } from "@chakra-ui/react";
import { constant } from "../../constant";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getAdditionalUserInfo, updateProfile } from "firebase/auth";

export const LoginPage = () => {
  const toast = useToast();
  const [see, setSee] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const result = await dispatch(userLogin(values));
      if (result === constant.success) {
        nav("/profile");

        return toast({
          title: "login success",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 1500,
        });
      }

      return toast({
        title: "login failed",
        description: result,
        status: "error",
        position: "top",
        isClosable: true,
        duration: 1500,
      });
    },
  });
  //   const handler = (e) =>
  //     debounce(() => {
  //       formik.setFieldValue("email", e.target.value);
  //     }, 300);

  //   const handler = useRef(
  //     debounce((e) => {
  //       formik.setFieldValue("username", e.target.value);
  //     }, 300)
  //   ).current;

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    let result = "";
    await signInWithPopup(auth, provider)
      .then(async (res) => {
        let additional = getAdditionalUserInfo(res);
        console.log(additional);
        const avatar = additional.profile?.picture?.data.url;
        res.user.providerData[0].photoURL = avatar;

        updateProfile(auth.currentUser, {
          photoURL: avatar,
        }).catch((err) => console.log(err));

        console.log(auth.currentUser);
        result = constant.success;
      })
      .catch((err) => (result = err.message));
  };

  return (
    <>
      <Template>
        <Logo_instagram style={{ marginBottom: "24px", maxWidth: "174px" }} />
        <div className="flex flex-col gap-[14px] w-full items-center">
          <div className="input-container">
            <input
              type="text"
              className="mobile-input"
              placeholder="Phone number, email or username"
              style={{ paddingRight: "25px" }}
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type={see ? "text" : "password"}
              className="mobile-input"
              placeholder="Password"
              style={{ paddingRight: "5px" }}
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
            />

            <button
              style={{ paddingRight: "10px" }}
              onClick={() => setSee(!see)}
            >
              {see ? (
                <Eye name="see" width={"13px"} />
              ) : (
                <Closed_Eye name="closed" width={"13px"} />
              )}
            </button>
          </div>
          <button className="auth-button" onClick={formik.handleSubmit}>
            Log in
          </button>
          <div className=" text-[13px]">
            Don't have an account?{" "}
            <span>
              <a href="/register" className="font-semibold">
                Sign up.
              </a>{" "}
            </span>
          </div>

          <div className="flex w-full items-center max-w-[320px]">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-2 mt-[-3px]">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <button className="facebook-button" onClick={loginWithFacebook}>
            <div className="flex justify-center items-center gap-[5px]">
              <span>
                <Fb_logo width={"16px"} height={"16px"} />
              </span>
              <span>Log in with Facebook </span>
            </div>
          </button>
          <button className="google-button" onClick={loginWithGoogle}>
            <div className="flex justify-center items-center gap-[5px]">
              <span>
                <Google_logo width={"16px"} height={"16px"} />
              </span>
              <span>Log in with Google </span>
            </div>
          </button>
        </div>
      </Template>
    </>
  );
};
