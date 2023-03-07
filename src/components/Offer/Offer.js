import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RestroCard } from "../Body/RestroCard";
export const Offer = () => {
  const [offers, setOffers] = useState([]);
  const getOffers = async () => {
    const offer = await fetch(
      "https://www.swiggy.com/dapi/offers/restaurant?lat=28.6263764&lng=77.2090704"
    );
    const json = await offer.json();
    const myOfferData = json.data.cards;
    const sliceMydata = myOfferData.slice(1);
    console.log(sliceMydata);
    setOffers(sliceMydata);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "rgb(1,80,99)" }}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "300px",
            }}
          >
            <div style={{}}>
              <div style={{ fontSize: "50px", color: "white" }}>
                Offers for you
              </div>
              <div style={{ fontSize: "24px", color: "white" }}>
                Explore top deals and offers exclusively for you!
              </div>
            </div>
            <div>
              <img
                style={{ height: "200px" }}
                src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="card-wrapper">
          {offers.map((item) => {
            return (
              <div
                style={{
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  display: "flex",
                }}
                key={item.data.data.id}
              >
                <RestroCard {...item.data.data} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
