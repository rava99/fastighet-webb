import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Resultat extends Component {

    constructor(props) {
        super(props);
        // this.state = { direktAvkastning: "" };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.beräkning = this.beräkning.bind(this)
    }

    render() {
        return (
            <div class="container">
                {/* <iframe src="https://www.youtube.com/embed/0iKg-p-n4TE" ></iframe> */}
                <div class="row mt-2"></div>
                <div class="card shadow mb-4">
                    <div class="card-body p-5">
                        <h4 class="mb-4">Direktavskastning</h4>
                        <ul class="list-unstyled list pl-5">
                            <li class="mb-3 d-flex align-items-center"><i class="fa fa-flask mr-3 text-primary"></i>Direktavskastningen är {this.props.direktAvkastning}%</li>
                            {/* <li class="mb-3 d-flex align-items-center"><i class="fa fa-flask mr-3 text-primary"></i>Lägg till direktavkastning eget kapital</li> */}
                        </ul>
                    </div> </div>      </div>
        )
    }
}
export default Resultat;