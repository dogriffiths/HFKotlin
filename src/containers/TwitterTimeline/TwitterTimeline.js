import React, {Component} from 'react';

class TwitterTimeline extends Component {
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return <div>
            <a className="twitter-timeline" href="https://twitter.com/HeadFirstKotlin?ref_src=twsrc%5Etfw">Tweets by
                HeadFirstKotlin</a>
        </div>;
    }
}

export default TwitterTimeline;