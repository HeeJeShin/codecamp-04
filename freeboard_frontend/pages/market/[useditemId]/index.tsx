import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import QuestionsWrite from "../../../src/components/units/marketcomment/questions/write/QuestionsWrite.Container";
import QuestionsList from "../../../src/components/units/marketcomment/questions/list/QuestionsList.container"

const MarketDetailPage = () => {
  return (
    <>
      <MarketDetail />
      <QuestionsWrite />
      <QuestionsList />
    </>
  );
};
export default MarketDetailPage;
