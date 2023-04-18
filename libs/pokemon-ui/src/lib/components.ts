import styled from '@emotion/styled';

export const Main = styled.main`
  margin: 0 auto;
  background-color: black;
  color: white;
  max-width: 800px;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-column-gap: 1rem;
`;

export const InfoItem = styled.div`
  font-style: italic;
  text-align: right;
`;

export const InfoValue = styled.div`
  font-weight: bold;
`;

export const DetailContainer = styled.div`
  display: flex;
`;

export const BackButton = styled.div`
  color: white;
  font-size: 24pt;
  margin-bottom: 1rem;
  text-decoration: none;
`;

export const DetailInfoContainer = styled.div`
  flex: 0.7;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #666;
  padding-left: 10px;
  padding-bottom: 3rem;
`;

export const DetailImageContainer = styled.div`
  flex: 0.3;
`;

export const Input = styled.input`
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
  border-radius: 5px;
  font-size: x-large;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
  border-radius: 5px;
  font-size: x-large;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 1rem;
`;

export const MiniCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 0.5rem;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #666;
  border-radius: 20px;
  max-height: 24rem;
`;

export const ResponsiveImage = styled.img`
  width: 100%;
`;

export const PokemonName = styled.h3`
  font-size: 1.5rem;
  color: white;
`;
