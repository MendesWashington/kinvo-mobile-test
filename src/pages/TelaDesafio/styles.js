import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contaiTouchableOpacityCard: {
    width: 320,
    height: 120,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 10,
  },
  containerTitles: {
    alignItems: "flex-start",
    paddingTop: 0,
  },

  h1: {
    fontSize: 16,
    color: "#6F4DBF",
    fontWeight: "bold",
    marginLeft: 20,
  },
  h2: {
    fontSize: 10,
    color: "#627179",
    marginLeft: 20,
  },
  circle: {
    width: 56,
    height: 56,
    alignItems: "center",
    paddingTop: 14,
    borderRadius: 50,
    backgroundColor: "#ECF0F2",
  },
  imgCard: {
    width: 25.95,
    height: 26.11,
  },
  btnNovo: {
    width: 56,
    height: 20,
    marginLeft: 70,
    borderRadius: 8,
    backgroundColor: "#40C5D6",
  },

  textBtnNovo: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
