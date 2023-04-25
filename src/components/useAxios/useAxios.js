import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [loading, error, response];
};

export default useAxios;
