import React from 'react'
import CommonButton from "../common/CommonButton/CommonButton";
import NotificationBell from '../common/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help'
import Box from '@mui/material/Box';

const Header = ({title}) => {
  const headerStyles = {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#009be5',
      padding: '20px',
    },
    topRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center',
      marginBottom: '20px',
      '*': {
        marginRight: '5px',
      },
    },
    middleRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
      marginLeft: '320px',
    },
    link: {
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.7)',
      "&:hover": {
        color: '#fff',
        cursor: 'pointer',
      },
    },
    webButton: {
      marginRight: '5px',
    },
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography
          sx={headerStyles.link}
        >
          go to docs
        </Typography>
        <NotificationBell
          iconColor="white"
        />
        <Avatar src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2365485/profile-images/1652957285" />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography
          variant="h1"
          color="white"
        >  
          {title}
        </Typography>
        <Box>
        <CommonButton
          sx={headerStyles.webButton}
          variant="outlined"
        >
          Web setup
        </CommonButton>
        <Tooltip
          title="help"
          >
            <IconButton
              color="white"
              sx={headerStyles.HelpIcon}
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default Header