import { useAppSelector } from '../redux/hooks'
import Tweet from './Tweet'


const Tweets = () => {
  const data = useAppSelector(state => state.data)
  
  return (
    <>
        {data.length 
            ? data.map(tweet => (
                <Tweet content={tweet} />
              ))
            : null
        }
        <button className='btn-fetch' onClick={()=>alert("Just an alert")}>Fetch more</button>
    </>
  )
}

export default Tweets