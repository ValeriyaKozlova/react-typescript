import React from 'react'
import { useHistory } from 'react-router'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      <h1>Info page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex incidunt officia ipsum sapiente voluptatum tempore velit provident odio accusantium porro, quos ad repudiandae vitae veritatis quisquam consequuntur nobis illo in?</p>
      <button onClick={() => history.push('/')} className="btn">Back to todos</button>
    </div>
  )
}
