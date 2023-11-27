import { Box, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box 
        padding={"20px"} 
        sx={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            backgroundColor: "#141414", 
            color: "white"
        }}>
            <Typography>
                @ {format(new Date(), 'yyyy')} Shohro'zbek. All Right Reserced
            </Typography>
            <Box
              sx={{display: "flex", gap: "10px"}}
            >
              <TelegramIcon fontSize="large"/>
              <InstagramIcon fontSize="large"/>
              <YouTubeIcon fontSize="large"/>
            </Box>
    </Box>
  )
}
