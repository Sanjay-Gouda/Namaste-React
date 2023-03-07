import { Container } from "@mui/material";

import { useEffect, useState } from "react";
import "../Body/Body.css";
import Slider from "react-slick";
import { Shimmer } from "../Shimmer/Shimmer";
import { RestroCard } from "../Body/RestroCard";
import { useNavigate } from "react-router-dom";
// import { useGetRestaurants } from "../../hooks/useGetRestaurants";

export const Home = () => {
  const [banners, setBanners] = useState([]);
  const [collectionId, setCollectionId] = useState();
  const [homeRestro, setHomeRestro] = useState([]);
  const navigate = useNavigate();
  const getBanners = async () => {
    const banner = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6263764&lng=77.2090704&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await banner.json();
    const BannersData = json.data.cards[0].data.data.cards;
    console.log(json.data.cards[0].data.data.cards);
    setBanners(BannersData);
  };

  const getRestro = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6263764&lng=77.2090704&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setHomeRestro(json?.data?.cards[2]?.data?.data?.cards);

    // console.log(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(async () => {
    getBanners();
    getRestro();
  }, []);

  const CollectionData = async () => {
    const collection = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6263764&lng=77.2090704&collection=47668&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING`
    );
    const data = await collection.json();

    console.log(data);
  };

  const handleCollection = (id) => {
    console.log("LinkId", id);
    setCollectionId(id);
    CollectionData();
  };

  const handleRedirect = (id) => {
    navigate(`/menu/${id}`);
  };

  let settings = {
    lazyLoad: "ondemand",
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(22,27,41)" }}>
        <Container>
          <div
            style={{
              display: "flex",
              height: "350px",
            }}
          >
            <div
              style={{
                padding: "20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {banners.slice(0, 4).map((banners) => {
                return (
                  <div
                    key={banners.data.id}
                    className="image-wrapper"
                    onClick={() => {
                      handleCollection(banners.data.link);
                    }}
                  >
                    <img
                      style={{ width: "280px", height: "280px" }}
                      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${banners.data.creativeId}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="xl">
        <div className="card-wrapper">
          {homeRestro?.map((list) => {
            return (
              <div className="RestroWrapper" key={list.data.id}>
                <RestroCard
                  {...list.data}
                  onClick={() => handleRedirect(list.data.id)}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
