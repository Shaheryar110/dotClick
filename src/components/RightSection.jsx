import HPlusMobiledataIcon from "@mui/icons-material/HPlusMobiledata";
import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const drawerWidth = 240;

function RightSection() {
  const [open, setopen] = useState(false);
  const openDrawer = () => {
    if (open) {
      setopen(false);
    } else {
      setopen(true);
    }
  };
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          p: 3,
          height: "100%",

          backgroundColor: "#D9D9D9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2rem",
            marginBottom: "2rem",
            marginX: { md: "2rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "600",
              color: "#72AA83",
            }}
          >
            You Currently Have 3 Requests
          </Typography>
          <MenuIcon
            sx={{ fontSize: "2rem", fontWeight: "600", color: "#72AA83" }}
            onClick={openDrawer}
          />
        </Box>

        <Box
          className="shadow"
          sx={{ backgroundColor: "white", padding: "0.5rem" }}
        >
          <Grid container sx={{ padding: "2rem" }}>
            <Grid
              item
              lg={3}
              md={4}
              sx={{
                borderRight: { md: "1px solid #D9D9D9", xs: "none" },
                marginY: { lg: "0px", xs: "0.5rem" },
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: { md: "5px", xs: "1rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  //   margin: "0px",
                  lineHeight: "1",
                  //   paddingRight: { md: "1rem" },
                }}
              >
                St Judes Hosptal
              </Typography>
              <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                Sarasota FL, 33178
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              lg={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: { md: "1rem", xs: "0.5rem" },
                justifyContent: "center",
                alignItems: "center",
                borderRight: { md: "1px solid #D9D9D9", xs: "none" },
                paddingX: { md: "5px", sm: "1rem" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#72AA83",
                    margin: "0px",
                    lineHeight: "1",
                  }}
                >
                  10
                </Typography>
                <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                  Octoder
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  margin: "0px",
                }}
              >
                -
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#72AA83",
                    margin: "0px",
                    lineHeight: "1",
                  }}
                >
                  10
                </Typography>
                <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                  December
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                marginX: { md: "1rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginY: { md: "0px", xs: "0.5rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  margin: "0px",
                  lineHeight: "1",
                }}
              >
                20 Rooms
              </Typography>
              <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                10 Single , 10 Double
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ padding: "1rem", display: { sm: "flex", xs: "none" } }}
          >
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              sx={{
                border: "1px solid #D9D9D9",
                padding: "0.5rem",
                borderBottomLeftRadius: "2rem",
                borderTopLeftRadius: "2rem",
                backgroundColor: "yellow",
              }}
            >
              <Typography sx={{ marginX: "1rem" }}>RECIEVED</Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              sx={{ border: "1px solid #D9D9D9", padding: "0.5rem" }}
            >
              <Typography sx={{ color: "grey", textAlign: "center" }}>
                NEGOTIATING
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              sx={{
                border: "1px solid #D9D9D9",
                padding: "0.5rem",
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "2rem",
              }}
            >
              <Typography sx={{ color: "grey", textAlign: "center" }}>
                COMPLETED
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="shadow"
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
            padding: "0.5rem",
            marginY: "1rem",
            borderRadius: "2rem",
          }}
        >
          <Grid container sx={{ padding: "2rem" }}>
            <Grid
              item
              lg={3}
              md={4}
              sx={{
                borderRight: { md: "1px solid #D9D9D9", xs: "none" },
                marginY: { lg: "0px", xs: "0.5rem" },
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: { md: "5px", xs: "1rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  //   margin: "0px",
                  lineHeight: "1",
                  //   paddingRight: { md: "1rem" },
                }}
              >
                St Judes Hosptal
              </Typography>
              <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                Sarasota FL, 33178
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              lg={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: { md: "1rem", xs: "0.5rem" },
                justifyContent: "center",
                alignItems: "center",
                borderRight: { md: "1px solid #D9D9D9", xs: "none" },
                paddingX: { md: "5px", sm: "1rem" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#72AA83",
                    margin: "0px",
                    lineHeight: "1",
                  }}
                >
                  10
                </Typography>
                <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                  Octoder
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  margin: "0px",
                }}
              >
                -
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#72AA83",
                    margin: "0px",
                    lineHeight: "1",
                  }}
                >
                  10
                </Typography>
                <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                  December
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                marginX: { md: "1rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginY: { md: "0px", xs: "0.5rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#72AA83",
                  margin: "0px",
                  lineHeight: "1",
                }}
              >
                20 Rooms
              </Typography>
              <Typography sx={{ fontSzie: "1rem", color: "#D9D9D9" }}>
                10 Single , 10 Double
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingX: "2rem" }}>
            <Grid item lg={8} xs={11} sx={{}}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "600",
                  backgroundColor: "#44A16F",
                  padding: "0.7rem",
                  borderRadius: "2rem",
                  paddingX: "1rem",
                  fontSzie: "3rem",
                }}
              >
                Completed
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ padding: "2rem", justifyContent: "center" }}>
            <Grid item lg={4} md={3} sx={{ marginY: "1rem" }}>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1rem",
                  paddingX: "0.2rem",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.3rem",
                  }}
                >
                  <HPlusMobiledataIcon
                    sx={{ color: "#85C371", fontSize: "3rem" }}
                  />
                  <Typography
                    sx={{
                      color: "#85C371",
                      fontSize: "1.3rem",
                      fontStyle: "italic",
                    }}
                  >
                    Holiday Inn
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0.5rem",
                    marginY: "0.5rem",
                    borderRadius: "1rem",
                  }}
                  className="shadow"
                >
                  <Typography sx={{ fontSize: "1rem" }}>
                    1.5 miles away from job location
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ marginY: "0.5rem" }}>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Single:120$
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Double:145$
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={3} sx={{ marginY: "1rem" }}>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1rem",
                  paddingX: "0.2rem",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.3rem",
                  }}
                >
                  <HPlusMobiledataIcon
                    sx={{ color: "#85C371", fontSize: "3rem" }}
                  />
                  <Typography
                    sx={{
                      color: "#85C371",
                      fontSize: "1.3rem",
                      fontStyle: "italic",
                    }}
                  >
                    Holiday Inn
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0.5rem",
                    marginY: "0.5rem",
                    borderRadius: "1rem",
                  }}
                  className="shadow"
                >
                  <Typography sx={{ fontSize: "1rem" }}>
                    1.5 miles away from job location
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ marginY: "0.5rem" }}>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Single:120$
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Double:145$
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={3} sx={{ marginY: "1rem" }}>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1rem",
                  paddingX: "0.2rem",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.3rem",
                  }}
                >
                  <HPlusMobiledataIcon
                    sx={{ color: "#85C371", fontSize: "3rem" }}
                  />
                  <Typography
                    sx={{
                      color: "#85C371",
                      fontSize: "1.3rem",
                      fontStyle: "italic",
                    }}
                  >
                    Holiday Inn
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0.5rem",
                    marginY: "0.5rem",
                    borderRadius: "1rem",
                  }}
                  className="shadow"
                >
                  <Typography sx={{ fontSize: "1rem" }}>
                    1.5 miles away from job location
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ marginY: "0.5rem" }}>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Single:120$
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Double:145$
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {open && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer
            sx={{
              width: drawerWidth,

              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                paddingTop: "3rem",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontStyle: "italic",
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              LODGN
            </Typography>

            <List sx={{ marginY: "2rem" }}>
              {[
                "Current Requests",
                "Ongoing Stays",
                "Previous Stays",
                "Reports",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    selected={activeItem === index}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      "&.Mui-selected": {
                        color: "#45A371",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        marginY: "0.2rem",
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                  <CssBaseline />
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                bottom: "10%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  alignSelf: "center",
                  fontWeight: "600",
                  backgroundColor: "#45A371",
                  "&:hover": {
                    backgroundColor: "#45A371",
                  },
                  width: "60%",
                }}
              >
                Log-Out
              </Button>
              <Typography sx={{ textAlign: "center", marginY: "0.3rem" }}>
                HELP DESK:
              </Typography>
              <Typography sx={{ textAlign: "center" }}>786-874-9988</Typography>
            </Box>
          </Drawer>
        </Box>
      )}
    </>
  );
}

export default RightSection;
