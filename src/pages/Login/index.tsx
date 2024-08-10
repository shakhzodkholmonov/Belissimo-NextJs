import { Box, Typography } from "@mui/material";
import Header from "../../client/components/Layout/Header";

const Login = () => {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ maxWidth: "1230px", mx: "auto", paddingLeft: "100px", paddingRight: "100px" }}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "140px" }}>
            <Box>
              <Typography sx={{ fontSize: "25px", marginLeft: "50px" }}>Raqamingizni kiriting</Typography>
              {/* Number input */}
              <Box sx={{ width: "350px", height: "49px", bgcolor: "#f4f4f4", borderRadius: "10px", marginTop: "20px" }}>
                <Typography sx={{ fontSize: "27px", paddingTop: "6px", color: "grey", marginLeft: "50px" }}>
                  +998(__)___-__-__
                </Typography>
              </Box>
              <button
                style={{
                  width: "300px",
                  height: "50px",
                  backgroundColor: "#262a2c",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "15px",
                  color: "white",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                Kodni qabul qilish
              </button>{" "}
              <Typography
                sx={{ fontSize: "10px", width: "240px", color: "grey", marginLeft: "50px", marginTop: "20px" }}
              >
                This site is protected by reCAPTCHA and the Google{" "}
                <Typography sx={{ fontSize: "10px", color: "grey", width: "240px", marginLeft: "20px" }}>
                  {" "}
                  Privacy Policy and Terms of Service apply.
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
