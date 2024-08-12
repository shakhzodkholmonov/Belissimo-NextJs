import { Box, Typography } from "@mui/material";
import Header from "../../client/components/Layout/Header";

const Halal = () => {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ maxWidth: "1230px", mx: "auto", paddingLeft: "100px", paddingRight: "100px" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", marginLeft: "420px" }}>Halol sertifikati</Typography>
          <img
            style={{ width: "549px", height: "713px", marginLeft: "270px" }}
            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal-cert.jpg&w=1920&q=75"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};

export default Halal;
