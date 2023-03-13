import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Algebra from "./pages/dashboard/algebra";
import English from "./pages/dashboard/english";
import Fizika from "./pages/dashboard/fizika";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route
        path="/auth/*"
        element={<Navigate to="/dashboard/home" replace />}
      />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route
        path="/dashboard/groups/lessons/0e9b53ad-0aa3-43a6-bb06-b697efd25fd2"
        element={<Algebra />}
      />
      <Route
        path="/dashboard/groups/lessons/38aaee5e-caa3-4808-a5f6-ee3205451fef"
        element={<English />}
      />
      <Route
        path="/dashboard/groups/lessons/341e6e7d-7c98-41bf-8881-a45670423867"
        element={<Fizika />}
      />
    </Routes>
  );
}

export default App;
