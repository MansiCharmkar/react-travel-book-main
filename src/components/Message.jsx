import Emoji from "./Emoji";

function Message({ emoji, txt }) {
    return (
        <div style={{ fontSize: "1.5rem", paddingTop: "2rem" }}>
            {emoji && <Emoji txt={emoji} />}
            {txt}
        </div>
    );
}

export default Message;
