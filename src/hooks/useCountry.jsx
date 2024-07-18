// useCountry.js
import { useState, useEffect } from "react";
import axios from "axios";

const useCountry = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipinfo.io/json", {
          params: {
            token: "376da34da6a2c2",
          },
        });

        if (response.data && response.data.country) {
          setCountry(response.data.country);
        } else {
          setError("Country name not found in the response.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCountry();
  }, []);

  return { country, error };
};

export default useCountry;
