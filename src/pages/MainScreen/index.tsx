import { Content, MyContainer, Title, TitleBox } from './styles';
import NewPost from '../../components/NewPost';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post';

const MainScreen = () => {
  const username = useAppSelector((state) => state.username.name);
  const posts = useAppSelector((state) => state.post.posts);
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
        {posts.map((post) => (
          <Post post={post} username={username} key={post.id} />
        ))}
      </Content>
    </MyContainer>
  );
};

export default MainScreen;
