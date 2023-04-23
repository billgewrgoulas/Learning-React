import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    
    const dataPointValues = props.dataPoints.map((point) => point.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(point => 
            <ChartBar 
                value={point.value}
                maxValue={maxValue}
                label={point.label}
                key={point.label}
            />)}
        </div>
    );
}

export default Chart;