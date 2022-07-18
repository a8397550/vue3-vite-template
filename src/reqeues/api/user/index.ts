import request from "@/reqeues/request";

export const getUser = () => {
  return request("/getUser");
};

export const getUserInfo = (options: {data:any, params: any}) => {
  return request("/getUserInfo", {
    method: "post",
    body: options.data,
    params: options.params
  });
};
