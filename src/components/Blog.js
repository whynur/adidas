import React, { useState } from 'react';
import withUserAuth from './withUserAuth';

const Blog = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, user }]);
      setNewMessage('');
    }
  };

  return (
    <div className="container">
      <h2>Blog</h2>
      <div className="mb-3">
        {messages.map((message, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <strong>{message.user}</strong>: {message.text}
            </div>
          </div>
        ))}
      </div>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">
              Add Message:
            </label>
            <input
              type="text"
              className="form-control"
              id="messageInput"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>You must be logged in to leave a message.</p>
          {window.location.replace('/Login')}
        </div>
      )}
    </div>
  );
};

const BlogWithUserAuth = withUserAuth(Blog);
export default BlogWithUserAuth;
