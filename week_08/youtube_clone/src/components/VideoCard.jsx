
export default function VideoCard() {
  return (
    <div className='bg-black text-slate-50 flex flex-col justify-center items-center w-96 rounded-lg shadow-md' >
      <div>
        <img className = 'rounded-lg' src='src/assets/thumbnail.jpg' />
      </div>
      <div className="flex items-start w-full px-2">
        <div className="py-3">
            <img className='rounded-full w-12 h-12'src='src/assets/thumbnail.jpg' />
        </div>
        <div className="px-5 font-normal py-2">
            <div>Gand pe tatoo !</div>
            <div>Main samay hoon</div>
            <div className="font-medium">250k views . 3 months ago</div>
        </div>
      </div>
    </div>
  )
}
