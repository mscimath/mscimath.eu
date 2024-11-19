import React, {useState} from 'react';

export default function Blog({posts, input}) {
    const [ expandedPost, setExpandedPost ] = useState(null); // Track which post is espanded
    const [ expandedImage, setExpandedImage ] = useState(null); 

    const filteredPosts = posts.filter((el) => {
      //if no input, return the original
      if (input === "") {
        return el;
      }
      else {
        var stringElement = JSON.stringify(el);
        return stringElement.includes(input);
      }});

    const toggleExpandPost = (id) => {
      setExpandedPost(expandedPost === id ? null : id); // Toggle the expansion
    };  

    const handleImageClick = (src) => {
      setExpandedImage(src === expandedImage ? null : src); //Toggle the expanded state
    };

    return (
        <div className="blogs">
            {filteredPosts.map((post) => (
                    <div className={`blog reveal active ${expandedPost === post.id ? 'expanded' : ''}`} key={post.id}>
                      <h3 className="post-title">{post.postTitle}</h3>
                      <div 
                        className={`post-body ${
                          expandedPost === post.id ? "expanded" : ""
                        }`}
                      >
                        {post.postLines.map((oneLine, id) => (
                          <div key={id} className="blog-paragraph">
                                {oneLine.code ? (
                                  <pre  className='codeText'>{oneLine.line}</pre> 
                                ) : oneLine.image === true && Array.isArray(oneLine.src) ? (
                                    <div className='blog-img-container'>
                                      {/* Mapping over and the array of image paths */}
                                      {oneLine.src.map((src, index) => (
                                        <div className={`blog-img`} 
                                        key={index}
                                        onClick={() => handleImageClick(src)}>
                                          <img src={src} 
                                          alt={`Problems loading the image ${index + 1}.`}
                                          />
                                        </div>
                                       ))}
                                    </div>
                                  ): (
                                  <span>{oneLine.line}</span>
                                  )}
                                </div>
                                ))}
                      </div>
                      {/*Toggle Expand Button*/}
                      <div
                        className={`expand-btn ${expandedPost === post.id ? 'expanded':''}`}
                        onClick={() => toggleExpandPost(post.id)}
                    >
                        {/*expandedPost === post.id ? 'Collapse' : 'Expand'*/}
                    </div>
                      <div className="blog-post-footer">
                        <h5>#: {post.postTags}</h5>
                        <div className="theory"></div>
                      </div>
                    </div>
                )
            )}
              
              
        </div>        
    )
}