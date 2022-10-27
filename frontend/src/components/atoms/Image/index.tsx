import { ImageWrapper, StyledImage } from './styles';
import { PropTypes } from './types';
import React from 'react';

/**
 * width와 height를 받아 이미지를 감싸는 div를 생성
 * height가 없으면 width 기준 정해진 비율로 생성
 *
 * @author jojo
 */
const Image = ({ width, height, src, alt }: PropTypes) => {
  return (
    <ImageWrapper width={width} height={height}>
      <StyledImage src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default Image;
