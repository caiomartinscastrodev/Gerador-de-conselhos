import { ReactElement , useState , useEffect} from "react";
import axios from 'axios';

import '../style/Container.css';

type dado = {
    slip: {
        id: number;
        advice: string;
    }
}

function Container(): ReactElement{

    const [slip , setSlip] = useState<dado>({slip: {id: 0 , advice: ""}});

    useEffect(() => {
        let url = 'https://api.adviceslip.com/advice';
        axios.get(url).then((res) => {
            //console.log(res.data)
            setSlip(res.data);
            console.log(slip);
        }).catch((err) => {
            console.log(err);
        });
    } , []);

    return(
        <div className="container">
            <h2>{slip.slip.id} - {slip.slip.advice}</h2>
        </div>
    );
}

export default Container;