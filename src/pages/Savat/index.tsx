import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Header from "../../client/components/Layout/Header";

const Savat = () => {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ maxWidth: "1230px", mx: "auto", paddingLeft: "100px", paddingRight: "100px" }}>
          <Box sx={{ marginLeft: "370px", marginTop: "80px" }}>
            <img
              style={{ marginLeft: "90px" }}
              src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg"
              alt=""
            />
            <Typography sx={{ fontSize: "23px", fontWeight: "bold", marginTop: "60px" }}>
              Hozircha sizning savatchangiz bo'sh 😕
            </Typography>
            <Link href="/">
              <button
                style={{
                  width: "400px",
                  height: "50px",
                  backgroundColor: "#262a2c",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "15px",
                  color: "white",
                  marginTop: "70px",
                }}
              >
                Menyuni ko'rish
              </button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Savat;
