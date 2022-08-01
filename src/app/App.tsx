import { useState } from "react";
import { Container, GlobalStyle } from "./App.styles";
import { DealList, Footer, Header, NewDeal } from "./components";
import { IDeal } from "./types/Deal";

export const App = () => {

  const [dealData, setDealData] = useState<IDeal[]>([]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header setDealData={setDealData} />
        <NewDeal dealData={dealData} setDealData={setDealData} />
        <DealList dealData={dealData} setDealData={setDealData} />
        <Footer />
      </Container>
    </>
  );
}
