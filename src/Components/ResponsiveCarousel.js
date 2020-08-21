import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class ResponsiveCarousel extends React.Component{

    render(){
        return(
            <Carousel>
              {
                  this.props.images.map((img)=>{
                      return(
                        <Carousel.Item>
                <img
                    className="project-image"
                    src={img}
                />
                {/* <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                      )
                  })
              }
                
                {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/year.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        )
    }
    
}

export default ResponsiveCarousel;