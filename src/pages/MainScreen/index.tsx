import { Content, MyContainer, Title, TitleBox } from './styles';
import NewPost from '../../components/NewPost';
import Posts from '../../components/Posts';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
  const username = useAppSelector((state) => state.username.name);
  const navigate = useNavigate();

  useEffect(() => {
    if (username === '') {
      navigate('/');
    }
  });

  return (
    <MyContainer>
      <Content>
        <TitleBox>
          <Title>CodeLeap Network</Title>
        </TitleBox>
        <NewPost />
        <Posts />
      </Content>
    </MyContainer>
  );
};

export default MainScreen;
