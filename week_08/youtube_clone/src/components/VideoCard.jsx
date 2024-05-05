
export default function VideoCard(props) {
  console.log(props);
  return (
    <div className='bg-black text-slate-50 flex flex-col justify-center items-center max-w-96 max-h-80 rounded-lg shadow-md m-2 cursor-pointer' >
      <div>
        <img className = 'rounded-lg' src={props.video.img} />
      </div>
      <div className="flex items-start w-full px-2">
        <div className="py-3">
            <img className='rounded-full w-12 h-12'src={props.video.channelImg} />
        </div>
        <div className="px-5 font-normal py-2">
            <div>{props.video.title}</div>
            <div>{props.video.channel}</div>
            <div className="font-medium">{`${props.video.views} . ${props.video.timestamp}`}</div>
        </div>
      </div>
    </div>
  )
}
