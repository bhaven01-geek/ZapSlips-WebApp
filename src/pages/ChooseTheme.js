import { useState } from "react";
import { useLocation, useNavigate,  } from "react-router-dom";

// PDF Themes Configurations
import themes from "../layout/PayslipThemeConfig.json";

// Material UI
import { Button, Typography } from "@mui/material";
// CSS
import "../Assets/themePdf.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// CHOOSE THEME COMPONENT
export default function ChooseTheme() {
  const location = useLocation();
  const props = location.state;
  const comps_Data = props.company_Data; // Company Details
  const defaultTheme = themes.themes[0];

  // By Default No theme will be selected
  const [selectedTheme, setSelectedTheme] = useState(null); // selectedTheme -> index of themes

  // Theme Name
  const [themeName, setThemeName] = useState(defaultTheme.name);

  // PDF Background Colors
  const [bgColor, setBgColor] = useState(defaultTheme.bgColor);
  const [bgColor2, setBgColor2] = useState(defaultTheme.bgColor2);

  // PDF Colours
  const [color0, setColor0] = useState(defaultTheme.color0);
  const [color1, setColor1] = useState(defaultTheme.color1);
  const [color2, setColor2] = useState(defaultTheme.color2);
  const [color3, setColor3] = useState(defaultTheme.color3);

  // This theme will be exported
  let yourTheme = {
    themeName: themeName,
    bgColor: bgColor,
    bgColor2: bgColor2,
    color0: color0,
    color1: color1,
    color2: color2,
    color3: color3,
  };

  // Company Details
  let companyDetails = {
    companyName: comps_Data.AgencyName,
    companyAddress: comps_Data.AgencyAddress,
    imageSource: comps_Data.AgencyLogo,
    compantTel: comps_Data.AgencyTelephone,
  };

  // Theme Setter
  function handleSetThemes(
    inp_name,
    inp_bgColor,
    inp_bgColor2,
    inp_color0,
    inp_color1,
    inp_color2,
    inp_color3
  ) {
    setThemeName(inp_name);
    setBgColor(inp_bgColor);
    setBgColor2(inp_bgColor2);
    setColor0(inp_color0);
    setColor1(inp_color1);
    setColor2(inp_color2);
    setColor3(inp_color3);
  }

  return (
    <div>
      <Typography
        id="theme-header"
        align="center"
        variant="h4"
        sx={{ fontWeight: 500, }}
      >
        Select a theme for payslip(s)
      </Typography>

      {/* Themes Container */}
      <div id="img-themes">
        {
          themes.themes.map((theme, indx) => {
            return (
              <CreateThemeDiv
                key={indx}
                id={indx}
                theme={theme}
                setter={handleSetThemes}
                selectedTheme={selectedTheme}
                setSelectTheme={setSelectedTheme}
                data={props}
                yourTheme={yourTheme}
                companyDetails={companyDetails}
              />
            )
          })}
      </div>

    </div>
  );
}

// Creates Theme Div
const CreateThemeDiv = props => {
  const navigate = useNavigate();
  // const { path } = useRouteMatch();
  const { bgColor, bgColor2, color0, color1, color2, color3, name } = {
    ...props.theme,
  };

  // Will be passed to Generate Slip Component
  const yourTheme = props.yourTheme;
  const companyDetails = props.companyDetails;
  const data = props.data;

  return (



    <div className="theme-container">

      {/* PDF Theme Image */}
      <img
        onMouseOver={(e) => {
          if (props.id === props.selectedTheme) {
            return;
          }
          e.target.offsetParent
            .querySelector(".over-image-select")
            .classList.add("active");
        }}
        className="theme-gallery-img"
        style={{
          border: props.id === props.selectedTheme ? "lightgrey solid 1px" : "none",
        }}
        src={`${process.env.PUBLIC_URL}/assets/ImagesThemesPDF/${name}/${name}-1.jpg`}
        alt={`${name}-Theme`}
      />

      {/* Transparent DIV over Image */}
      <div
        className="over-image"
        style={{ display: props.id === props.selectedTheme ? "block" : "none" }}
      >
        <div className="back-strip">
          <Button type="submit"
            // variant="containe"
            // color="secondary"
            sx={{
              color: '#ffffff', background: "#0B2DAC", fontWeight: 500, width: '90px', borderRadius: '5px',
              '&:hover': {
                background: "#0B2DAC",
                borderRadius: "none"
              },
              '&:focus': {
                outline: "none",
              }
            }}
            onClick={() => {
              navigate('gen-slip',
                {
                  state: {
                    yourTheme,
                    data: data,
                    companyDetails,
                  },
                });
            }}
            
          >
            {/* <CheckBoxIcon/> */}
            Select
          </Button>
        </div>
      </div>

      {/* Strip With Next Button Over Image */}
      <div
        onClick={(e) => {
          e.target.classList.remove("active");
          props.setter(name, bgColor, bgColor2, color0, color1, color2, color3);
          props.setSelectTheme(props.id);
        }}
        onMouseOut={(e) => {
        }}
        className="over-image-select"
      >
        <Typography
          style={{ color: '#FFFFFF', textShadow: '#3f51b5 0 0 10px' }}
          variant="h5"
          onClick={(e) => {
            e.target.offsetParent.classList.remove("active");
          }}
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};
