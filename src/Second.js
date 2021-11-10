import React from 'react'

const Second = () => {
    return (
        <div style={{marginLeft:'35rem'}}>
            <form style={{backgroundColor:'beige', width:'400px' ,padding:'50px'}}>
                Email:<input type="text"/>
                <br/>
                Password: <input type="password"/>
                <br/>
                <button type="submit" value="send">Send</button>
            </form>
            </div>
    )
}

export default Second
