import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { saveAs } from 'file-saver'

const Header = () => {
    const [showFileMenu, updateShowFileMenu] = useState<boolean>(false)
    const [showViewMenu, updateShowViewMenu] = useState<boolean>(false)
    const fileMenu = useRef<HTMLInputElement>(null)
    const viewMenu = useRef<HTMLInputElement>(null)
    const filebtn = useRef<HTMLInputElement>(null)
    const viewbtn = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function handleClickFileMenu(e:MouseEvent){
            e.preventDefault()
            e.target !== fileMenu.current && e.target !== filebtn.current && updateShowFileMenu(false)
        }
        function handleClickViewMenu(e:MouseEvent){
            e.preventDefault()
            e.target !== viewMenu.current && e.target !== viewbtn.current && updateShowViewMenu(false)
        }
        document.addEventListener("click",handleClickFileMenu)
        document.addEventListener("click",handleClickViewMenu)
        return () => {
            document.removeEventListener("click",handleClickFileMenu)
            document.removeEventListener("click",handleClickViewMenu)
        }
    },[])

    return (
    <div className="flex justify-center items-center rounded-t-sm shadow-md bg-gradient-to-r from-blue-500 to-blue-600 h-12 w-5/6">
        <div className=" flex justify-center items-center">
            {/* Dropdown btn: */}
            <div className="inline-block relative items-start z-50" >
                <motion.div 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}} 
                    ref={filebtn} 
                    className="text-white text-sm font-sans font-medium cursor-pointer m-1 mb-2 bg-transparent rounded-md p-2 hover:bg-blue-600 w-16 text-center" 
                    onClick={()=>updateShowFileMenu(!showFileMenu)}>
                    File
                </motion.div>
                    {showFileMenu&&
                        <motion.div 
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -20 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.15 }}
                            id='dropdown' 
                            ref={fileMenu} 
                            className="h-32 w-24 rounded-b-md bg-blue-500 shadow-xl absolute">
                            {/* dropdown options here */}
                        </motion.div>
                    }
            </div>
            
            {/* Normal btn */}
            <motion.div 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="text-white text-sm font-sans font-medium cursor-pointer m-1 mb-2 bg-transparent rounded-md p-2 hover:bg-blue-600 w-16 text-center">
                Save
            </motion.div>
            {/* Dropdown btn: */}
            <div className="inline-block relative items-start z-50">
                <motion.div
                    ref={viewbtn} 
                    className="text-white text-sm font-sans font-medium cursor-pointer m-1 mb-2 bg-transparent rounded-md p-2 hover:bg-blue-600 w-16 text-center" 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    onClick={()=>updateShowViewMenu(!showViewMenu)}>
                    View
                </motion.div>
                    {showViewMenu&&
                        <motion.div 
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -20 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.15 }}
                            id='dropdown' 
                            ref={viewMenu} 
                            className="h-32 w-24 rounded-b-md bg-blue-500 shadow-xl absolute z-10">
                            {/* dropdown options here */}
                        </motion.div>
                    }
            </div>
        </div>
    </div>
  )
}

export default Header