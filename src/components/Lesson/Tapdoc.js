import React from 'react'

const Tapdoc = (tapdoc) => {
  return (
    <div>
          <span>Tập đọc</span>
          <div>
            {tapdoc.map((index) => {
              return (
                <div key={index}>
                  <span>{index["title"]}</span>
                  <span>
                    <p>{index["content"]}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default Tapdoc