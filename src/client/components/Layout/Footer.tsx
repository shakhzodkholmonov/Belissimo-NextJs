import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", height: "300px", bgcolor: "#262a2c" }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1230px",
          mx: "auto",
          paddingLeft: "100px",
          paddingRight: "100px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ marginTop: "35px" }}>
          <img
            style={{ width: "220px", height: "58px", marginTop: "19px" }}
            src="	https://bellissimo.uz/images/footer-logo.svg"
            alt=""
          />{" "}
          <Typography sx={{ marginTop: "17px", color: "white" }}>Raqamga qo'ng'iroq qiling - 1174</Typography>
        </Box>
        <Box sx={{ marginTop: "60px", color: "grey" }}>
          <Typography>Biz haqimizda</Typography>
          <Typography>Ommaviy oferta</Typography>
          <Typography>Maxfiylik siyosati</Typography>
          <Typography>Halol sertifikati</Typography>
          <Typography>Restoranlar</Typography>
        </Box>
        <Box sx={{ marginTop: "60px", color: "grey" }}>
          <Typography>Bizning ish o'rinlarimiz</Typography>
        </Box>
        <Box sx={{ marginTop: "65px" }}>
          <Box sx={{ display: "flex", gap: "60px" }}>
            <img
              style={{ width: "90px", height: "26px", marginTop: "10px" }}
              src="https://bellissimo.uz/images/payme-footer.svg"
              alt=""
            />
            <img
              style={{ width: "44px", height: "50px" }}
              src="	https://bellissimo.uz/images/uzcard-footer.svg"
              alt=""
            />
          </Box>
          <Box>
            <img
              style={{ width: "92px", height: "35px", marginTop: "20px", marginLeft: "60px" }}
              src="https://bellissimo.uz/images/click-footer.svg"
              alt=""
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "60px", color: "white" }}>
          <Typography>Bizni kuzatib boring:</Typography>
          <Box sx={{ display: "flex", gap: "31px", marginTop: "20px" }}>
            <img style={{ color: "grey" }} src="https://bellissimo.uz/images/footer-facebook.svg" alt="" />
            <img
              style={{ width: "28px", height: "28px", color: "grey", marginTop: "2px" }}
              src="https://bellissimo.uz/images/instagram.svg"
              alt=""
            />
            <img src="	https://bellissimo.uz/images/telegram-icon.svg" alt="" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ color: "white", display: "flex", justifyContent: "center", marginTop: "70px" }}>
          © 2016-2024 Bellissimo Pizza.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
