import Menu from './components/menu'
import Banner from './components/banner';
import './App.css';
import {Container, List, ImageContainer} from './style.js'
import links from './data/links'
import images_paths from './data/images_paths'
import Text from './components/text'
import Images from './components/images'

function App() {
  return (
    <Container>
      <div className="container">
        <List>
          <ul className='menu'>
          {links.map(link => (
            <Menu
              key={link.name}
              name={link.name}
              link={link.link}
            />
          ))}
           
          </ul>
        </List>
        <Banner url={'/images/wallpaper.jpg'}/>
        <Text titulo={'SAFE SAFE'} corpo='ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia ta safe mano, confia'/>
        <ImageContainer>
          <div className='polegada'>
            {images_paths.map(images_paths => (

                <Images
                  paths={images_paths.path}
                />
              ))}
          </div>
        </ImageContainer>
      </div>
    </Container>
  );
}

export default App;
