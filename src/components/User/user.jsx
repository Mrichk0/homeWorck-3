import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'components/Box/Box';

const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.circle};
  width: ${p => p.theme.space[p.theme.space.length - 1]}px;
`;

const UserName = styled.p`
  font-size: ${p => p.theme.fontsSizes.l};
  color: ${p => p.theme.colors.primaryText};
  padding-left: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[0]};
`;

const MainContent = styled.p`
  color: ${p => p.theme.colors.secondText};
  padding: ${p => p.theme.space[2]}px;
  margin: 0;
`;

const SecondContent = styled.p`
  display: flex;
  margin: 0;
  margin-left: 15px;
  padding: 0;
`;

const SecondBox = styled.li`
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 0px;
  background: rgba(110, 105, 105, 0.507);
  padding-left: 0;
`;

export default function Profile({
  props: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <Box
      m="auto"
      mb={8}
      textAlign="center"
      width="220px"
      border={'normal'}
      borderColor={'online'}
      borderRadius={'normal'}
    >
      {/* textAlign="center" width={'xl'} bg={'third'} */}
      <Box>
        <Avatar src={avatar} />
        <UserName>{username}</UserName>
        <MainContent>{tag}</MainContent>
        <MainContent>{location}</MainContent>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        textAlign="center"
        m="0"
        p="0"
        as="ul"
      >
        <SecondBox>
          <SecondContent>Followers:</SecondContent>
          <SecondContent>{followers}</SecondContent>
        </SecondBox>
        <SecondBox>
          <SecondContent>Views:</SecondContent>
          <SecondContent>{views}</SecondContent>
        </SecondBox>
        <SecondBox>
          <SecondContent>Likes:</SecondContent>
          <SecondContent>{likes}</SecondContent>
        </SecondBox>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
