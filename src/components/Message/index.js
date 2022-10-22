// Write your code here
import './index.css'

const Message = props => {
  const {abc} = props

  const text = abc ? 'Welcome User' : 'Please Login'
  return <h1 className="msg">{text}</h1>
}

export default Message
