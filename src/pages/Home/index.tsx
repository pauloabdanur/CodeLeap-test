import { MyButton, MyContainer } from './styles';
import Logo from '../../assets/images/codeleap_logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <MyContainer>
      <img src={Logo} alt="" />
      <MyButton onClick={() => navigate('/signup')}>Start Here</MyButton>
    </MyContainer>
  );
};

export default Home;
