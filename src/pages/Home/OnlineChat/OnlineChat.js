import React, { Component } from 'react'

export class OnlineChat extends Component {

    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"36dc45e1ffea31589f348aec210f7dcf9","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

  render() {
    return (
      <div>OnlineChat</div>
     
    


    )
  }
}

export default OnlineChat