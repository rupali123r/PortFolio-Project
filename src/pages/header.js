import { memo, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
function Header() {
    const manuref = useRef()
    // const {scrollPosition, setscrollPosition} = useState('');


    // useEffect(() =>{

    //     const handleScroll = () =>{
    //         setscrollPosition(window.scrollY)
    //     }
    // console.log("hang", handleScroll)
    //     window.addEventListener('scroll', handleScroll);
    //     return () =>{
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // },[]);

    // const  headerStyle = {
    //     backgroundColor: scrollPosition > 50 ? '#333' : '#222',
    // };console.log(scrollPosition,"==============", headerStyle, "===========", window.scrollY)

   function manubar (){
    manuref.current.style.display ="block"

   }

   function closebar(){
    manuref.current.style.display ="none"
   }

    
    return (
        <>
            <div className="container-fluid bg-gray pt-3 pb-3" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <h1 className="logo">Developer</h1>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-6">
              
                                <GiHamburgerMenu className="manu-bar" onClick={manubar}/>
                              
                            <ul  ref={manuref} className="header" >
                            <IoMdCloseCircleOutline className="close" onClick={closebar} />
                                <li><Link to="/" className="nav-link">Home</Link></li>
                                <li><Link to="/about" className="nav-link">About Us</Link></li>
                                <li><Link to="/project" className="nav-link">Project</Link></li>
                                <li><Link to="/skill" className="nav-link">Skills</Link></li>
                                <li><Link to="/footer" className="nav-link">Contact Us</Link></li>
                            </ul>
                            

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default memo(Header);