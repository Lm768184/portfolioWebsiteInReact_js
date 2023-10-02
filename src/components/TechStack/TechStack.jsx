import { useState } from 'react'
import './TechStack.css'
import Project from '../Projects/Project'

const TechStack = () => {
  const data = [
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'ux ui',
    },
    {
      name: 'see all the listings from the port review vid on yt',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'see all the listings from the port review vid on yt',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'Full Stack Web Development',
    },
  ]

  const colors = [
    '#FF0000',
    '#0000FF',
    '#00008B',
    '#ADD8E6',
    '#800080',
    '#FFFF00',
    '#00FF00',
    '#FF00FF',
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
  ]

  const [showMoreTechStack, setShowMoreTechStack] = useState(6)
  const [isActive, setActive] = useState(0)

  const loadMore = () => {
    setShowMoreTechStack((prevValue) => prevValue + 3)
  }

  const loadLess = () => {
    setShowMoreTechStack(6)
  }

  console.log(data.length)
  console.log(showMoreTechStack)

  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row tech-row">
        {data.slice(0, showMoreTechStack).map((item, index) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === isActive ? 'tech-content tech-content-marked' : ' tech-content'
                }
                onClick={() => setActive(index)}
              >
                <span
                  className="tech-num"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>

                <p className="">{item.name}</p>
              </div>
            </div>
          )
        })}
      </div>

      {showMoreTechStack === data.length ? (
        <div>
        <span className="load-more-tech-stack" onClick={loadLess}>
          Show Less
        </span>
        </div>
      ) : (
        <div>
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
        </div>
      )}
      <div>
        <Project />
    </div>
    </div>
    
    
  )
}

export default TechStack