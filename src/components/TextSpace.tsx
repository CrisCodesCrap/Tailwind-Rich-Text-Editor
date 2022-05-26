const TextSpace = () => {
  return (
    <div className="h-144 w-5/6 bg-white flex items-center justify-center ">
      <div contentEditable={true} className="border-gray-300 outline-none scroll-smooth overflow-y-scroll rounded-b-sm bg-white h-144 w-5/6 border-b border-l border-r "/>
    </div>
  )
}

export default TextSpace