import { DealList } from "../DealList";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NewDeal } from "../NewDeal";
import { Container } from "./styles";

export const Main: React.FC = () => {
    return (
        <Container>
            <Header />
            <NewDeal />
            <DealList />
            <Footer />
        </Container>
    )
}