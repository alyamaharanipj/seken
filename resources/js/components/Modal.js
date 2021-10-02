import React from "react";
import {
    Button,
    Modal,
    ModalFooter
} from "reactstrap";
export default class Component extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Penjual: [],
            newBarangModal: false
        };
    }
    componentWillMount() {
        this.loadPenjual();
    }
    loadPenjual() {
        axios
            .get("/api/findSeller/" + this.props.Barang.id_penjual)
            .then(response => {
                this.setState({
                    Penjual: response.data
                });
            });
    }
    toogleNewProductModal() {
        this.setState({
            newBarangModal: true
        });
    }
    toogleNeProductkModal2() {
        this.setState({
            newBarangModal: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <p
                    className="align-items-center text-center"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Detail
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
                            <h3 className="mb-0 text-primary">Detail Barang</h3>
                        </div>
                    </div>
                    <div className="modal-body">
                        <img
                            alt="Card Image Cap"
                            // src="{{ url('/data_file/'.Barang.foto}}"
                            src={"/data_file/" + this.props.Barang.foto}
                            className="img-center img-fluid"
                        />
                        {/* <Label for="harga">Harga Barang</Label> */}
                        <b>Nama Barang </b>
                        <p>{this.props.Barang.nama_barang}</p>
                        <b>Harga </b>
                        <p>Rp {this.props.Barang.harga}</p>
                        <b>Deskripsi </b>
                        <p>{this.props.Barang.deskripsi}</p>
                        <b>Kategori </b>
                        <p>{this.props.Barang.kategori}</p>
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
            </React.Fragment>
        );
    }
}
