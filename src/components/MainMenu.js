import React from "react";
import { styled } from "@material-ui/core/styles";
import { colors, lightenDarkenColor } from "../styles/styles";
import { MenuList, MenuItem } from '@material-ui/core';
import {ReactComponent as AvgIcon} from "../images/avg.svg";
//import {ReactComponent as TeamIcon} from "../images/team.svg";
import {ReactComponent as CardsIcon} from "../images/cards.svg";
import {ReactComponent as OddsIcon} from "../images/odds.svg";

const MainMenu = (props) => {

  const StyledMenu = styled(MenuList)({
    background: colors.secondary,
    minHeight: "97vh",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    "&:focus": {
      outline: "none"
    },
    "& li:nth-child(1)": {
      marginTop: ".3em"
    }
  });
  
  const StyledMenuItem = styled(MenuItem)({
    fontWeight: "600",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    borderLeft: "2px solid "+colors.secondary,
    fontSize: ".9rem",
    "& svg": {
      width: "1.3em",
      height: "1.3rem",
      marginRight: "5%",
      "& path": {
        fill: colors.font
      }
    },
    "&:hover" : {
      background: "inherit",
        "&:not(.selected)": {
          color: lightenDarkenColor("#ffffff", -50),
        "& svg path": {
          fill: lightenDarkenColor("#ffffff", -50)
        }
      }
    },
    "&.selected": {
      color: colors.detailsColor,
      borderLeft: "2px solid",
      "& svg path": {
        fill: colors.detailsColor
      }
    }
  });

  return (
    <StyledMenu>
      <StyledMenuItem selected={props.content === "avgStats"} className={props.content === "avgStats" ? "selected" : ""} onClick={()=>props.setContent("avgStats")}>
        <AvgIcon />
        Promedio de estadísticas
      </StyledMenuItem>
      <StyledMenuItem className={props.content === "referee" ? "selected" : ""} onClick={()=>props.setContent("referee")}>
        <CardsIcon />
        Arbitros
      </StyledMenuItem>
      <StyledMenuItem className={props.content === "odds" ? "selected" : ""} onClick={()=>props.setContent("odds")}>
        <OddsIcon />
        Cuotas
      </StyledMenuItem>
    </StyledMenu>
  );
};

export default MainMenu;
