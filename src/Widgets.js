import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search'

const Widgets = () => {
    return (
        <div className="widgets">
           <div className="widgets__input">
               <SearchIcon className="widgets__searchIcon"/>
               <input placeholder="Search Twitter" type="text"/>
           </div>

           <div className="widgets__widgetContainer">
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId={"1413852037129940994"} />

                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="casey"
                options={{height: 400}}/>
           </div>
        </div>

    )
}


export default Widgets;