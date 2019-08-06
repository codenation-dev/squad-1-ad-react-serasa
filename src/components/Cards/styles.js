import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 250px;
  background: ${colors.white};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
      border-radius: 50%;
    }

    strong {
      font-size: 18px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: ${colors.dark};
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: ${colors.regular};
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: ${colors.light};
      }
    }
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${colors.white};
  border: 0;
  margin: 0 10px;
  cursor: pointer;
`;
