import { gql } from "@apollo/client";
import { Card } from "antd";
import { IBoard, IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import {
  Best_Wrapper,
  Wrapper,
  Best_Title,
  BestCard,
  MYIMG,
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

const BestImg: { [prop: string]: any } = {
  0: "https://cdn.crowdpic.net/list-thumb/thumb_l_8489C98D7004F1F8E6F02B6087776A1C.jpeg",
  1: "/images/04.jpg",
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
        <Best_Title>방문자들의 즐거운 수다</Best_Title>
        <Wrapper>
          {data?.fetchBoardsOfTheBest.map((el: IBoard, index: string) => (
            <BestCard
              hoverable
              cover={
                <MYIMG
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
