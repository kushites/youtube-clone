// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kfg&key=AIzaSyBbx_CehEAJwDUjTdKzBgsRUmeWkcrIxrs 



const searching= async()=>{
   const search=document.querySelector("#searchbar").value
const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search}&key=AIzaSyBbx_CehEAJwDUjTdKzBgsRUmeWkcrIxrs`)
let res = await data.json()
console.log(res.items)
searchap(res.items)
}
const searchap=(data)=>{
    document.querySelector("#showvid").innerHTML=null
    data.map((el)=>{
        let div=document.createElement("div")
        let frame=document.createElement("iframe")
        let h4=document.createElement("h4")
        let img=document.createElement("img")
        let p=document.createElement("p")
        frame.src=el.snippet.thumbnails.medium.url 
        h4.innerText=el.snippet.title;
        img.setAttribute("class", "chicon")
        img.src=`https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png`
        p.innerText=el.snippet.channelTitle
       
        div.append(frame,img,h4,p)
        div.onclick=()=>{onanother(el)};
            
       
        document.querySelector("#showvid").append(div)
      
    })

}
const changeside=()=>{
    if(document.querySelector("#sidebar1").style.display=="none"){
        document.querySelector("#sidebar1").style.display="block"
        document.querySelector("#sidebar").style.display="none"
        document.querySelector("#showvid").style.marginLeft="80px"
    }
    else {
        document.querySelector("#sidebar1").style.display="none"
        document.querySelector("#sidebar").style.display="block"
        document.querySelector("#showvid").style.marginLeft="200px"
    }
}
const appending= async()=>{
    const search=document.querySelector("#searchbar").value
 const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=popular&key=AIzaSyBbx_CehEAJwDUjTdKzBgsRUmeWkcrIxrs`)
 let res = await data.json()
 console.log(res.items)
 searchap(res.items)
 }
 appending()

 let arr=[]
 function onanother(el){
    localStorage.getItem("video")=null
     console.log(el)
    arr.push(el)
    localStorage.setItem("video",JSON.stringify(arr))
    window.location.href="show.html"
 }
