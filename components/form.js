import React from 'react';
import './form.css';
import fillDetails from '../allactions/postactions';
import { connect } from 'react-redux';
import history from '../history';
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Phone: "",
            Address: "",
            Empcode: "",
            Project: "",
            DOJ: "",
            errors: {},
            isLoading: false,
        }
        this.onChange = this.onChange.bind(this);
    }
    handleValidation() {
        let errors = {};
        let formIsValid = true;
        if (!this.state.Name) {
            formIsValid = false;
            errors["error.name"] = "cannot be empty";
        }
        if (!this.state.Phone) {
            formIsValid = false;
            errors["error.phone"] = "cannot be empty";
        }
        if (!this.state.Address) {
            formIsValid = false;
            errors["error.phone"] = "cannot be empty";
        }
        if (!this.state.Empcode) {
            formIsValid = false;
            errors["error.phone"] = "cannot be empty";
        }
        if (!this.state.Project) {
            formIsValid = false;
            errors["error.phone"] = "cannot be empty";
        }
        if (!this.state.DOJ) {
            formIsValid = false;
            errors["error.phone"] = "cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");

            let dataform =
                {
                    Name: this.state.Name,
                    Phone: this.state.Phone,
                    Address: this.state.Address,
                    Empcode: this.state.Empcode,
                    Project: this.state.Project,
                    DOJ: this.state.DOj
                }
            this.props.fillDetails(dataform);
            this.setState({
                Name: "",
                Phone: "",
                Address: "",
                Empcode: "",
                Project: "",
                DOJ: "",
            })
            history.push("/");
        }
        else {
            alert("kindly fill all Details.");
        }
    }
    onBack(e) {
        e.preventDefault();
        history.push("/");
    }
    onChange(e, setter) {
        switch (setter) {
            case 'Name':
                this.setState({ Name: e.target.value });
                break;
            case 'Phone':
                this.setState({ Phone: e.target.value });
                break;
            case 'Address':
                this.setState({ Address: e.target.value });
                break;
            case 'Empcode':
                this.setState({ Empcode: e.target.value });
                break;
            case 'Project':
                this.setState({ Project: e.target.value });
                break;
            case 'DOJ':
                this.setState({ DOJ: e.target.value });
                break;

            default:
        }
    }
    render() {
        return (
            <form className="Details">
                <h1>ENTER YOUR  DETAILS. </h1>
                <div className="form">
                    <input type="text"
                        placeholder="Name"
                        name="Name"
                        value={this.state.Name}
                            error="errors.Name"
                        onChange={(e) => this.onChange(e, 'Name')}
                    /><br /><br />
                    <input type="number"
                        placeholder="Phone"
                        name="Phone"
                        value={this.state.Phone}
                        error="errors.Phone"
                        onChange={(e) => this.onChange(e, 'Phone')}
                    /><br /><br />
                    <input type="text"
                        placeholder="Address"
                        name="Address"
                        value={this.state.Address}
                        error="errors.Address"
                        onChange={(e) => this.onChange(e, 'Address')}
                    /><br /><br />
                    <input type="number"
                        placeholder="Empcode"
                        name="Empcode"
                        value={this.state.Empcode}
                        error="errors.Empcode"
                        onChange={(e) => this.onChange(e, 'Empcode')}
                    /><br /><br />
                    <input type="text"
                        placeholder="Project"
                        value={this.state.Project}
                        name="Project"
                        error="errors.Project"
                        onChange={(e) => this.onChange(e, 'Project')}
                    /><br /><br />
                    <input type="date"
                        placeholder="Date of joining"
                        value={this.state.DOJ}
                        name="DOJ"
                        error="errors.DOJ"
                        onChange={(e) => this.onChange(e, 'DOJ')}
                    /><br /><br />
                    <button onClick={e => this.onSubmit(e)} className="btn"
                        value="btn">save</button>
                    <br /><br />>
                <button onClick={e => this.onBack(e)} className="btn"
                        value="btn">Back</button>
                    <br />

                </div>
            </form>
        )
    }
};
const mapStateToProps = state => {
    return {
        key: state.loginReducer,
    };
};
const mapDispatchToProps = dispatch => ({
    fillDetails: (dataform) => dispatch(fillDetails(dataform))
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);

