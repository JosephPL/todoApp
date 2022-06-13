import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <NavLink to='/'>All</NavLink> 
        <NavLink to='/active'>Active</NavLink> 
        <NavLink to='/complete'>Complete</NavLink> 
    </nav>
  )
};

export default Nav;