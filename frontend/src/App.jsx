import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Extrato from "./pages/Extrato";
import Servicos from "./pages/Servicos";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>TeleconHub</h1>

        <nav style={{ marginBottom: 20 }}>
          <a href="/" style={{ marginRight: 15 }}>Dashboard</a>
          <a href="/extrato" style={{ marginRight: 15 }}>Extrato</a>
          <a href="/servicos">Serviços</a>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/extrato" element={<Extrato />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
