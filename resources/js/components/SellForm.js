import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    UncontrolledAlert,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup
} from "reactstrap";

import axios from "axios";
export default class SellForm extends Component {
    constructor(props) {
        super();
        this.state = {
            barang: [],
            modalSuccess: false,
            modalFail: false,
            selectedFile: null,
            modalBarang: false,
            newBarangData: {
                id_penjual: "",
                nama_barang: "",
                kategori: "",
                deskripsi: "",
                harga: ""

                // foto: ""
            }
        };
        this.addBarang = this.addBarang.bind(this);
    }

    onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };

    toogleModalSucces1() {
        this.setState({
            modalSuccess: true
        });
    }
    toogleModalSucces2() {
        this.setState({
            modalSuccess: false
        });
    }

    toogleModalFail1() {
        this.setState({
            modalFail: true
        });
    }

    toogleModalFail2() {
        this.setState({
            modalFail: false
        });
    }
    addBarang() {
        // let { barang } = this.state;
        // this.setState({
        //     barang,
        //     newBarangModal: false,
        //     newBarangData: {
        //         nama_barang: "",
        //         deskripsi: "",
        //         kategori: "",
        //         foto: "",
        //         harga: "",
        //         id_penjual: "",
        //     },
        // });
        let barangdata = this.state.newBarangData;
        let fd = new FormData();

        fd.append("nama_barang", barangdata.nama_barang);
        fd.append("deskripsi", barangdata.deskripsi);
        fd.append("kategori", barangdata.kategori);
        // fd.append("foto", barangdata.foto);
        fd.append("myFile", this.state.selectedFile);
        fd.append("harga", barangdata.harga);
        fd.append("id_penjual", this.props.id);

        axios
            .post("/api/create", fd)
            .then(res => this.setState({ modalSuccess: true }))
            //    .catch(err => this.setState({ modalFail: true }));
            .catch(error => {
                if (error.response.data.nama_barang == false) {
                    alert(`nama_barang tidak memenuhi persyaratan`);
                }

                if (error.response.data.kategori == false) {
                    alert(`kategori tidak memenuhi persyaratan`);
                }

                if (error.response.data.myFile == false) {
                    alert(
                        `foto tidak memenuhi persyaratan,silahkan pilih ulang`
                    );
                }

                if (error.response.data.harga == false) {
                    alert(`harga tidak memenuhi persyaratan`);
                }
                if (error.response.data.deskripsi == false) {
                    alert(`deskripsi tidak memenuhi persyaratan`);
                } else {
                    alert(`foto tidak memenuhi persyaratan`);
                }
            });
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="nama_barang">Nama Barang</Label>
                        <Input
                            type="text"
                            id="nama_barang"
                            placeholder="Masukkan Nama Barang"
                            value={this.state.newBarangData.nama_barang}
                            onChange={e => {
                                let { newBarangData } = this.state;
                                newBarangData.nama_barang = e.target.value;
                                this.setState({ newBarangData });
                            }}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="kategori">Kategori Barang</Label>
                        <CustomInput
                            type="select"
                            className="custom-select"
                            id="kategori"
                            placeholder="Kategori Barang"
                            value={this.state.newBarangData.kategori}
                            onChange={e => {
                                let { newBarangData } = this.state;
                                newBarangData.kategori = e.target.value;
                                this.setState({ newBarangData });
                            }}
                        >
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                -
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Alat Tulis Kantor
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Barang Kosan
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Elektronik
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Fashion
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Kosmetik
                            </option>
                            <option
                                style={{
                                    color: "#262833",
                                    backgroundColor: "#7e8ce0"
                                }}
                            >
                                Lain - lain
                            </option>
                        </CustomInput>
                    </FormGroup>
                    <FormGroup>
                        <Label for="foto">Foto</Label>
                        <CustomInput
                            for="foto"
                            type="file"
                            className="custom-file"
                            onChange={this.onFileChange}
                        ></CustomInput>
                    </FormGroup>
                    <FormGroup>
                        <Label for="harga">Harga Barang</Label>
                        <Input
                            type="text"
                            id="harga"
                            placeholder="Input Harga"
                            value={this.state.newBarangData.harga}
                            onChange={e => {
                                let { newBarangData } = this.state;
                                newBarangData.harga = e.target.value;
                                this.setState({ newBarangData });
                            }}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="deskripsi">Deskripsi Barang</Label>
                        <Input
                            type="textarea"
                            id="deskripsi"
                            border="#ffffff"
                            placeholder="Masukkan Deskripsi Barang"
                            value={this.state.newBarangData.deskripsi}
                            onChange={e => {
                                let { newBarangData } = this.state;
                                newBarangData.deskripsi = e.target.value;
                                this.setState({ newBarangData });
                            }}
                        ></Input>
                    </FormGroup>
                </Form>
                <Button
                    color="primary"
                    className="align-items-center btn-simple btn-round"
                    onClick={this.addBarang.bind(this)}
                >
                    Sell Product
                </Button>
                <Modal
                    // modalClassName="modal-success"
                    isOpen={this.state.modalSuccess}
                    toggle={() => window.location.reload(false)}
                >
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            onClick={() => window.location.reload(false)}
                        >
                            <i className="tim-icons icon-simple-remove text-success" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                            <h3 className="mb-0 text-success">Yeay!</h3>
                        </div>
                    </div>
                    <div className="modal-body">
                        <h1 className="text-success text-center">
                            <i className="tim-icons icon-satisfied" />
                        </h1>
                        <h4 className="text-center text-darker">
                            Barang berhasil ditambahkan!
                        </h4>
                    </div>
                </Modal>
                <Modal
                    // modalClassName="modal-danger"
                    isOpen={this.state.modalFail}
                    toggle={this.toogleModalFail2.bind(this)}
                >
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            onClick={this.toogleModalFail2.bind(this)}
                        >
                            <i className="tim-icons icon-simple-remove text-danger" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                            <h3 className="mb-0 text-danger">Yah...</h3>
                        </div>
                    </div>
                    <div className="modal-body">
                        <h1 className="text-danger text-center">
                            <i className="tim-icons icon-alert-circle-exc" />
                        </h1>
                        <h4 className="text-center text-darker">
                            Barang gagal ditambahkan, isi data dengan benar ya!
                        </h4>
                    </div>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById("sellForm")) {
    ReactDOM.render(<SellForm />, document.getElementById("sellForm"));
}
