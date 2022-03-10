import React from 'react'

function Service ({title, text, icon}) {
  return (
      <div>
          <div>{title}</div>
          <div>{text}</div>
          <div style={{ fontSize: "28px" }}>{icon}</div>
    </div>
  )
}

export {Service}