// react plugin used to create charts
// reactstrap components
import {
    Button,
    ButtonToggle,
    Card,
    CardBody,
    CardFooter,
    Modal,
    ModalFooter,
    Row,
    Col,
    CardImg,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from "reactstrap";
import axios from "axios";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SellForm from "./SellForm";
export default class EditBarang extends Component {
    constructor(props) {
        super(props);
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
        let barangdata = this.state.newBarangData;
        let fd = new FormData();
        fd.append("nama_barang", barangdata.nama_barang);
        fd.set("deskripsi", barangdata.deskripsi);
        fd.set("kategori", barangdata.kategori);
        fd.append("myFile", this.state.selectedFile);
        fd.set("harga", barangdata.harga);
        fd.set("id_penjual", this.props.Barang.id_penjual);
        axios
            .post("/api/editbarang/" + this.props.Barang.id, fd)
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
                <ButtonToggle
                    align="center"
                    color="danger"
                    color="primary"
                    className="align-items-center text-center"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Edit
                </ButtonToggle>{" "}
                <Modal
                    isOpen={this.state.newBarangModal}
                    toggle={this.toogleNewProductModal.bind(this)}
                >
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h2 className="card-title text-center text-white">
                                Ubah data dan Simpan!
                            </h2>
                            <label className="card-title text-center text-white"></label>
                            <Form>
                                <FormGroup>
                                    <Label for="nama_barang">Nama Barang</Label>
                                    <Input
                                        type="text"
                                        id="nama_barang"
                                        placeholder="Masukkan Nama Barang"
                                        value={
                                            this.state.newBarangData.nama_barang
                                        }
                                        onChange={e => {
                                            let { newBarangData } = this.state;
                                            newBarangData.nama_barang =
                                                e.target.value;
                                            this.setState({ newBarangData });
                                        }}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="kategori">
                                        Kategori Barang
                                    </Label>
                                    <CustomInput
                                        type="select"
                                        className="custom-select"
                                        id="kategori"
                                        placeholder="Kategori Barang"
                                        value={
                                            this.state.newBarangData.kategori
                                        }
                                        onChange={e => {
                                            let { newBarangData } = this.state;
                                            newBarangData.kategori =
                                                e.target.value;
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
                                            newBarangData.harga =
                                                e.target.value;
                                            this.setState({ newBarangData });
                                        }}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="deskripsi">
                                        Deskripsi Barang
                                    </Label>
                                    <Input
                                        type="textarea"
                                        id="deskripsi"
                                        border="#ffffff"
                                        placeholder="Masukkan Deskripsi Barang"
                                        value={
                                            this.state.newBarangData.deskripsi
                                        }
                                        onChange={e => {
                                            let { newBarangData } = this.state;
                                            newBarangData.deskripsi =
                                                e.target.value;
                                            this.setState({ newBarangData });
                                        }}
                                    ></Input>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <ModalFooter>
                        <Button
                            color="primary"
                            className="align-items-center btn-simple btn-round"
                            onClick={this.addBarang.bind(this)}
                        >
                            Save Changes
                        </Button>
                        <Button
                            className="btn-dark text-center"
                            color="primary"
                            onClick={this.toogleNeProductkModal2.bind(this)}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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
                            Barang berhasil diperbaharui!
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
                            Barang gagal diperbaharui, isi data dengan benar ya!
                        </h4>
                    </div>
                </Modal>
            </div>
        );
    }
}
if (document.getElementById("editBarang")) {
    ReactDOM.render(<EditBarang />, document.getElementById("editBarang"));
}
