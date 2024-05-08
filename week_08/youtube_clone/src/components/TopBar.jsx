import SearchBar from "./SearchBar";


export default function TopBar() {
  return (
    <div className="sticky top-0">
      <div className="bg-black flex justify-between px-2 items-center shadow-md py-2 text-slate-50">
        <div className="w-32 h-5">
            <img src="/src/assets/YouTube_logo_2017.svg" />
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="font-bold">
            Sign In
        </div>
    </div>
    </div>
  )
}
