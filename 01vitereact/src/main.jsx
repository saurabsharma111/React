import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom</h1>
    </div>
  )
}
const reactElement=  React.createElement(
  'a',
  {href: 'https://google.com',
  target: '_blank'},
  'click me to go'

)
const anotherElement =(
  <a href='https://google.com' target='_blank'> visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

)