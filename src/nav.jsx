
import {Link} from "react-router-dom"
function Nav() {
    return (
        <div className="w-full h-20  text-white fixed top-0 left-0 z-50 navv">
            <div className="w-4/12 h-16 text-white  pt-2 px-16 absolute top-2 left-20 logo text-3xl">
                <Link to="/" className="logo"><h1>Haidi Romany</h1></Link>
            </div>
            <div className="w-5/12 h-16 text-white font-bold pt-4 px-16 absolute top-2 right-28 flex justify-between text-l navsword">
                
                <Link onClick={() => {
                        document.getElementById("home")?.scrollIntoView({
                        behavior: "smooth",
                        });
                    }} className="logo2">Home</Link>   
                <Link className="logo2"
                    onClick={() => {
                        document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                        });
                    }}
                >About</Link>
                <Link className="logo2"
                    onClick={() => {
                        document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                        });
                    }}
                >Services</Link>
                <Link className="logo2"onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        });
                    }}
                    >Contact</Link>
            </div>
        </div>
    )
}

export default Nav
