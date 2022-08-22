/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import axios from "axios";

function useFeedFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = "https://arcane-wave-11590.herokuapp.com/feedPost";
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

export default useFeedFetch;