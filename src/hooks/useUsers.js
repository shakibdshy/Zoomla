import { useEffect, useState } from "react";
import axios from "axios";

function useUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = "https://zoomla-backend.herokuapp.com/api/users";
        const { data } = await axios.get(url);
        setLoading(false);
        setData(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return [data, setData, loading, error];
}

export default useUsers;
