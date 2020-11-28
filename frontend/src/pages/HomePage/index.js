import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { ContentContainer, Form,AdsBlock } from './styles';
import ShortenerService from '../../services/shortenerService';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isloading: false,
            url: '',
            code: '',
            errorMessage: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { url } = this.state;
        this.setState({ isloading: true, errorMessage: '' });

        if (!url) {
            this.setState({ isloading: false, errorMessage: 'Informe uma URL valida!' })
        } else {
            try {
                const service = new ShortenerService();
                const result = await service.generate({ url });
                this.setState({ isloading: false, code: result.code })
            } catch (error) {
                this.setState({ isloading: false, errorMessage: 'Ops, ocorreu um erro ao tentar encurtar a url.' })
            }
        }
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {
        const { isloading, errorMessage, code } = this.state;
        return (
            <Container>
                <Header>Seu novo encurtador de URL. :)</Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite a url para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })} />

                            <InputGroup.Append>
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {isloading ? (
                            <Spinner animation="border" />
                        ) : (
                                code && (
                                    <>
                                        <InputGroup>
                                            <FormControl
                                                defaultValue={`https://pitu.tk/${code}`}
                                                autoFocus={true}
                                                ref={(input) => this.inputURL = input}
                                            />

                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" onClick={() => this.copyToClipboard()} >Copiar</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <p>Para acompanhar as estatísticas, acesse https://pitu.tk/{code}/stats</p>
                                    </>
                                )
                            )}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
                <ContentContainer>
                    <AdsBlock>Adense</AdsBlock>
                </ContentContainer>
            </Container>
        )
    }
}

export default HomePage;