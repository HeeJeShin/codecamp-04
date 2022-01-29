import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const BestBoardWrapper = styled.div`
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
  background-color: #edeae3;

  @media (min-width: 768px) and (max-width: 11990x) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BestItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (min-width: 768px) and (max-width: 11990x) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Myself = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2027px;
  background-color: #edceba;
  text-align: center;
  padding: 20px;
  margin-top: 100px;
`;

export const HomeTitle = styled.div`
  font-size: 25px;
  padding: 10px;
`;

export const Remarks = styled.div`
  padding: 20px;
`;

export const HomeContents = styled.div`
  padding: 3px;
`;

export const MyStack = styled.div`
  margin-top: 100px;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
`;

export const StackText = styled.div`
  text-align: center;
  font-size: 25px;
`;

export const StackImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
  width: 50%;
  margin-left: 450px;
`;

export const StackImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 45px;
`;
