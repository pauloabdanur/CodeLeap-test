import { Content, Logout, MyContainer, Title, TitleBox } from './styles';
import NewPost from '../../components/NewPost';
import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { fetchPosts } from '../../actions/fetchPosts';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getUser } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Box, Pagination } from '@mui/material';
import Loader from '../../components/Loader';

const MainScreen = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const postStatus = useAppSelector((state) => state.posts.status);
  const postError = useAppSelector((state) => state.posts.error);
  const postsCount = useAppSelector((state) => state.posts.count);

  const [loggedUser, setLoggedUser] = useState(getUser());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loggedUser === '') {
      localStorage.setItem('username', '');
      navigate('/');
    }
    if (postStatus === 'idle') {
      dispatch(fetchPosts(0));
    }
  }, [postStatus, dispatch, loggedUser, navigate]);

  let content;
  if (postStatus === 'loading') {
    content = <Loader />;
  } else if (postStatus === 'complete') {
    content = posts.map((post) => <Post post={post} key={post.id} />);
  } else if (postStatus === 'failed') {
    content = <p>{postError}</p>;
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    if (page === 1) {
      dispatch(fetchPosts(0));
    }
    const newOffset = page * 10;
    dispatch(fetchPosts(newOffset));
  };

  return (
    <MyContainer>
      <Content>
        <TitleBox>
          <Title>CodeLeap Network</Title>
          <Logout onClick={() => setLoggedUser('')}>Logout</Logout>
        </TitleBox>
        <NewPost />
        {content}
        <Box display="flex" justifyContent="center" margin="25px">
          <Pagination
            count={Math.ceil(postsCount / 10) - 1}
            onChange={handlePageChange}
          />
        </Box>
      </Content>
    </MyContainer>
  );
};

export default MainScreen;
