import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    NavLink,
} from "reactstrap";

class DataPenjual extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Penjual: [],
            // miniModal: false,
            newBarangModal: false,
        };
    }

    // toggleModal = modalState => {
    //     this.setState({
    //         [modalState]: !this.state[modalState]
    //     });
    // };

    toogleNewProductModal() {
        this.setState({
            newBarangModal: true,
        });
        this.loadPenjual();
    }
    toogleNeProductkModal2() {
        this.setState({
            newBarangModal: false,
        });
    }
    loadPenjual() {
        axios
            .get(
                "/api/findSeller/" +
                    this.props.Barang.id_penjual
            )
            .then((response) => {
                this.setState({
                    Penjual: response.data,
                });
            });
    }
    componentWillMount() {
        this.loadPenjual();
    }

    render() {
        return (
            <div>
                <p
                    color="primary"
                    className="align-items-center text-center"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Penjual
                </p>
                <Modal
                    isOpen={this.state.newBarangModal}
                    toggle={this.toogleNewProductModal.bind(this)}
                >
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            onClick={this.toogleNeProductkModal2.bind(this)}
                        >
                            <i className="tim-icons icon-simple-remove text-danger" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                            <h3 className="mb-0 text-primary">Penjual</h3>
                        </div>
                    </div>
                    <div className="modal-body">
                        {/* <Label for="harga">Harga Barang</Label> */}
                        <b>Nama Penjual </b>
                        <p>{this.state.Penjual.nama}</p>
                        <b>Kontak </b>
                        <p>{this.state.Penjual.kontak}</p>
                    </div>
                    <ModalFooter>
                        <Button
                            className="btn-dark text-center"
                            color="primary"
                            onClick={this.toogleNeProductkModal2.bind(this)}
                        >
                            OK
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
    //     let Penjual = this.state.Penjual.map(Penjual => {
    //         return (
    //             <Col md="2">
    //                 <Card key={Penjual.id} className="card-coin card-plain">
    //                     <CardBody>
    //                         <Row>
    //                             <Col className="text-center" md="12">
    //                                 <h5 className="text-uppercase">
    //                                     {Barang.nama_barang}
    //                                 </h5>
    //                                 <span>Rp{Barang.harga}</span>
    //                                 <hr className="line-primary" />
    //                             </Col>
    //                         </Row>
    //                     </CardBody>
    //                 </Card>
    //             </Col>
    //         );
    //     });
    //     return <Row>{Barang}</Row>;
    // }
}
export default DataPenjual;
