import React from 'react'


const Login = ({email,
                setEmail,
                password, 
                setPassword, 
                handleLogin, 
                handleSignup, 
                hasAccount, 
                setHasAccount, 
                emailError, 
                passwordError}) =>{
                
    return (
        <section className = 'login'>

            <img
            src = "https://svgsilh.com/svg/37261.svg"
            alt = "logo"
            className = "logo"
            />

            <div className = "loginContainer">

                <label>Email</label>
                <input
                type = "text"
                autoFocus
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg"> {emailError}</p>
                <label>Password</label>
                <input
                type = "password"
                required
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <p className = "errorMsg">{passwordError}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick ={handleLogin}>Sign in</button>
                        <p>Don't Have an Account ? <button onClick = {() => setHasAccount(!hasAccount)}>Sign up</button></p>    
                        
                        </>
                    )
                        :(

                        <>
                        <button onClick = {handleSignup}>Sign up</button>
                        <p>Have an Account ? <button onClick = {() => setHasAccount(!hasAccount)}>Sign In</button></p>    
                            
                            </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Login