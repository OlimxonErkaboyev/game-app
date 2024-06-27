import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d3700477408473ab40c3669b57676b2",
  },
});
