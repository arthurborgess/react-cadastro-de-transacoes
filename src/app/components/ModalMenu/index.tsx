import { IDeal } from "../../types/Deal";
import { Container } from "./styles";

type Props = {
    onClose: () => void;
    setDealData: (dealData: IDeal[]) => void;
}

export const ModalMenu = ({ onClose, setDealData }: Props) => {

    const eraseAllData = () => {
        if (window.confirm('Todos os dados serão excluídos! Deseja prosseguir?')) {
            setDealData([]);
            localStorage.clear();
        }
    }

    return (
        <Container>
            <div className="close" onClick={onClose}>⨯</div>
            <div className="navbar">
                <div className="navbar-item">
                    <span><a><strong>Cadastro de transações</strong></a></span>
                </div>
                <div className="line"></div>
                <div className="navbar-item" onClick={eraseAllData}>
                    <span><a><strong>Limpar dados</strong></a></span>
                </div>
            </div>
        </Container>
    );
}