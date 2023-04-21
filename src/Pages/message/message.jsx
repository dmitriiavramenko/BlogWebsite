import { useEffect, useState } from "react";
import "./message.scss";
import { useParams } from "react-router";
import axios from "axios";

const Message = () => {
    const {id} = useParams();
    const [conversations, setConversations] = useState([]);
    const [users, setUsers] = useState([]);
    const username = localStorage.getItem('user');
    const [friendUser, setFriendUser] = useState("");
    const [currentConversation, setCurrentConversation] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    const createConversation = async () => {
        const body = { senderId: username, receiverId: id };
        try {
            const response = await axios.post("https://shy-puce-armadillo-fez.cyclic.app/conversations/", body, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                setCurrentConversation({
                    participants: [id, username],
                    messages: []
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const [conversationsData, usersData] = await Promise.all([
                    axios.get(`https://shy-puce-armadillo-fez.cyclic.app/conversations/find/${username}/${id}`).then(response => response.data),
                    axios.get("https://shy-puce-armadillo-fez.cyclic.app/users/").then(response => response.data)
                ]);
                setConversations(conversationsData);
                setUsers(usersData);
                
                const conversation = conversationsData.find(
                    (conversation) =>
                        ((conversation.participants[0] === username &&
                            conversation.participants[1] === id) || (conversation.participants[1] === username && conversation.participants[0] === id))
                );
                setCurrentConversation(conversation);
                const friend = usersData.find((user) => user.username === id);
                setFriendUser(friend);
                if (!conversation) {   
                    createConversation();
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        getData();
        
    }, []);
    
    const handleSendMessage = async (event) => {
        console.log(currentConversation)
        event.preventDefault();
        const message = event.target.previousSibling.value;
        event.target.previousSibling.value = "";
        try {
            const response = await axios.post(`https://shy-puce-armadillo-fez.cyclic.app/conversations/${currentConversation._id}/sendMessage`, {
                sender: username,
                receiver: id,
                message: message
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const updatedConversation = response.data;
            setCurrentConversation(updatedConversation);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="chat-container">
        {currentConversation && 
            <div className="chat-messages">
                {currentConversation.messages.map((message, index) => {
                    const className = message.from === username ? "sent" : "received";
                    return (
                        <div key={index} className={`message ${className}`}>
                            <div className="message-content">{message.message}</div>
                            { className === "received" &&
                            <div className="user">
                                <img src={friendUser.img} alt="" />
                                <span>{friendUser.username}</span>
                            </div>
                            }
                        </div>
                    );
                })}
            </div>
        }
    
            <div className="chat-input">
                <input type="text" placeholder="Type your message here..." />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}



export default Message;
