import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MetalabsARviewer from "./components/Metalabs-ARviewer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MetalabsARviewer hostKey={"hostKey"} modelID={"modelID"} />);

reportWebVitals();
