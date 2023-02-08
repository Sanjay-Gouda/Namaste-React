import styled from "styled-components";

export const EmptyImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 370px;
  height: 350px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const EmprtCart = () => {
  return (
    <>
      <EmptyImageWrapper>
        <ImageDiv>
          <Image
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </ImageDiv>
        <div>
          <h3>Your cart is empty</h3>
        </div>
      </EmptyImageWrapper>
    </>
  );
};
