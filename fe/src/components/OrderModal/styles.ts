import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  backdrop-filter: blur(4.5px);
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + & {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        margin-left: 12px;
        display: block;
        min-width: 20px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      opacity: 0.8;
      font-size: 14px;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    border-radius: 48px;
    background: #333333;
    color: #fff;
    border: 0;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    padding: 14px 24px;
    color: #d73035;
    background: transparent;
    font-weight: bold;
    border: 0;
    margin-top: 12px;
  }
`;
