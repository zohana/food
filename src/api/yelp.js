import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VT9Zag0ICSrQc9brSAITfp3no1W6ru9g_TWiei8MMKVOGlqHH3l9Kibv4nJoxTit5GVU_S-5hqRpyqIjcg2fEb4i8vT40aCndYeX016xKDHjzWMu_uUbVbDMi-cYXnYx"
  }
});
