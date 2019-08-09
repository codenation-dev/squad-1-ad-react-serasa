import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid ${colors.lighter};
  list-style: none;

  h1 {
    padding: 15px 10px;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid ${colors.lighter};
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    div {
      flex: 1;
      margin-left: 15px;

      h2 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;

        a {
          text-decoration: none;
          color: ${colors.primary};

          &:hover {
            color: ${colors.primaryDark};
          }
        }

        strong {
          font-size: 16px;

          &:hover {
            color: ${colors.regular};
          }
        }

        span {
          background: ${colors.lighter};
          color: ${colors.darker};
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: ${colors.darker};
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  p {
    font-style: italic;
    margin-left: 5px;
    font-size: 18px;
  }
`;
