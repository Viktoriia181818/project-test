import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import logo from '../../images/logo.svg';
import { StyledHeader } from './AppBar.styled';


export const AppBar = () => {
  return (
    
    <StyledHeader>
   
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    
      <AuthNav />
    </StyledHeader>
  );
};
