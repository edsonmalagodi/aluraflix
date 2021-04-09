
import './App.css';
import Menu from '../../components/Menu';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'; 
import { VideoCardContainer } from '../../components/Carousel/components/VideoCard/styles';

function Home() {
  return (
    
    <div className="Home">
      <Menu/>    

      <VideoCardContainer>

      </VideoCardContainer>
      
      <h1>Netflix do Alura </h1>

      <Footer>
        
      </Footer>
    </div>
  );
}

export default Home;
