import React from 'react';
import styled from 'styled-components';

export const ColumnCard = styled.div`
  padding: ${(props) => props.padded && '30px 10px'};
  border-bottom: solid 2px ${(props) => props.theme.colors.main};
`;

export const RowCard = styled.div`
  padding: ${(props) => props.padded && '10px 30px'};
  border-right: solid 2px ${(props) => props.theme.colors.main};
`;

export function Card(props) {
  const { className, children, direction, padded } = props;

  return direction === 'column' ? (
    <ColumnCard className={className} padded={padded}>
      {children}
    </ColumnCard>
  ) : (
    <RowCard className={className} padded={padded}>
      {children}
    </RowCard>
  );
}
