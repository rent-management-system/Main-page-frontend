import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showReminder, setShowReminder] = useState(false); // New state for reminder

  // Effect for reminder popup
  useEffect(() => {
    const reminderInterval = setInterval(() => {
      setShowReminder(true);
      const hideTimer = setTimeout(() => {
        setShowReminder(false);
      }, 2000); // Show for 2 seconds

      return () => clearTimeout(hideTimer); // Cleanup hide timer
    }, 20000); // Repeat every 20 seconds

    return () => clearInterval(reminderInterval); // Cleanup interval
  }, []); // Run only once on component mount

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowReminder(false); // Hide reminder when chat is opened
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const newUserMessage: Message = { text: inputMessage, sender: 'user' };
      const currentInput = inputMessage;
      setInputMessage('');

      setMessages((prevMessages) => [...prevMessages, newUserMessage, { text: '', sender: 'bot' }]);

      const languageMap: { [key: string]: string } = {
        en: 'english',
        am: 'amharic',
        om: 'afaan_oromo',
      };
      
      const currentLanguage = languageMap[i18n.language] || 'english';

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: currentInput,
            language: currentLanguage,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const textToStream = data.response;
        const words = textToStream.split(' ');
        let wordIndex = 0;

        const intervalId = setInterval(() => {
          if (wordIndex < words.length) {
            setMessages((prevMessages) => {
              const newMessages = [...prevMessages];
              const lastMessage = newMessages[newMessages.length - 1];
              newMessages[newMessages.length - 1] = {
                ...lastMessage,
                text: lastMessage.text + ' ' + words[wordIndex],
              };
              return newMessages;
            });
            wordIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 100);

      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            const lastMessage = newMessages[newMessages.length - 1];
            newMessages[newMessages.length - 1] = {
              ...lastMessage,
              text: 'Sorry, something went wrong. Please try again later.',
            };
            return newMessages;
          });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {showReminder && !isOpen && ( // Show reminder only if chat is not open
        <div className="chatbot-reminder">
          {t('ai_assistance_reminder')} {/* Use translated text */}
        </div>
      )}
      <div className="chatbot-icon" onClick={toggleChat}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>{t('your_ai_assistance')}</h3> {/* Assuming you want to translate this too */}
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <p key={index} className={message.sender}>
                {message.text}
              </p>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder={t('type_your_message')} // Assuming you want to translate this
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage}>{t('send')}</button> {/* Assuming you want to translate this */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
