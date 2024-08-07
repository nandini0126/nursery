const error = (req,res)=>{
    res.send(`<div>
        <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" height="300px" style="display: block; margin: 50px auto;">
        <h1 style="text-align: center; color: #0067c4;">404 Not Found</h1>
        </div>`)
}

export {error}