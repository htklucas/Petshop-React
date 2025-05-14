import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/pagina-home/Banner-01.jpg';
import Banner02 from '../imagens/pagina-home/Banner-01.jpg';
import Banner03 from '../imagens/pagina-home/Banner-01.jpg';


function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Banner01} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner02} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner03} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;