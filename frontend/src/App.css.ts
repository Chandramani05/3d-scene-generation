import { style, globalStyle } from "@vanilla-extract/css";

// General App Styles
export const app = style({
  textAlign: "center",
  paddingTop: "2em",
});

export const header = style({
  background: "#282c34",
  padding: "20px",
  color: "white",
});

// Tabs Container and Buttons
export const tabsContainer = style({
  display: "flex",
  justifyContent: "center",
  margin: "1em 0",
});

export const tabButton = style({
  padding: "10px 20px",
  margin: "0 5px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#f7f9fc",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#dde2e6",
  },
});

export const activeTab = style({
  backgroundColor: "#B4CAD1",
  color: "#333",
});

// Content Section Styles
export const contentSection = style({
  textAlign: "left",
  margin: "2em auto",
  padding: "1.5em",
  width: "60%",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 800px)": {
      width: "80%",
    },
  },
});

// Carousel Container
export const carouselContainer = style({
  position: "relative",
  marginTop: "2em",
});

export const carousel = style({
  background: "#B4CAD1",
  margin: "10%",
  "@media": {
    "(max-width: 800px)": {
      margin: "5% 0",
    },
  },
});

export const carouselContentFlex = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1em",
  "@media": {
    "(max-width: 1000px)": {
      flexDirection: "column",
    },
  },
});

export const carouselContentDivOne = style({
  width: "35%",
  textAlign: "center",
});

export const carouselContentDivTwo = style({
  width: "50%",
  textAlign: "center",
});

export const dreamboothImage = style({
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  marginBottom: "1em",
});

export const contentStyle = style({
  textAlign: "center",
  padding: "1em 1em 3em 1em",
});

export const italic = style({
  fontStyle: "italic",
});

// Navigation Buttons for Carousel
export const navButtons = style({
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: "50%",
  width: "100%",
  transform: "translateY(-50%)",
  zIndex: 2,
});

export const navButton = style({
  backgroundColor: "#B4CAD1",
  border: "none",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  color: "#333",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  margin: "0 10px",

  // 3D Effect
  perspective: "1000px",
  transformStyle: "preserve-3d",

  ":hover": {
    backgroundColor: "#A0B6BB",
    transform: "scale(1.1) rotateY(15deg)", // Adds a slight 3D effect on hover
  },
});

// Ensure buttons have proper positioning over the carousel
globalStyle('.ant-carousel', {
  position: "relative",
});
