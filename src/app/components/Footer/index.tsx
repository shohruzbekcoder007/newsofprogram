import { Box, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns'

export default function Footer() {
  return (
    <Box 
        padding={"20px"} 
        sx={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            backgroundColor: "primary.main", 
            color: "white"
        }}>
            <Typography>
                @ {format(new Date(), 'yyyy')} Shohro'zbek. All Right Reserced
            </Typography>
    </Box>
  )
}
