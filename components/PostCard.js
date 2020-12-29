import {
  Card,
  Divider,
  PostText,
} from '../styles/FeedStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const PostCard = ({item}) => {
  

  return (
    <Card>
      
      <PostText>{item.post}</PostText>
      {<Divider />}

      
    </Card>
  );
};

export default PostCard;
