import React from 'react'

const Lamquen = (lamquen) => {
  return (
    <div>
          <span>Làm quen</span>
          {lamquen.map((index) => {
            return (
              <div key={index["text"]}>
                <span>{index["text"]}</span>
                <span>
                  {/* <image src={index["img"]}></image> */}
                  <span>: {index["img"]}</span>
                </span>
              </div>
            );
          })}
        </div>
  )
}

export default Lamquen