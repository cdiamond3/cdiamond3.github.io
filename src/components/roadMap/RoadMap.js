import React from 'react'
import { Card } from 'react-bootstrap'

const RoadMap = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: '90%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 10,
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  }

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default RoadMap
