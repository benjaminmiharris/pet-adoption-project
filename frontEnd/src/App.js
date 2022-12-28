import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./views/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
