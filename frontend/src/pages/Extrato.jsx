import { useEffect, useState } from "react";
import axios from "axios";

export default function Extrato() {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/transacoes")
      .then(res => setTransacoes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Extrato</h2>
      <ul>
        {transacoes.map((t) => (
          <li key={t.id}>
            {t.descricao} — R${t.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}
