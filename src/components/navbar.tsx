import {Menu, MenuItem} from "semantic-ui-react";
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
        <Menu fixed="top" size="huge">
            <MenuItem as={Link} to="/" style={{fontsize: "1.5rem"}}>
                Home
            </MenuItem>
            <MenuItem as={Link} to="/rated" style={{fontsize: "1.5rem"}}>
                Rated
            </MenuItem>
            <Menu.Menu position="right">
                <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem"}}>
                    Auth

                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
    
}