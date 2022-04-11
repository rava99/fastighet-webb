import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Kalkylator extends Component {

    constructor(props) {
        super(props);
        this.state = { pris: "", intäkter: "", kostnader: "", driftNetto: "", direktAvkastning: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addDirektAvkastning = this.addDirektAvkastning.bind(this);
        this.beräkning = this.beräkning.bind(this)
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    beräkning() {
        let driftNetto = this.state.intäkter - this.state.kostnader;
        let direktAvkastning = driftNetto / this.state.pris * 100 //Detta är i %
        this.setState({
            driftNetto: driftNetto,
            direktAvkastning: direktAvkastning
        });
        return direktAvkastning
    }


    handleSubmit(event) {
        let direktAvkastning = this.beräkning();
        // alert(this.state.driftNetto); //Visa som viewOrder istället
        this.addDirektAvkastning(direktAvkastning);
        event.preventDefault();
    }

    addDirektAvkastning(direktAvkastning2) {
        this.props.addDirektAvkastning(direktAvkastning2);
    }



    render() {
        return (
            <div class="registration-form">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input
                            type="number"
                            class="form-control item"
                            name="pris"
                            value={this.state.pris}
                            onChange={this.handleChange}
                            placeholder="Pris"
                        /> </div>
                    <div class="form-group">
                        <input
                            type="number"
                            class="form-control item"
                            name="intäkter"
                            value={this.state.intäkter}
                            onChange={this.handleChange}
                            placeholder="Hyresintäkter"
                        /></div>
                    <input
                        type="number"
                        class="form-control item"
                        name="kostnader"
                        value={this.state.kostnader}
                        onChange={this.handleChange}
                        placeholder="Driftkostnader"
                    />
                    <button type="submit" class="btn btn-block create-account">Beräkna</button>
                </form>
            </div >
        )
    }

}
export default Kalkylator;