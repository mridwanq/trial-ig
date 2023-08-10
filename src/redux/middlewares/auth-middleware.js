import { values } from "lodash";
import { api } from "../../api/axios";
import { constant } from "../../constant";

export const userLogin = (values) => {
  return async (dispatch) => {
    try {
      console.log(values);
      const res = await api.get("/users", {
        params: {
          ...values,
        },
      });
      console.log(res.data.length);
      if (!res.data.length) throw new Error("wrong username/password");

      const user = res.data[0];
      localStorage.setItem("auth", user.id);
      dispatch({
        type: constant.USER_LOGIN,
        payload: res.data[0],
      });

      return constant.success;
    } catch (err) {
      localStorage.removeItem("auth");
      return err.message;
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    console.log(values);
    const res = await api.get("users", {
      param: {
        ...values,
      },
    });
  };
};

export const userUpdate = (id, values) => {
  return async (dispatch) => {};
};
