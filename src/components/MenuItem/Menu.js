import { Container } from "@mui/material";

import { IMG_CDN_URL, RESTRO_MENU } from "../../config/config";
import { useParams } from "react-router-dom";
import { useMenu } from "../../hooks/useRestroMenu";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../reducers/cartSlice";

export const MenuList = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const { id } = param;

  const menu = useMenu(id);

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <>
      <div style={{ backgroundColor: "#282c3f", padding: "30px 20px" }}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", columnGap: "30px" }}>
            <div style={{ width: "300px", height: "200px" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={IMG_CDN_URL + menu?.data?.cloudinaryImageId}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              <h3>{menu?.data?.name}</h3>
              <p>{menu?.data?.cuisines.join(",")}</p>
              <p>{menu?.data?.city}</p>
            </div>
          </div>
        </Container>
      </div>

      <Container style={{ marginTop: "2rem" }}>
        {Object?.values(menu?.data?.menu?.items || {}).map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  border: "1px solid #ccc",
                  padding: "10px 20px",
                }}
              >
                <div style={{ width: "70%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <p style={{ margin: 0 }}>{item?.name}</p>
                    <p style={{ margin: 0 }}>{item?.category}</p>
                    {/* <div>
                      <p>{item?.description}</p>
                    </div> */}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px 0",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "130px",
                        height: "100px",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={IMG_CDN_URL + item?.cloudinaryImageId}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <button
                      style={{
                        marginTop: "10px",
                        position: "absolute",
                        bottom: "0px",
                        left: "-5px",
                        right: "0px",
                        top: "60px",
                      }}
                      className="search-button"
                      onClick={() => handleAdd(item)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
};

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../../Config/config";

// const RestaurantMenu = () => {
//   const params = useParams();

//   console.error(params.id);

//   const [restaurant, SetRestaurant] = useState({});

//   useEffect(() => {
//     getRestaurantInfo();
//   }, []);

//   async function getRestaurantInfo() {
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=${params.id}`
//     );
//     const json = await data.json();
//     SetRestaurant(json.data);
//     console.log(json);
//   }

//   return (
//     <div>
//       <div>
//         <h1>Restaurant id:{params.id}</h1>
//         <h2>{restaurant?.name}</h2>
//         <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
//         <h3>{restaurant?.area}</h3>
//         <h3>{restaurant?.city}</h3>
//         <h3>{restaurant?.avgRating} stars </h3>
//         <h3>{restaurant?.costForTwoMsg} </h3>
//       </div>
//       <div>
//         <h1>Menu</h1>
//         {/* <ul>
//           {Object.values(restaurant?.menu?.items).map((item) => (
//             <li key={item?.id}>{item?.name}</li>
//           ))}
//         </ul> */}
//       </div>
//       <div> {console.error(Object?.values(restaurant?.menu?.items))}</div>
//     </div>
//   );
// };

// export default RestaurantMenu;
