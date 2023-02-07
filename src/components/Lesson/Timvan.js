import React from 'react'

const Timvan = (timvan) => {
  return (
    <div>
          <span>Tìm Vần</span>
          <div>
            {timvan.map((index) => {
              return (
                <div key={index}>
                  <span>{index["title"]}</span>
                  <span>
                    {index["container"].map((index) => {
                      return (
                        <div key={index}>
                          <span>{index["content"]}</span>
                          <span>{index["img"]}</span>
                        </div>
                      );
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default Timvan