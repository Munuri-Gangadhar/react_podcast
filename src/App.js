import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from './components/Sidebar';
import Navbar from "./components/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import PodcastDetails from './pages/PodcastDetails';
import DisplayPodcast from "./pages/DisplayPodcast";


const Container = styled.div`
  display:flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100vw; 
  height: 100vh;
  overflow-x:hidden;
  overflow-y:hidden;
`;
const Frame=styled.div`
   display:flex;
   flex-direction:column;
   flex:3;
   
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen,setMenuOpen]=useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
      <Container>
        {menuOpen &&
           <Sidebar
           menuOpen={menuOpen}
           setMenuOpen={setMenuOpen}
            setDarkMode={setDarkMode}
           darkMode={darkMode}/>
        }
        <Frame>
          <Navbar  menuOpen={menuOpen}
         setMenuOpen={setMenuOpen} />
         <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/Favourites' element={<Favourites/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/podcast/:id' element={<PodcastDetails/>}/>
            <Route path='/showpodcasts/:type' element={<DisplayPodcast/>}/>
         </Routes>
          </Frame>
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
