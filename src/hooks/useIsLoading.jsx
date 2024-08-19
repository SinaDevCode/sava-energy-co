import { useEffect, useState } from "react";

const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading;
};

export default useIsLoading;
