import { EmprtCart } from "./EmptyCart";
import styled from "styled-components";
import { Container } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../reducers/cartSlice";

export const CheckoutWrapper = styled.div`
  padding: 20px;
  width: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const Cart = () => {
  const CartItem = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  const RemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <>
      {CartItem.length === 0 ? (
        <EmprtCart />
      ) : (
        <div
          style={{
            padding: "24px",
            background: "rgb(233 236 238)",
          }}
        >
          <Container>
            <CheckoutWrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p>La Pino'z Pizza</p>
                </div>
                <div>
                  <button onClick={RemoveItem}>Remove All</button>
                </div>
              </div>

              {CartItem?.map((item) => {
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{item.name}</p>
                    <p>{item.price / 100}</p>
                  </div>
                );
              })}
            </CheckoutWrapper>
          </Container>
        </div>
      )}

      {/* <EmprtCart /> */}
    </>
  );
};
