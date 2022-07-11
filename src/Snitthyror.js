import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Snitthyror extends Component {

    constructor(props) {
        super(props);
        this.state = { snittHyra: "", värdeOmråde: "" }
        this.fetchHyra = this.fetchHyra.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.FormHyra = this.FormHyra.bind(this);
        this.ResultatHyra = this.ResultatHyra.bind(this);
    }


    fetchHyra() {
        fetch(`https://skatteverket.entryscape.net/rowstore/dataset/bcf9a71e-b77a-45b1-906f-1ce361e1c756?nr_omrad=${this.state.värdeOmråde}&_limit=100&_offset=0`)
            .then(response => response.json())
            .then(data => this.setState({ snittHyra: data.results[0]["värdeår 2019"] })
            )
        //länk till api:
        //https://www.dataportal.se/sv/datasets/6_70773/genomsnittshyror-for-bostader-2022-2024/apiexplore/70768
        //Exempel på värdeområde: 1281010

    }

    handleSubmit(event) {
        this.fetchHyra();
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    FormHyra() {
        return (
            <html>
                <div class="registration-form">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <input
                                type="number"
                                class="form-control item"
                                name="värdeOmråde"
                                value={this.state.värdeOmråde}
                                onChange={this.handleChange}
                                placeholder="Ange värdeområde"
                            /> </div>
                        <button type="submit" class="btn btn-block create-account">Få Snitthyra</button>
                    </form>
                </div > <div></div >
            </html>
        );
    }
    ResultatHyra() {
        return (
            <html>
                <div class="card shadow mb-4">
                    <div class="card-body p-5">
                        <h4 class="mb-4">Snitthyra</h4>
                        <ul class="list-unstyled list pl-5">
                            <li class="mb-3 d-flex align-items-center"><i class="fa fa-flask mr-3 text-primary"></i>Snitthyran är {this.state.snittHyra} kr/kvm/år</li>
                        </ul>
                    </div> </div>
            </html>
        );
    }


    render() {
        return (
            <div class="container">
                <this.FormHyra />
                <this.ResultatHyra />
            </div>

        )
    }


}






export default Snitthyror;

