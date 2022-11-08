import React from 'react';
import LikeComment from '../LikeComment';
import Text from '../../atoms/Text';
import { StyledPostSummary, IconTextWrapper } from './styles';
import { PostSummaryTypes } from './types';

/**
 * 게시글을 나타냅니다.
 * Page에서 데이터를 받아서 적용합니다.
 *
 * @author jini
 */
const PostSummary = ({ title, date, ...rest }: PostSummaryTypes) => {
  return (
    <StyledPostSummary>
      <Text size={1}>{title}</Text>
      <IconTextWrapper>
        <LikeComment {...rest}></LikeComment>
        <Text size={0.7}>{date}</Text>
      </IconTextWrapper>
    </StyledPostSummary>
  );
};

export default PostSummary;
