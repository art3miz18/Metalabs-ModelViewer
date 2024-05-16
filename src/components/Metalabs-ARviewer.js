import React, { useState, useEffect } from "react";
import ARViewer from "./ARviewer";
import ARService from "../services/AR.service";
// import ImageSlider from "./ImageSlider";

const MetalabsARviewer = ({ hostKey, modelID }) => {
  const [s3URL, setS3url] = useState(null);
  const fetchARModels = async () => {
    try {
      const data = await ARService.getModel();
      setS3url(data);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchARModels();
    // console.log('src',src);
  }, []);
  return (
    <div>
      <ARViewer src={s3URL} />
    </div>
  );
};

export default MetalabsARviewer;
