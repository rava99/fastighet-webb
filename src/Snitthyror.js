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
            // .then(response => response.setHeader("Access-Control-Allow-Headers", "Content-Type"))
            // // .then(data => alert(JSON.stringify(data)))
            .then(data => this.setState({ snittHyra: data.results[0]["värdeår 2019"] })

            )
        // .then(data => temp = JSON.stringify(data.results[0]["värdeår 2019"]))
        // .then(console.log(temp))
        // .then(data => console.log(JSON.stringify(data.results["värdeår 1990"])))
        // .then(data => this.state.data2 = data)

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
                        <h4 class="mb-4">Beräkningar</h4>
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
                <this.FormHyra />,

                <iframe src="https://www.youtube.com/embed/0iKg-p-n4TE" ></iframe>
                ,
                <this.ResultatHyra />






            </div>

        )
    }


}






export default Snitthyror;

