import { Content, MyContainer, Title, TitleBox } from './styles';
import NewPost from '../../components/NewPost';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post';

const MainScreen = () => {
  const username = useAppSelector((state) => state.username.name);
  const contents = useAppSelector((state) => state.createContent.contents);
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
        {contents.map((content) => (
          <Post content={content} username={username} key={content.id} />
        ))}
      </Content>
    </MyContainer>
  );
};

export default MainScreen;
