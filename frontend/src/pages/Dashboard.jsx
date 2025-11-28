import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    axios.get("http://localhost:4000/gastos")
      .then(res => setTotal(res.data.total))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total de gastos: <strong>R${total}</strong></p>
    </div>
  );
}
