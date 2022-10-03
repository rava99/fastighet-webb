import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Startsida extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4">Fastighetsinvesteringar</h1>
                <p class="lead"> Här kan du räkna ut direktavkastning och hitta snitthyrorna för bostäder inom olika värdeområde</p>
                <hr class="my-4"></hr>
                <p>Nedan följer en kort förklaring på vad direktavkastning är:</p>

                <iframe src="https://www.youtube.com/embed/0iKg-p-n4TE" ></iframe>

                <hr class="my-4"></hr>
                <a href="https://www7.skatteverket.se/portal/fastighet-seberakningsgrund/" class="btn btn-primary" target="_blank">Hitta ditt värdeområde här</a>
            </div>
        )

    }
}
export default Startsida;