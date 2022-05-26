import {FaBold,FaItalic,FaUnderline,FaAlignCenter,FaAlignLeft,FaAlignRight,FaAlignJustify,FaFont,FaArrowDown,FaArrowUp} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {ImCross} from 'react-icons/im'
import { useEffect, useRef, useState } from 'react'
import { ChromePicker } from 'react-color'
const Navbar = () => {
    const [fontInput, changeFontInput] = useState<string>('Arial')
    const [fontSize, changeFontSize] = useState<number>(12)
    const [showFontMenu, updateShowFontMenu] = useState<boolean>(false)
    const [showColorMenu,changeShowColorMenu] = useState<boolean>(false)
    const fontMenu = useRef(null)
    const fontInputText = useRef(null)
    const picker = useRef(null)
    const [color, changeColor] = useState<string>('#000000')
    const colorpickerbtn = useRef(null)

    function increaseFontSize(increase:boolean) {
        if(increase){
            changeFontSize(fontSize + 2)
        }
        else if(fontSize >= 2){
            changeFontSize(fontSize - 2)
        }
        document.execCommand('fontSize',false,'7')
        var fontElements:any = window.getSelection()?.anchorNode?.parentNode
        fontElements.removeAttribute("size");
        fontElements.style.fontSize = fontSize + 'px';
    }

    useEffect(() => {
        function handleClickFontMenu(e:MouseEvent){
            e.preventDefault()
            e.target !== fontMenu.current && e.target !== fontInputText.current && updateShowFontMenu(false)
        }
        function handleClickColorMenu(e:MouseEvent){
            e.preventDefault()
            if(e.target !== picker.current && e.target !== colorpickerbtn.current){
                changeShowColorMenu(false)
                }
        }
        document.addEventListener("click",handleClickColorMenu)
        document.addEventListener("click",handleClickFontMenu)
        return () => {
            document.removeEventListener("click",handleClickFontMenu)
            document.removeEventListener("click",handleClickColorMenu)
        }
    },[])

    useEffect(() => {
        document.execCommand('foreColor',false,color)
    },[color])

    return (
    <div className="flex justify-center sm:overflow-y-visible sm:overflow-x-scroll md:overflow-visible text-blue-500 items-center border-b border-gray-300 shadow-md bg-white h-24 w-5/6">
            {/*<ImCross/>*/}
            <div className='flex items-center justify-center'>
                <motion.div whileTap={{scale:0.95}}  className=' rounded-t-ms cursor-pointer m-0.5' onClick={()=>increaseFontSize(true)}>
                        <FaArrowUp className='h-4 w-4'/>
                    </motion.div>
                    <motion.div whileTap={{scale:0.95}}  className='rounded-b-ms cursor-pointer m-0.5' onClick={()=>increaseFontSize(false)}>
                        <FaArrowDown className='h-4 w-4'/>
                </motion.div>
                <motion.input 
                    tabIndex={1}
                    whileTap={{scale:0.95}} 
                    className='w-7 border border-blue-500 outline-none rounded-lg text-center' 
                    onChange={(e:any)=>!isNaN(e.target.value)?changeFontSize(e.target.value):changeFontSize(12)} 
                    value={fontSize}/>
                    {/*Divider*/}
                <Icon action={'bold'} icon={<FaBold/>}/>
                <Icon action={'italic'} icon={<FaItalic/>}/>
                <Icon action={'underline'} icon={<FaUnderline/>}/>
                    {/* Divider */}
                <Icon action={'justifyFull'} icon={<FaAlignJustify/>}/>
                <Icon action={'justifyLeft'} icon={<FaAlignLeft/>}/>
                <Icon action={'justifyCenter'} icon={<FaAlignCenter/>}/>
                <Icon action={'justifyRight'} icon={<FaAlignRight/>}/>
                <div  className='inline-block hover:text-blue-600 items-center cursor-pointer overflow-visible z-40 m-1 h-6 w-6 p-1 rounded-full'>    
                    <div onClick={()=>changeShowColorMenu(!showColorMenu)} ref={colorpickerbtn} style={{background:color}} className='w-full h-full rounded-full'></div>
                    {showColorMenu &&
                        <ChromePicker className='z-50' ref={picker} color={color} onChange={(new_color:any)=>changeColor(new_color.hex)}/>
                    }
                </div>
        {window.innerWidth > 400&&    
            <div className='inline-block relative items-start'>
                <motion.div
                    style={{borderRadius:showFontMenu?'1rem 1rem 0rem 0':'1rem'}}
                    ref={fontInputText} 
                    onClick={()=>updateShowFontMenu(!showFontMenu)}
                    whileTap={{scale:0.95}} 
                    className='outline-none font-sans cursor-pointer text-blue-500 h-8 w-32 placeholder-blue-500 text-center border-blue-500 rounded-2xl p-1 border'>
                        {fontInput}
                    </motion.div>
            {showFontMenu&&
                <motion.div 
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -20 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.15 }}
                            ref={fontMenu} 
                            className="h-32 w-32 rounded-b-md bg-blue-500 shadow-xl absolute overflow-auto">
                                <FontOption updateName={changeFontInput} name={'Arial'}/>
                                <FontOption updateName={changeFontInput} name={'Bahnschrift'}/>
                                <FontOption updateName={changeFontInput} name={'Arial Black'}/>
                                <FontOption updateName={changeFontInput} name={'Verdana'}/>
                                <FontOption updateName={changeFontInput} name={'Tahoma'}/>
                                <FontOption updateName={changeFontInput} name={'Trebuchet MS'}/>
                                <FontOption updateName={changeFontInput} name={'Impact'}/>
                                <FontOption updateName={changeFontInput} name={'Times New Roman'}/>
                                <FontOption updateName={changeFontInput} name={'Didot'}/>
                                <FontOption updateName={changeFontInput} name={'Cambria'}/>
                                <FontOption updateName={changeFontInput} name={'Georgia'}/>
                                <FontOption updateName={changeFontInput} name={'American Typewriter'}/>
                                <FontOption updateName={changeFontInput} name={'Andalé Mono'}/>
                                <FontOption updateName={changeFontInput} name={'Courier'}/>
                                <FontOption updateName={changeFontInput} name={'Lucida Console'}/>
                                <FontOption updateName={changeFontInput} name={'Monaco'}/>
                                <FontOption updateName={changeFontInput} name={'Bradley Hand'}/>
                                <FontOption updateName={changeFontInput} name={'Brush Script MT'}/>
                                <FontOption updateName={changeFontInput} name={'Luminari'}/>
                                <FontOption updateName={changeFontInput} name={'Comic Sans MS'}/>
                </motion.div>
            }
            </div>
        }        
        </div>
    </div>
  )
}

function FontOption({name,updateName}:any){
    return(
        <motion.div onClick={()=>{
            document.execCommand('fontName',false,name)
            updateName(name)
            console.log(name)
            }} className='text-white text-center cursor-pointer hover:bg-blue-600'>
            {name}
        </motion.div>
    )
}

function Icon({icon,action}:any) {
    return(
        <motion.div 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            onClick={()=>document.execCommand(action)}
            className='h-6 w-6 flex justify-center items-center cursor-pointer m-1 text-blue-500 hover:text-blue-600 p-1 rounded-full'>
            {icon}
        </motion.div>
        )
}

export default Navbar