const NewsLater = () => {
    return (
        <div className="news">
            <div className="news-icon"><i class="bi bi-cursor-fill "></i>
            </div>
             <h1>
             Subscribe to get information, latest news and other
interesting offers about Cobham

             </h1>
         
<form>
<div class="inputContainer">
<i class="fa fa-user icon ">  <svg className="input-icon" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" stroke-linecap="round"/>
<rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D"/>
</svg> </i>
<input class="Field" type="text" placeholder="Your email" />
</div>
             <button className="btn">Subscribe</button>
</form>
            
        </div>
    )
}

export default NewsLater
