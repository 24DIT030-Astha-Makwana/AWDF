import { Link } from "react-router-dom";

function navbar(){
 return(
    <nav style={{display: 'flex', justifyContent: 'right', alignItems: 'center', padding: '1rem',backgroundColor: 'white'}}>
        <Link to="/" style={{margin: '0 10px', background: 'rgb(206, 156, 210)', fontSize: '20px',borderRadius: '50px', padding: '25px',color: 'black',border: '1px solid #ccc'}}>Home</Link>
        <span> </span>
        <Link to="/projects" style={{margin: '0 10px', background: 'rgb(206, 156, 210)  ', borderRadius: '50px', fontSize: '20px', padding: '25px',color: 'black',border: '1px solid #ccc'}}>Projects</Link>
        <Link to="/contact" style={{margin: '0 10px', background: 'rgb(206, 156, 210)', borderRadius: '50px',fontSize: '20px', padding: '25px',color: 'black  ',border: '1px solid #ccc'}}>Contact</Link>
    </nav>
 )   
}
export default navbar;