import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  transition: opacity .3s;
  width: 298px;

  &:hover,
  &:focus {
    opacity: .5;
  }

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  border-radius: 10px;
  position: relative;
  align-items: flex-end;
  padding: 16px;
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
