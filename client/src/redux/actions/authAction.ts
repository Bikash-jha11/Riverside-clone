import { postDataApi } from "../../customOps";
import axios from "axios";

axios.defaults.withCredentials = true;

export const TYPES = {
  AUTH: "AUTH",
};

export const login = (data: object) => async (dispatch: any) => {
  console.log("i am reached here");
  try {
    dispatch({ type: "AUTH", payload: { loading: true } });
    const response = await axios.post("http://localhost:5000/login", data);
    //  @ts-ignore

    dispatch({
      type: "AUTH",
      payload: {
        user: response.data.user,
        token: response.data.token,
      },
    });

    dispatch({ type: "NOTIFY", payload: { msg: response.data.msg } });
  } catch (error: any) {
    dispatch({
      type: "NOTIFY",
      payload: {
        msg: error.response.data.msg as Error,
      },
    });
  }
};

export const me = () => async (dispatch: any) => {
  const response = await axios.get("http://localhost:5000/me");
  dispatch({
    type: "AUTH",
    payload: {
      token: response.data.token,
    },
  });
};

export const register = (data: object) => async (dispatch: any) => {
  axios
    .post("http://localhost:5000/register", data)
    .then((response) => console.log(response.data.token))
    .catch((err) => console.log(err.response.data.msg));
};
