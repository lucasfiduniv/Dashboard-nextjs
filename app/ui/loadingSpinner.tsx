import React from "react";
import { ClipLoader } from "react-spinners";

type LoadingType = "page" | "component";

interface LoadingSpinnerProps {
  type: LoadingType;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ type }) => {
  return (
    <>
      {type === "page" && (
        <div className="flex justify-center items-center h-screen w-screen">
          <ClipLoader color="#00FFFF" size={80} />
        </div>
      )}
      {type === "component" && (
        <div className="flex justify-center items-center h-10v w-10vw">
          <ClipLoader color="#00FFFF" size={80} />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
