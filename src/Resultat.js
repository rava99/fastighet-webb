import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Resultat extends Component {

    constructor(props) {
        super(props);
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
                            <li class="mb-3 d-flex align-items-center"><i class="fa fa-flask mr-3 text-primary"></i>Direktavskastningen är {isNaN(parseFloat(this.props.direktAvkastning).toFixed(2)) ? 0 : parseFloat(this.props.direktAvkastning).toFixed(2)}%</li>
                            {/* <li class="mb-3 d-flex align-items-center"><i class="fa fa-flask mr-3 text-primary"></i>Lägg till direktavkastning eget kapital</li> */}
                        </ul>
                    </div> </div>      </div>
        )
    }
}
export default Resultat;