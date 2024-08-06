import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  visible: boolean;
  isLoading: boolean;
  order: Order | null;
  onClose: () => void;
  onChangeOrderStatus: () => void;
  onCancelOrder: () => Promise<void>;
}

export function OrderModal({
  visible,
  order,
  isLoading,
  onClose,
  onCancelOrder,
  onChangeOrderStatus,
}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{order.status === "WAITING" && "⌚"}</span>
            <span>{order.status === "IN_PRODUCTION" && "👨🏻‍🍳"}</span>
            <span>{order.status === "DONE" && "✅"}</span>
            <strong>
              {order.status === "IN_PRODUCTION" && "Em preparaçao"}
              {order.status === "DONE" && "Pronto!"}
              {order.status === "WAITING" && "Fila de espera"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <div className="quantity">{quantity}x</div>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== "DONE" && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === "WAITING" && "👨🏻‍🍳"}
                {order.status === "IN_PRODUCTION" && "✔️"}
              </span>
              <span>
                {order.status === "WAITING" && "Iniciar Produção"}
                {order.status === "IN_PRODUCTION" && "Concluir Pedido"}
              </span>
            </button>
          )}

          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <span>Cancelar pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
