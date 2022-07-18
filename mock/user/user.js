export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data: []
      };
    }
  },
  {
    url: "/api/getUserInfo",
    method: "post",
    response: (req) => {
      console.log(req.body, req.query);
      console.log(req.query.name);
      return {
        code: 0,
        message: "ok",
        data: []
      };
    }
  },
];