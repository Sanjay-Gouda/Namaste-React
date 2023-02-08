import { useNavigate } from "react-router-dom";
export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404!! Page Not Found</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </>
  );
};
