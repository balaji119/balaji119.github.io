import { useEffect, useState } from 'react';

function UseBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://balajikanagaraju.lovestoblog.com/wp-json/wp/v2/posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return { blogs };
};

export default UseBlog;