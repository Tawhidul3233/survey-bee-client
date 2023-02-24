// import React from "react";

// const Chatbot = () => {
//   (function (d, m) {
//     var kommunicateSettings = {
//       appId: "36dc45e1ffea31589f348aec210f7dcf9",
//       popupWidget: true,
//       automaticChatOpenOnNavigation: true,
//     };
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//     var h = document.getElementsByTagName("head")[0];
//     h.appendChild(s);
//     window.kommunicate = m;
//     m._globals = kommunicateSettings;
//   })(document, window.kommunicate || {});

//   return <div></div>;
// };

// export default Chatbot;
import React from "react";

const Chatbot = () => {
  React.useEffect(() => {
    // Check if the Kommunicate script is already loaded
    if (!window.kommunicate) {
      // If the Kommunicate script is not loaded, append it to the DOM
      var kommunicateSettings = {
        appId: "36dc45e1ffea31589f348aec210f7dcf9",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = window.kommunicate || {};
      window.kommunicate._globals = kommunicateSettings;
    }
  }, []);

  return <div></div>;
};

export default Chatbot;
