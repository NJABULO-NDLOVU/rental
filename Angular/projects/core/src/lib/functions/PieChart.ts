import PieChartItem from "../models/custom/PieChartItem";

export function CreatePieChart(label: string, stroke: string, value: string | number, chartData: any) {

    let pieChart = new PieChartItem();

    pieChart.label = label;
    
    pieChart.chartData = chartData;

    pieChart.stroke = stroke;

    pieChart.value = value;

    return pieChart;

}