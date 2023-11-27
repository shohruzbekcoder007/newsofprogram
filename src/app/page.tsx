import { Content, Hero } from "./components";
import Box from '@mui/material/Box'; 
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
      <Box component="main">
        <Hero/>
        <Box sx={{display: "flex", gap: "20px", padding: "20px"}}>
          <Sidebar/>
          <Content/>
        </Box>
      </Box>
  )
}
