import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MetalabsARviewer from "./components/Metalabs-ARviewer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MetalabsARviewer
    hostKey={
      "9e10e36bb25293e927e61fba51fe0175:f2851b0e54742f857c5e907d2b8e5aeab252edd2855bcfbe5afe25c9ef01dfcc"
    }
    modelID={"66473919e109d8059bf4db88"}
  />
);

reportWebVitals();
