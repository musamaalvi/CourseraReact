import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core'
import { useState } from 'react'
import db from './Firebase'
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sentTweet = e => {
        e.preventDefault()
        db.collection("posts").add({
            displayName: "M USama Alvi",
            username:'musamaalvi',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar:""
            
        })
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        onChange={(e) => {setTweetMessage(e.target.value)}}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => {setTweetImage(e.target.value)}}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text"
                />
                <Button onClick={sentTweet} type="submit"className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;