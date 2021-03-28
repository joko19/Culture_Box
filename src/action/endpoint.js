import instance from "./config";

const index = () => instance.get("/api/culture/");
const detailCulture = (data) => instance.get("/api/culture/" + data);

const apiCulture = {
  index,
  detailCulture,
};

export default apiCulture;
