

export default function SearchBar() {
  return (
    <div className="bg-slate-300 flex rounded-full p-2 items-center text-slate-50 px-5 w-96 justify-between">
        <input type="text" placeholder="Search" className="bg-inherit outline-none"/>
        <div className="ml-2">
            <img className="w-5 h-5 cursor-pointer" src="/src/assets/search.svg" />
        </div>
    </div>
  )
}
