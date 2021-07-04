import react from 'react';
import './Feed.css'
import TweetBox from './TweetBox.jsx'


const Feed = () => {

    return (

        <div className="feed">
            {/* // Header */}
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            {/* tweet box */}
            <TweetBox />


            {/* posts */}
            <Post />
        </div>


    )
}

export default Feed;