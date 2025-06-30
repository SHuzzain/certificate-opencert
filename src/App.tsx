import React from "react";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FramedDocumentRenderer templateRegistry={registry} />
    </div>
  );
}

export default App;