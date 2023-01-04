import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import UserProfile from "./UserProfile";
import { useParams } from "react-router-dom";
const ProRouter = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const getData = async (id) => {
    const response = await instance.get(`/${id}`);
    setData(response.data.data);
  };
  

  useEffect(() => {
    getData(params.id);
  }, [params.id]);

  return (
    <div className="prorouter">{data && <UserProfile value={data} />}</div>
  );
};
export default ProRouter;
