import React from 'react';
import styled from 'styled-components';
import { Frame, Card } from './';

const FrameCards = styled(Card)`
  flex: ${(props) => props.flex || '1'};
  &:last-child {
    border: none;
  }
`;

export function CardFrame(props) {
  const { children, className, direction } = props;

  const childCards =
    children && children.map ? (
      children.map((c, i) => (
        <FrameCards
          padded
          flex={c.props.flex}
          key={i}
          direction={direction || 'row'}
        >
          {c}
        </FrameCards>
      ))
    ) : (
      <FrameCards padded direction={direction || 'row'}>
        {children}
      </FrameCards>
    );

  return (
    <Frame className={className} direction={direction || 'row'}>
      {childCards}
    </Frame>
  );
}
