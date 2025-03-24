import React from "react";
import "./carrinhoLateral.css";
// import { useNavigate } from "react-router-dom";


const CarrinhoLateral = ({ isOpen, onClose, itens, removeFromCart, clearCart }) => {
  // const navigate = useNavigate();

  // const whatsappLink = "https://wa.me/5521993970657?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20produto%21";

    const mensagemCarrinho = itens.map((item) => {
      return `${item.nome}: ${item.quantidade} Un - R$ ${(item.preço * item.quantidade).toFixed(2)}`;
    }).join('%0A');
  
    const whatsappLink = `https://wa.me/5521999762224?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20produto%21%0A%0A${mensagemCarrinho}`;
  


  const calcularTotal = () => {
    return itens.reduce((acc, item) => {
      const quantidade = item.quantidade || 1;
      return acc + item.preço * quantidade;
    }, 0);
  };
  

  return (
    <div className={`carrinho-lateral ${isOpen ? "open" : ""}`}>
      <div className="carrinho-header">
        <h2>Carrinho</h2>
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
      <div className="carrinho-conteudo">
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (

          <table className="carrinho-tabela">
            <tbody>
              {itens.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.quantidade} Un</td>
                  <td>R$ {(item.preço * item.quantidade).toFixed(2)}</td>
                  <td>
                    <button className="trash-icon" onClick={() => removeFromCart(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="carrinho-total">
          <strong>Total:</strong> R$ {calcularTotal().toFixed(2)}
        </div>
        <div className="botoes">
          {itens.length > 0 && (
            <button className="add-to-cart-button" onClick={clearCart}>Limpar carrinho</button>)}
          {/* <button className="add-to-cart-button pagamento" onClick={() => { onClose(); navigate("/pagamento") }}>Pagamento</button> */}
          <button className="add-to-cart-button pagamento" onClick={() => window.open(whatsappLink, "_blank")}>Fazer Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoLateral;
