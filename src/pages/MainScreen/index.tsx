import { Content, MyContainer, Title, TitleBox } from './styles';
import NewPost from '../../components/NewPost';
import { useEffect } from 'react';
import Post from '../../components/Post';
import { fetchPosts } from '../../actions/fetchPosts';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const MainScreen = () => {
  const posts = useAppSelector((state) => state.posts.posts);

  const postStatus = useAppSelector((state) => state.posts.status);
  const postError = useAppSelector((state) => state.posts.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts(0));
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'complete') {
    content = posts.map((post) => <Post post={post} key={post.id} />);
  } else if (postStatus === 'failed') {
    content = <p>{postError}</p>;
  }

  return (
    <MyContainer>
      <Content>
        <TitleBox>
          <Title>CodeLeap Network</Title>
        </TitleBox>
        <NewPost />
        {content}
      </Content>
    </MyContainer>
  );
};

export default MainScreen;
