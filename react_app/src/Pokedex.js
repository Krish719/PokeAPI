import {useNavigate} from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem('pokeeToken')
        navigate("/");
    }
    return(
        <>
        
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>PokeDex</h1>
                <p>Hi, this is your PokeDex</p>
                <div>
                    <button type = 'button' onClick= {signOut}>Sign Out</button>
                </div>
            </div>
            
        </>
    )
}