import useIsLoading from "../hooks/useIsLoading";
import { TailSpin } from "react-loader-spinner";

const Preloader = () => {
  return (
    <>
      {useIsLoading() ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperClass="w-full h-screen bg-black flex justify-center items-center"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Preloader;
