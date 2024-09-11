import React, {useState} from 'react';

export default function Blog({posts, input}){
    //create a new array by filtering the original one
    console.log(posts);
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
      }
    }

    )

    return (
        <div className="blogs">
            {filteredPosts.map((post) => {
                return(
                    <div className="blog reveal active">
                      <h3 className="post-title">{post.postTitle}</h3>
                      <div className="post-body">
                        {post.postLines.map((oneLine, id) => {
                              return(
                                oneLine.code === true ? (
                                  <pre className='codeText' key={id}>{oneLine.line}</pre> 
                                ) : (<p key={id}>
                                  {oneLine.image === true? (
                                    <h4>image</h4>
                                  ): (<h4></h4>)
                                  }
                                   
                                  {oneLine.line}</p>)
                                 
                              )                            
                          }

                          /*
                          oneLine.image === true ? (
                                  
                                ) 
                          */

                        )}
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