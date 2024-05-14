import React, { useState, useRef, useEffect } from "react";
import ARViewer from "./ARviewer";
import { generatePresignedUrlGET } from "../services/preSignedUrl";
// import ImageSlider from "./ImageSlider";

const MetalabsARviewer = ({ modelURL, clientId, secretKey, s3ObjectKey }) => {
  const [s3URL, setS3url] = useState(null);
  const metaBucket = process.env.REACT_APP_META_BUCKET_NAME;
  const getS3URL = async (s3ObjectKey) => {
    try {
      if (!s3ObjectKey) throw new Error("S3 Object Key missing!");
      const data = await generatePresignedUrlGET(metaBucket, s3ObjectKey);
      setS3url(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getS3URL(s3ObjectKey);
  }, []);
  return (
    <div>
      <ARViewer
        src={modelURL}
        clientId={clientId}
        secretKey={secretKey}
        s3ObjectKey={s3ObjectKey}
      />
    </div>
  );
};

export default MetalabsARviewer;
