import {Bar} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


const Barchart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    return (<>
            <Bar data={{datasets:[{label: 'Dataset 1',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)', }], labels :['blue',"red"]}} height={50} width={100}/>
        </>
    )
}


export default Barchart
