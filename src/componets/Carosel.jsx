import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:"100%", height:"500px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJjNAGNNE2j2rpqLMQgGVx66Xyk64A_b1kQ&s" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%" , height:"500px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rww3Vr9WOLOgrGINS6Odfa32YlILVXL1RQ&s" alt="" />
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

export default Slider;