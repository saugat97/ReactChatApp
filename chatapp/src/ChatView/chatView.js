import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatViewComponent extends React.Component {
  componentDidMount = () => {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };

  render() {
    const { classes, chat, user } = this.props;

    if (chat == undefined) {
      return <main className={classes.content}></main>;
    } else {
      return (
        <div>
          <div>
          </div>
          <main className={classes.content}>
            {
                chat.messages.map((_msg, _index) => {
                    return (
                        <div
                            key={_index}
                            className={
                            _msg.sender === user? 
                            classes.userSent: 
                            classes.friendSent}>
                            {_msg.message}
                        
                        </div>
                    );
                })
            }
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatViewComponent);
