import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import themes from "../layout/PayslipThemeConfig.json";

export default function ChooseTheme1() {
  return (
    <ImageList >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Choose Your Theme</ListSubheader>
      </ImageListItem>

      {themes.themes.map((theme , indx) => (
        <ImageListItem key={theme.indx} sx ={{margin:"30px "}}>
          <img
          src={`${process.env.PUBLIC_URL}/assets/ImagesThemesPDF/${theme.name}/${theme.name}-1.jpg`}
          alt={`${theme.name}-Theme`}
            loading="lazy"
          />
          <ImageListItemBar
            title={theme.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${theme.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
