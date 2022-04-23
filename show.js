let data =JSON.parse(localStorage.getItem("video"))
console.log(data[0].id.videoId)
app(data)
function app(data){

    
  
       
            document.querySelector("#bigpage").innerHTML=`<iframe width="950" height="400" src="https://www.youtube.com/embed/${data[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            <h4>${data[0].snippet.tile}</h4>
                                                            <p>${data[0].snippet.description}</p>`
     
        
}
const appending= async()=>{
    
 const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=popular&key=AIzaSyBbx_CehEAJwDUjTdKzBgsRUmeWkcrIxrs`)
 let res = await data.json()
 console.log(res.items)
 searchap(res.items)
 }
 appending()
 const searchap=(data)=>{
    document.querySelector("#relatable").innerHTML=null
    data.map((el)=>{
        let div=document.createElement("div")
        let frame=document.createElement("iframe")
        let h4=document.createElement("h4")
        
        let p=document.createElement("p")
        frame.src=el.snippet.thumbnails.medium.url 
        h4.innerText=el.snippet.title;
        
       
        p.innerText=el.snippet.channelTitle
       
        div.append(frame,h4,p)
        div.onclick=()=>{onanother(el)};
            
       
        document.querySelector("#relatable").append(div)
      
    })

}
