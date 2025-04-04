import React, { useEffect, useState } from "react";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const SubstackFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://mileyttc.substack.com/feed");
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).slice(0, 5); // 只顯示最新 5 篇文章
        const articles = items.map((item) => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          pubDate: new Date(item.querySelector("pubDate").textContent).toLocaleDateString(),
          description: item.querySelector("description") ? decodeHtml(item.querySelector("description").textContent) : "", // 解碼副標題
        }));

        setPosts(articles);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };

    fetchRSS();
  }, []);

  return (
    <div style={{
        margin: '2rem 0',
        padding: '1.5rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        borderRadius: '8px',
        border: '1px solid var(--ifm-color-emphasis-200)'
      }}>
        <h3>Learning to Walk Again</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Learning to walk again 是樂團 Foo Fighters 的歌《Walk》 中的一句歌詞，它帶領並陪伴著我從抑鬱狀態中恢復、改變我的職涯路徑，重新開始。與 Thinking Today 相比 ，我在這個 Substack 空間更深入地紀錄了我細微的情緒、個人成長和對未來的想望。
        </p>
        <h4>最新文章</h4>
        <ul>
            {posts.length > 0 ? (
            posts.map((post, index) => (
                <li key={index}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a> ({post.pubDate})
                <p>{post.description}</p>
                </li>
            ))
            ) : (
            <p>載入中...</p>
            )}
        </ul>
        <button 
            onClick={() => window.open('https://mileyttc.substack.com', '_blank')} 
            style={{
                width: '100%',
                height: '46px',
                padding: '0.8rem',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                opacity: 1,
                erticalAlign: 'middle'
            }}
        >
        直接前往 Substack
        </button>
    </div>
  );
  
};

export default SubstackFeed;