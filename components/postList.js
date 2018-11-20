import React, { Component } from 'react';
import './postList.css';
import { Delete } from '../allactions/deleteactions';
import { editDetails } from '../allactions/editaction';
import { connect } from 'react-redux';
import history from '../history';
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            myIndex: 0
        }
        this.removeData = this.removeData.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    removeData(id, data) {
        this.props.Delete(id, data);
    }
    updateItem(index, id) {
        {
            this.setState({
                isEditing: false
            })
            let edata = this.props.data;
            let editform =
                {
                    id: id,
                    name: this.name.value,
                    phone: this.phone.value,
                    Address: this.Address.value,
                    Empcode: this.Empcode.value,
                }
            edata.forEach(function (item) {
                if (editform.id == item.id) {
                    item.name = editform.name;
                    item.phone = editform.phone;
                    item.Address = editform.Address;
                    item.Empcode = editform.Empcode;
                }
            });

            this.props.editDetails(edata);  

        }
        history.push("home");

    }
    onBack(e) {
        e.preventDefault();
        history.push("/");

    }


    toggleState(index) {
        const { isEditing } = this.state;
        this.setState({
            isEditing: !isEditing
        });
        this.setState({ myIndex: index });
    }

    render() {
        const { isEditing } = this.state;
        console.log("dta", this.props.data)
        return (
            <div className="Data">
                <section>
                    {
                        isEditing ?
                            <table className="table table-bordered" >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PHONE No.</th>
                                        <th>ADDRESS</th>
                                        <th>EMPCODE</th>
                                        <th>UPDATEITEM</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.props.data.map((row, index) => (
                                        index === this.state.myIndex ?
                                            (<tr>
                                                <td> {row.id} </td>
                                                <td> <input type="text"
                                                    ref={(value) => {
                                                        this.name = value
                                                    }}
                                                    defaultValue={row.name}
                                                /> </td>
                                                <td> <input type="number"
                                                    ref={(value) => {
                                                        this.phone = value
                                                    }}
                                                    defaultValue={row.phone} /> </td>
                                                <td> <input type="text"
                                                    name="Address"
                                                    ref={(value) => {
                                                        this.Address = value
                                                    }}
                                                    defaultValue={row.Address} /></td>
                                                <td> <input type="number"
                                                    ref={(value) => {
                                                        this.Empcode = value
                                                    }}
                                                    defaultValue={row.Empcode} /></td>
                                                <td> <button onClick={e => this.updateItem(index, row.id)} className="Delete">UpdateItem</button></td>

                                            </tr>)
                                            : null
                                    ))}


                                </tbody>
                            </table> :
                            <table className="table table-bordered" >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PHONE No.</th>
                                        <th>ADDRESS</th>
                                        <th>EMPCODE</th>
                                        <th>DELETE</th>
                                        <th>EDIT</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data.map((row, index) => (
                                        <tr>
                                            <td> {row.id}    </td>
                                            <td> {row.name}  </td>
                                            <td> {row.phone} </td>
                                            <td> {row.Address}</td>
                                            <td> {row.Empcode}</td>
                                            <td>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path className="Delete" button onClick={e => this.removeData(row.id, this.props.data)} d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                </svg>
                                            </td>

                                            <td>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path className="Delete" button onClick={e => this.toggleState(index)} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>

                            </table>
                    }
                </section>
            </div>
        );
    }
};
const mapDisptachToProps = dispatch => {
    return ({
        Delete: (id, data) => { dispatch(Delete(id, data)) },
        editDetails: (edata) => dispatch(editDetails(edata))

    });


}
const mapStateToProps = state => {
    console.log("map", state);
    return {
        posts: state.loginReducer,
    };
};
export default connect(mapStateToProps, mapDisptachToProps)(PostList);

