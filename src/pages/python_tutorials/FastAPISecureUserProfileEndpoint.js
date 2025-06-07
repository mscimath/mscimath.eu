import './Tutorials.css'
export default function FastAPISecureUserProfileEndpoint(){
    return (
        <section className='tutorial-section'>
            <h2 className="tutorial-title"> 
                FastAPI Tutorial: Building a Secure User Profile Update Endpoint
            </h2>
            <div className='tutorial-goals'>
                <h3 className="tutorial-goal">Goal</h3>
                Create a <span className="code-highlight">PUT</span> endpoint where users can update:
                <ul>
                    <li>Their name</li>
                    <li>Email address</li>
                    <li>Profile picture URL</li>
                </ul>
                The endpoint should:
                <ul>
                    <li>Authenticate users</li>
                    <li>Validate inputs</li>
                    <li>Handle missing users</li>
                    <li>Return proper status codes</li>
                </ul>
            </div>
            <p className="tutorial-description">
                <span className="tutorial-first-letter">I</span>n this tutorial, we'll build a simple but real-world API endpoint using <span className="code-highlight">FastAPI</span>
                that allows users to update their profile - including name, email, and profile picture URL. 
                We'll also write a few tests to make sure it works as expected.
            </p>
            
            <p>We'll jump straight into the code - then break it down.</p>
            <div className="tutorial-code-container">
                <h3 className="tutorial-code-title"></h3>
                <pre className="tutorial-code-example">
                    <code>
                        {`
    from fastapi import FastAPI, HTTPException 
    from pydantic import BaseModel, EmailStr 
    from typing import Optional 
    
    app = FastAPI()
    
    class UserUpdate(BaseModel):
        name: Optional[str] 
        email: Optional[EmailStr] 
        profile_picture_url: Optional[str] 
    
    @app.put("/users/&#123;used_id&#125;") 
    async def update_user(user_id: int, user_update: UserUpdate): 
        user = get_user_by_id(user_id) # Simulate DB access 
        if not user: 
            raise HTTPException(status_code=404, detail="User not found") 
            
        if user_update.name: 
            user.name
                        `}
                    </code>
                </pre>
            </div>

       
        </section>
    )
}