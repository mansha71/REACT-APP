import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Button Cliked</Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>karma</Button>
    </div>
  );
}

export default App;
