import React, { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import { setUrl } from "../../globalStore/actionCreator";
import { useDispatch } from "react-redux";
import { Progress, Info } from "./progressbar.elements";

const Progressbar = ({ file, setFile }) => {
  const { progress, url, error } = useStorage(file);
  const [confirmation, setConfirmation] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUrl(url));
    if (progress === 100) {
      setConfirmation(true);
    } else {
      setConfirmation(false);
    }
  }, [url, dispatch, progress]);

  return (
    <>
      <Progress progress={progress} />
      {confirmation && <Info>image uploaded</Info>}
    </>
  );
};

export default Progressbar;
