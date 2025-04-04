import React, { useState } from 'react';

const NewsletterForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');

    try {
      const response = await fetch(
        'https://buttondown.com/api/emails/embed-subscribe/thinking-today',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('訂閱失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={{
        margin: '2rem 0',
        padding: '1.5rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        borderRadius: '8px',
        border: '1px solid var(--ifm-color-emphasis-200)'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>感謝訂閱</h3>
        <p style={{ fontSize: '0.9rem' }}>
          只差一步了！請至信箱驗證你的郵件地址。
        </p>
      </div>
    );
  }

  return (
    <div style={{
      margin: '2rem 0',
      padding: '1.5rem',
      backgroundColor: 'var(--ifm-background-surface-color)',
      borderRadius: '8px',
      border: '1px solid var(--ifm-color-emphasis-200)'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>訂閱最新文章</h3>
      <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        歡迎使用電子信箱接收最新文章，或是你也可以
        <a href="/blog/rss.xml">由此訂閱 RSS</a>
      </p>

      <form 
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <input 
          type="email" 
          name="email"
          placeholder="輸入你的 Email" 
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '4px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-background-color)'
          }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '0.8rem',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            opacity: isLoading ? 0.7 : 1
          }}
        >
          {isLoading ? '訂閱中...' : '訂閱'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;