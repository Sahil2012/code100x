import TopBar from '../components/TopBar';
import MenuButton from '../components/MenuButton';
import VideoCard from '../components/VideoCard';
import VideoGrid from '../components/VideoGrid';


export default function HomePage() {
  let list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

    return (
    <div>
      <TopBar />
      <div className='grid grid-cols-8  bg-black'>
        <div className='hidden md:visible md:col-span-1  md:flex md:flex-col md:items-center md:h-screen md:overflow-y-auto md:sticky md:top-0'>
          {
            list.map((l) => <MenuButton />)
          }
        </div>
        <VideoGrid />
      </div>
    </div>
  )
}
