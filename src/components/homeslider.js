import React, { Component } from 'react'
import {Carousel, Container, Row} from 'react-bootstrap'
import { useState } from 'react'; 

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Container fluid className="head-slider carousel-limit">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="citem">
          <img
            className="d-block w-100 backimg"
            src="/images/slider-home-1.jpg"
            alt="First slide"
          />
         
          <Carousel.Caption>
            <h3>Hãy tỉnh táo!</h3>
            <p>Ngân hàng của bạn có thể bị giả mạo bất cứ lúc nào, hãy kiểm tra với chúng tôi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="citem">
          <img
            className="d-block w-100"
            src="/images/slider-home-2.jpg"
            alt="Second slide"
            
          />
  
          <Carousel.Caption>
            <h3>Công nghệ AI</h3>
            <p>KovidGuard kiểm tra cổng đăng nhập và email của bạn bằng AI</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="citem">
          <img
            className="d-block w-100"
            src="/images/slider-home-3.jpg"
            alt="Third slide"
            
          />
  
          <Carousel.Caption>
            <h3>Đề phòng email giả mạo</h3>
            <p>
              Tuyệt đối đừng trở thành nạn nhân của email lừa đảo,  <a style={{color: "red"}}><strong>hãy kiểm tra độ tín nhiệm</strong></a> email
            <br></br>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </Container>
    );
  }

  export default (props) => (
    <>
        <ControlledCarousel></ControlledCarousel>
    </>
  )