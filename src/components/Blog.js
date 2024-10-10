import React, {useState} from 'react';

export default function Blog({posts, input}){
    const filteredPosts = posts.filter((el) => {
      //if no input, return the original
      if (input === "") {
        console.log(el);
        return el;
      }
      else {
        var stringElement = JSON.stringify(el);
        console.log(stringElement)
        return stringElement.includes(input);
      }})

    const [expandedImage, setExpandedImage] = useState(null); 

    const handleImageClick = (src) => {
      setExpandedImage(src === expandedImage ? null : src); //Toggle the expanded state
    };

    return (
        <div className="blogs">
            {filteredPosts.map((post, index) => {
                return(
                    <div className="blog reveal active" key={post.id}>
                      <h3 className="post-title">{post.postTitle}</h3>
                      <div className="post-body">
                        {post.postLines.map((oneLine, id) => {
                              return(
                                oneLine.code === true ? (
                                  <pre className='codeText' key={id}>{oneLine.line}</pre> 
                                ) : (
                                <p className="blog-paragraph" key={id}>
                                  {oneLine.image === true && Array.isArray(oneLine.src) ? (
                                    <div className='blog-img-container'>
                                      {/* Mapping over and the array of image paths */}
                                      {oneLine.src.map((src, index) => (
                                        <div className={`blog-img ${expandedImage === src ? 'expanded' : ''}`} 
                                        key={index}
                                        onClick={() => handleImageClick(src)}>
                                          <img src={src} alt={`Problems loading the image ${index + 1}.`}/>
                                        </div>
                                       ))}
                                    </div>
                                  ): (<span>{oneLine.line}</span>
                                  )}
                                </p>
                                ) 
                              );                            
                          })}
                      </div>
                      <div className="blog-post-footer">
                        <h5>#: {post.postTags}</h5>
                        <div className="theory"></div>
                      </div>
                    </div>
                )
            })}
              
              
        </div>        
    )
}