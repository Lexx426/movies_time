import {Button, Menu, MenuItem} from "semantic-ui-react";
import {Link, useNavigate} from "react-router-dom";


export const Navbar = () => {

    const isLoggedIn = localStorage.getItem("guest_session_id") !== null;

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("guest_session_id");
        navigate("/auth");
    }
    return (
        <Menu fixed="top" size="huge">
            <MenuItem as={Link} to="/" style={{fontsize: "1.5rem"}}>
                Home
            </MenuItem>
            <MenuItem as={Link} to="/rated" style={{fontsize: "1.5rem"}}>
                Rated
            </MenuItem>
            <Menu.Menu position="right">
                { isLoggedIn ? (
                    <Menu.Item as={Button} onClick={logout} style={{ fontSize: "1.5rem"}}>
                        Log Out
                    </Menu.Item>
                ) : (
                    <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem"}}>
                        Auth
                    </Menu.Item>
                )}
            </Menu.Menu>
        </Menu>
    )
    
}