import React, { useState } from 'react';

const Blog = ({ posts, input }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const filteredPosts = posts.filter((el) => {
    if (input === "") {
      return el;
    }
    const stringElement = JSON.stringify(el);
    return stringElement.includes(input);
  });

  const toggleExpandPost = (id, hasImages) => {
    const postElement = document.getElementById(`post-${id}`);

    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isFullyVisible) {
        postElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    setExpandedPost(expandedPost === id ? null : id);
  };

  const handleImageClick = (src) => {
    setExpandedImage(src === expandedImage ? null : src);
  };

  return (
    <div className="blogs">
      {filteredPosts.map((post) => {
        const hasImages = post.postLines.some((line) => line.image);
        
        return (
          <div
            id={`post-${post.id}`}
            className={`blog reveal active ${expandedPost === post.id ? 'expanded' : ''} ${hasImages ? 'has-images' : ''}`}
            key={post.id}
          >
            <h3 className="post-title">{post.postTitle}</h3>
            <div className={`post-body ${expandedPost === post.id ? "expanded" : "collapsed"}`}>
              {/* Text content */}
              {post.postLines.map((oneLine, id) =>
                !oneLine.image ? (
                  <div key={id} className="blog-paragraph">
                    {oneLine.code ? (
                      <pre className="codeText">{oneLine.line}</pre>
                    ) : (
                      <span>{oneLine.line}</span>
                    )}
                  </div>
                ) : null
              )}

              {/* Image content */}
              {hasImages && (
                <div className="blog-img-container">
                  {post.postLines
                    .filter((line) => line.image && Array.isArray(line.src))
                    .flatMap((line) => line.src)
                    .map((src, index) => (
                      <div
                        className="blog-img"
                        key={index}
                        onClick={() => handleImageClick(src)}
                      >
                        <img 
                          src={src} 
                          alt={`Image ${index + 1} failed to load.`}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
            
            <div
              className={`expand-btn ${expandedPost === post.id ? 'expanded' : ''}`}
              onClick={() => toggleExpandPost(post.id, hasImages)}
            />
            
            <div className="blog-post-footer">
              <h5>#: {post.postTags}</h5>
              <div className="theory" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;