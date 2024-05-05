
import VideoCard from "./VideoCard";
export default function VideoGrid() {
    let list = [{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    },{
        img:"src/assets/thumbnail.jpg",
        channelImg:"src/assets/thumbnail.jpg",
        title:"Gand pe tatoo",
        channel:"Main samay hoon",
        views:"250k",
        timestamp:"3 months ago"
    }];

return (
    <div className='flex justify-center flex-wrap col-span-8 md:col-span-7'>
          {
            list.map((l) => <VideoCard video={l}/>)
          }
    </div>
  )
}
