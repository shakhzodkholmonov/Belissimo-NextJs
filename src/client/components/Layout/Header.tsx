import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "1230px",
          mx: "auto",
          paddingLeft: "100px",
          paddingRight: "100px",
          gap: "35px",
        }}
      >
        <Link href="/">
          <img
            style={{ width: "180px", height: "48px", marginTop: "19px" }}
            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"
            alt=""
          />
        </Link>
        <Box sx={{ display: "flex", gap: "60px", marginTop: "20px" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "42px", height: "48px", bgcolor: "#ecfdf5" }}>
              <svg
                style={{ marginTop: "10px", marginLeft: "9px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M3.61971 9.2068C5.58971 0.546799 18.4197 0.556799 20.3797 9.2168C21.5297 14.2968 18.3697 18.5968 15.5997 21.2568C13.5897 23.1968 10.4097 23.1968 8.38971 21.2568C5.62971 18.5968 2.46971 14.2868 3.61971 9.2068Z"
                  fill="#047857"
                />
                <path
                  d="M11.9999 14.1467C13.723 14.1467 15.1199 12.7499 15.1199 11.0267C15.1199 9.30361 13.723 7.90674 11.9999 7.90674C10.2768 7.90674 8.87988 9.30361 8.87988 11.0267C8.87988 12.7499 10.2768 14.1467 11.9999 14.1467Z"
                  fill="#ECFDF5"
                />
              </svg>
            </Box>
            <Box sx={{ marginLeft: "8px" }}>
              <Typography sx={{ color: "grey" }}>Shahar:</Typography>
              <Typography sx={{ color: "#047857" }}>Toshkent</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "100px", height: "47px", bgcolor: "#ecfdf5", display: "flex", gap: "5px" }}>
              <svg
                style={{ marginTop: "12px", marginLeft: "11px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.3087 16.2751C17.3087 16.5751 17.242 16.8834 17.1003 17.1834C16.9587 17.4834 16.7753 17.7667 16.5337 18.0334C16.1253 18.4834 15.6753 18.8084 15.167 19.0168C14.667 19.2251 14.1253 19.3334 13.542 19.3334C12.692 19.3334 11.7837 19.1334 10.8253 18.7251C9.86699 18.3167 8.90866 17.7667 7.95866 17.0751C7.00033 16.3751 6.09199 15.6001 5.22533 14.7417C4.36699 13.8751 3.59199 12.9667 2.90033 12.0167C2.21699 11.0667 1.66699 10.1167 1.26699 9.17508C0.866992 8.22508 0.666992 7.31675 0.666992 6.45008C0.666992 5.88341 0.766992 5.34175 0.966992 4.84175C1.16699 4.33341 1.48366 3.86675 1.92533 3.45008C2.45866 2.92508 3.04199 2.66675 3.65866 2.66675C3.89199 2.66675 4.12533 2.71675 4.33366 2.81675C4.55033 2.91675 4.74199 3.06675 4.89199 3.28341L6.82533 6.00841C6.97533 6.21675 7.08366 6.40841 7.15866 6.59175C7.23366 6.76675 7.27533 6.94175 7.27533 7.10008C7.27533 7.30008 7.21699 7.50008 7.10033 7.69175C6.99199 7.88341 6.83366 8.08341 6.63366 8.28341L6.00033 8.94175C5.90866 9.03341 5.86699 9.14175 5.86699 9.27508C5.86699 9.34175 5.87533 9.40008 5.89199 9.46675C5.91699 9.53341 5.94199 9.58341 5.95866 9.63341C6.10866 9.90841 6.36699 10.2667 6.73366 10.7001C7.10866 11.1334 7.50866 11.5751 7.94199 12.0167C8.39199 12.4584 8.82533 12.8667 9.26699 13.2417C9.70033 13.6084 10.0587 13.8584 10.342 14.0084C10.3837 14.0251 10.4337 14.0501 10.492 14.0751C10.5587 14.1001 10.6253 14.1084 10.7003 14.1084C10.842 14.1084 10.9503 14.0584 11.042 13.9667L11.6753 13.3417C11.8837 13.1334 12.0837 12.9751 12.2753 12.8751C12.467 12.7584 12.6587 12.7001 12.867 12.7001C13.0253 12.7001 13.192 12.7334 13.3753 12.8084C13.5587 12.8834 13.7503 12.9917 13.9587 13.1334L16.717 15.0917C16.9337 15.2417 17.0837 15.4167 17.1753 15.6251C17.2587 15.8334 17.3087 16.0417 17.3087 16.2751Z"
                  fill="#047857"
                />
                <path
                  d="M14.4167 8.50016C14.4167 8.00016 14.025 7.2335 13.4417 6.6085C12.9083 6.0335 12.2 5.5835 11.5 5.5835"
                  stroke="#047857"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3333 8.50008C17.3333 5.27508 14.725 2.66675 11.5 2.66675"
                  stroke="#047857"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography sx={{ color: "#047857", fontSize: "22px", marginTop: "7px" }}>1174</Typography>
            </Box>
            <Box sx={{ marginLeft: "8px" }}>
              <Typography sx={{ color: "grey", width: "100px", fontSize: "14px", marginTop: "3px" }}>
                Yagona aloqa markazi
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "230px", height: "47px", bgcolor: "#ecfdf5", display: "flex", gap: "10px" }}>
              <Typography sx={{ color: "#047857", fontSize: "22px", marginTop: "7px", marginLeft: "10px" }}>
                24/7
              </Typography>
              <Typography sx={{ color: "grey", width: "200px", fontSize: "11px", marginTop: "7px" }}>
                Bepul yetkazish endi 24/7 mavjud
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", marginTop: "35px", gap: "4px" }}>
          <svg
            style={{ marginTop: "3px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect width="15" height="15" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_1120_861" transform="scale(0.0138889)" />
              </pattern>
              <image
                id="image0_1120_861"
                width="72"
                height="72"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <Typography sx={{ fontSize: "14px" }}>Uz</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          {" "}
          <Link href="/Halal">
            <img
              style={{ marginTop: "19px", height: "58px", width: "58px" }}
              src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=64&q=75"
              alt=""
            />
          </Link>
          <Link href="/Login">
            <button
              style={{
                width: "80px",
                height: "40px",
                borderRadius: "24px",
                border: "none",
                backgroundColor: "#047857",
                color: "white",
                fontSize: "17px",
                marginTop: "25px",
              }}
            >
              Kirish
            </button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
