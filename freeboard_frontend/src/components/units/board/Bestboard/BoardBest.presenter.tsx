import { gql } from "@apollo/client";
import { Card } from "antd";
import {
  IBoard,
  IQuery,
  Maybe,
  Scalars,
} from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import {
  Best_Wrapper,
  Wrapper,
  Best_Title,
  BestCard,
} from "../Bestboard/BoardBest.styles";
import { DataIndex } from "rc-table/lib/interface";

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

type IBestImg = {
  // BestImg: Maybe<Array<Scalars['String']>>
  [index: string]: string;
};

const BestImg: { 0: any; 1: string; 2: string; 3: string } = {
  0: "./images/벽조명.jpg",
  1: "./images/카페인테리어.jpg",
  2: "/images/원목조리기구.png",
  3: "/images/책위조명.jpg",
};

export default function BoardBest() {
  S;
  const { Meta } = Card;
  const isActive = true;

  const { data } = useQuery(FETCH_BOARDS_OF_THEBEST);

  return (
    <>
      <Best_Wrapper>
        <Best_Title>방문자들의 즐거운 수다</Best_Title>
        <Wrapper>
          {data?.fetchBoardsOfTheBest.map((el: IBoard, index: string) => (
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
