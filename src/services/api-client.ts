import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a8af0b5c97048969acd038456474148",
  },
});
