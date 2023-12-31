import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Testimonial.css'
import { Fade } from "react-awesome-reveal";

function Testimonial() {
  const data = [
    {
      name: 'Emily',
      position: 'Project Organiser',
      des: '"Well organized."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Joe',
      position: 'DevRel',
      des: '"Good grasp on English an communication."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Sam',
      position: 'Tech Lead',
      des: '"Good attitude and Team Player"',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    }
    ,
    {
      name: 'Marvin',
      position: 'Senior Software Engineer',
      des: '"Always looking to improve"',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Henry',
      position: 'Software developer',
      des: '"Produced quality code."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    
    {
      name: 'Emily',
      position: 'Project Organiser',
      des: '"Well organized."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Joe',
      position: 'DevRel',
      des: '"Good grasp on English an communication."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Sam',
      position: 'Tech Lead',
      des: '"Good attitude and Team Player"',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      name: 'Brent',
      position: 'Marketing',
      des: '"Products explained well."',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    }
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const colors = [
    '#FF0000',
    '#0000FF',
    '#800080',
    '#00008B',
    '#ADD8E6',
    '#878731',
    '#00FF00',
    '#FF00FF',
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
  ]


  return (
    <Fade top duration={2000}>
      <div className="container testimonial-section" id="testimonial">
        <div className="section-title">
          <h5>Testimonials (empty)</h5>
          <span className="line "></span>
        </div>{' '}
        <div>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="content-slider-main" >
                {/* <Fade right> */}
                <div className="content-slider" style={{ backgroundColor: colors[index] }}>
                  <img
                    src={item.img}
                    alt="testimonial image"
                    className="center-image"
                    
                  ></img>
                  <p> {item.name}</p>
                  <p> {item.position}</p>
                  <p> {item.des}</p>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>
     </Fade>
  )
}

export default Testimonial
