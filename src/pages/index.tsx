import Layout from "@/client/components/Layout";
import { Box, CircularProgress, Grid, Modal, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  category: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

  const categories = ["all", "kombo", "pitsa", "gazaklar", "ichimliklar", "salatlar", "desertlar", "souslar"];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box>
          <Box
            sx={{
              maxWidth: "1230px",
              mx: "auto",
              paddingLeft: "100px",
              paddingRight: "100px",
            }}
          >
            <img
              style={{ width: "1150px", borderRadius: "10px" }}
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fabdf7424-78c1-461e-a964-de97befabb53_uz.jpg&w=1920&q=75"
              alt="Promotion"
            />
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "470px",
                  height: "47px",
                  borderRadius: "40px",
                  bgcolor: "#f4f4f4",
                  marginTop: "23px",
                }}
              >
                <button
                  style={{
                    width: "240px",
                    height: "38px",
                    borderRadius: "40px",
                    border: "none",
                    marginTop: "4px",
                    marginLeft: "5px",
                    color: "black",
                    backgroundColor: "white",
                    fontSize: "17px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Yetkazib berish
                </button>
                <Typography
                  sx={{
                    color: "grey",
                    marginLeft: "70px",
                    marginTop: "10px",
                  }}
                >
                  Olib ketish
                </Typography>
              </Box>

              <Box>
                <button
                  style={{
                    border: "solid 1px #ffc600",
                    background: "none",
                    width: "600px",
                    height: "35px",
                    marginTop: "27px",
                    borderRadius: "10px",
                    marginLeft: "80px",
                    color: "#ffc600",
                    paddingRight: "360px",
                  }}
                >
                  Yetkazib berish manzilni tanlang
                </button>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", marginTop: "30px", gap: "10px" }}>
                <button
                  onClick={() => setSelectedCategory("all")}
                  style={{
                    width: "110px",
                    height: "33px",
                    borderRadius: "40px",
                    border: "none",
                    color: "black",
                    backgroundColor: selectedCategory === "all" ? "#ff002b" : "#f4f4f4",
                    fontSize: "17px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Barchasi
                </button>
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      width: "110px",
                      height: "33px",
                      borderRadius: "40px",
                      border: "none",
                      color: "black",
                      backgroundColor: selectedCategory === category ? "#ff002b" : "#f4f4f4",
                      fontSize: "17px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </Box>
              <Box sx={{ marginTop: "25px", marginLeft: "95px" }}>
                <button
                  style={{
                    width: "110px",
                    height: "37px",
                    borderRadius: "40px",
                    border: "none",
                    color: "white",
                    backgroundColor: "#ff002b",
                    fontSize: "17px",
                  }}
                >
                  Savatcha | 0
                </button>
              </Box>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              {loading && <CircularProgress />}
              {error && <Typography color="error">{error}</Typography>}
              <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <Box
                      onClick={() => handleProductClick(product)}
                      sx={{
                        marginBottom: "20px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "15px",
                        overflow: "hidden",
                        height: "350px",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          flexGrow: 1,
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }} variant="h6">
                          {product.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            marginTop: "5px",
                            flexGrow: 1,
                          }}
                          variant="body2"
                        >
                          {product.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "21px",
                            marginTop: "10px",
                          }}
                          variant="body2"
                        >
                          {product.price} so'm
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* Modal for displaying product details */}
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute" as const,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "720px",
              bgcolor: "white",
              borderRadius: "20px",
              height: "330px",
            }}
          >
            <Box sx={{ margin: "15px" }}>
              <button
                style={{
                  border: "none",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onClick={handleCloseModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1024 1024">
                  <path fill="red" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
                  <path
                    fill="red"
                    d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
                  />
                </svg>
              </button>
              {selectedProduct && (
                <>
                  <Box sx={{ display: "flex" }}>
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginTop: "5px",
                      }}
                    />
                    <Box sx={{ marginRight: "20px" }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>{selectedProduct.title}</Typography>
                      <Typography sx={{ mt: 1 }}>{selectedProduct.description}</Typography>
                      <Typography sx={{ mt: 2, fontWeight: "bold", fontSize: "20px" }}>
                        {selectedProduct.price} so'm
                      </Typography>
                      <button
                        style={{
                          width: "350px",
                          height: "40px",
                          backgroundColor: "#006f4c",
                          border: "none",
                          borderRadius: "20px",
                          marginTop: "40px",
                          color: "white",
                        }}
                      >
                        Add to basket
                      </button>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Modal>
      </Layout>
    </>
  );
}
