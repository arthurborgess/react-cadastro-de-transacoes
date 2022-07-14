import { Container } from "./styles";

interface ModalProps {
    onClose: () => void;
}

export const ModalMenu: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <Container>
            <div className="close" onClick={onClose}>⨯</div>
            <div className="navbar">
                <div className="navbar-item">
                    <span><a href="#'"><strong>Cadastro de transações</strong></a></span>
                </div>
                <div className="navbar-item">
                    <span><a href="#'"><strong>Limpar dados</strong></a></span>
                </div>
            </div>
        </Container>
    );
}