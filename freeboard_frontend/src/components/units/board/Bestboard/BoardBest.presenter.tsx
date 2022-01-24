import { gql } from "@apollo/client";
import { Card } from "antd";
import { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import {
  Best_Wrapper,
  Wrapper,
  Best_Title,
  BestCard,
} from "../Bestboard/BoardBest.styles";

const FETCH_BOARDS_OF_THEBEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const BestImg = {
  0: "./images/벽조명.jpg",
  1: "./images/카페인테리어.jpg",
  2: "/images/원목조리기구.png",
  3: "/images/책위조명.jpg",
};

export default function BoardBest() {
  const { Meta } = Card;
  const isActive = true;

  const { data } = useQuery(FETCH_BOARDS_OF_THEBEST);

  return (
    <>
      <Best_Wrapper>
        <Best_Title>
          {" "}
          <h1>방문자들의 즐거운 수다</h1>
          <h2>놓치지 마세요</h2>
        </Best_Title>
        <Wrapper>
          {data?.fetchBoardsOfTheBest.map((el, index) => (
            <BestCard
              hoverable
              cover={
                <img
                  alt="example"
                  src={BestImg[index]}
                  // src="./images/펭수카톡.jpg"
                />
              }
            >
              <Meta
                title={el.title}
                description={
                  <div>
                    <span>
                      {getDate(el.createdAt)}
                      <br />
                      <br />
                    </span>
                    <span>{el.contents}</span>
                  </div>
                }
              />
            </BestCard>
          ))}
        </Wrapper>
      </Best_Wrapper>
    </>
  );
}
