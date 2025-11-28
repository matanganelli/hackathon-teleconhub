import { useState } from "react";
import axios from "axios";

export default function Servicos() {
  const [mensagem, setMensagem] = useState("");

  // Estados recarga
  const [numero, setNumero] = useState("");
  const [valorRecarga, setValorRecarga] = useState("");

  // Estados PIX
  const [chave, setChave] = useState("");
  const [valorPix, setValorPix] = useState("");

  // Estados pagamento
  const [codigo, setCodigo] = useState("");
  const [valorPag, setValorPag] = useState("");

  // Funções
  const enviarRecarga = async () => {
    try {
      const res = await axios.post("http://localhost:4000/servicos/recarga", {
        numero,
        valor: Number(valorRecarga)
      });
      setMensagem(res.data.mensagem);
    } catch (err) {
      console.error(err);
    }
  };

  const enviarPix = async () => {
    try {
      const res = await axios.post("http://localhost:4000/servicos/pix", {
        chave_destino: chave,
        valor: Number(valorPix)
      });
      setMensagem(res.data.mensagem);
    } catch (err) {
      console.error(err);
    }
  };

  const enviarPagamento = async () => {
    try {
      const res = await axios.post("http://localhost:4000/servicos/pagamento", {
        codigo_barras: codigo,
        valor: Number(valorPag)
      });
      setMensagem(res.data.mensagem);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Serviços</h2>

      {/* RECARGA */}
      <h3>Recarga</h3>
      <input
        type="text"
        placeholder="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valorRecarga}
        onChange={(e) => setValorRecarga(e.target.value)}
      />
      <button onClick={enviarRecarga}>Fazer Recarga</button>

      {/* PIX */}
      <h3>PIX</h3>
      <input
        type="text"
        placeholder="Chave PIX"
        value={chave}
        onChange={(e) => setChave(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valorPix}
        onChange={(e) => setValorPix(e.target.value)}
      />
      <button onClick={enviarPix}>Enviar PIX</button>

      {/* PAGAMENTO */}
      <h3>Pagamento</h3>
      <input
        type="text"
        placeholder="Código de barras"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valorPag}
        onChange={(e) => setValorPag(e.target.value)}
      />
      <button onClick={enviarPagamento}>Pagar Boleto</button>

      {/* Mensagem final */}
      {mensagem && <p><strong>{mensagem}</strong></p>}
    </div>
  );
}
