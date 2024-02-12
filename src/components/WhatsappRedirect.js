import React from 'react';

const WhatsappRedirect = () => {
  const numbers = [
    { num:'+15168708099', number: '+1 (516)-870-8099', text: 'Hello!' },
    { num:'+918779345494', number: '+91 87793 45494', text: 'Hello!' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Get in touch with us through WhatsApp</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {numbers.map(({ num, number, text }) => (
          <div
            key={number}
            style={{
              border: '2px solid #25d366',
              borderRadius: '10px',
              padding: '10px',
              margin: '10px',
              width: '150px',
              transition: 'background-color 0.3s, color 0.3s',
              backgroundColor: '#25d366',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#25d366';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#25d366';
              e.target.style.color = 'white';
            }}
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: 'inherit',
                color: 'inherit',
                padding: '10px',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsappRedirect;
