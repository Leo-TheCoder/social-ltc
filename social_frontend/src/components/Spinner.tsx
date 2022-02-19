import React from "react";
import {Circles} from "react-loader-spinner";

interface ISpinner {
  message: string;
}

const Spinner: React.FC<ISpinner> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full m-5">
      <Circles color="#00BFFF" height={50} width={200}/>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
