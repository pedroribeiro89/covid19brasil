import {CountryData} from "./CountryData";
import {Status} from "./Status";
import {Colors} from "../styles";

export class ChartCountryDetailData {
    public chartData: any[] = [];
    public mortalityChartData: any[] = [];
    public confirmed = new StatusCountry('Confirmados', Colors.accent, Status.CONFIRMED);
    public deaths = new StatusCountry('Mortes', 'red', Status.DEATHS);
    public recovered = new StatusCountry('Recuperados', 'green', Status.RECOVERD);

    private dateMap = new Map<number, number>();

    constructor(confirmedData: CountryData, deathsData: CountryData, recoveredData: CountryData) {
        this.addStatusToChart(confirmedData, Status.CONFIRMED);
        this.addStatusToChart(deathsData, Status.DEATHS);
        this.addStatusToChart(recoveredData, Status.RECOVERD);

        this.chartData = this.chartData.filter(item => { return item[Status.CONFIRMED] !== undefined && item[Status.DEATHS] !== undefined });

        for (const data of this.chartData) {
            if(data[Status.CONFIRMED] !== undefined && data[Status.DEATHS] !== undefined) {
                let mortality = data[Status.CONFIRMED] !== 0 ? data[Status.DEATHS] / data[Status.CONFIRMED] : 0;
                let mortalityRounded = mortality !== 0 ? Number(mortality * 100).toFixed(2) : 0;
                this.mortalityChartData.push({date: data.date, value: mortalityRounded});
            }
        }
    }

    private addStatusToChart(country: CountryData, status: Status) {
        for (const day of country.data) {
            const chartDataIndex = this.dateMap.get(day.date.getTime());
            if (chartDataIndex) {
                this.chartData[chartDataIndex][status] = day.caseNumber;
            } else {
                let newDay: any = {date: this.buildDateStr(day.date)};
                newDay[status] = day.caseNumber;
                this.chartData.push(newDay);
                this.dateMap.set(day.date.getTime(), this.chartData.length - 1);
            }
        }

    }

    private buildDateStr(date: Date) {
        let day  = date.getDate().toString().padStart(2, '0');
        let month  = (date.getMonth()+1).toString().padStart(2, '0');
        return `${day}/${month}`;
    }
}

export class StatusCountry {
    public name: string;
    public color: string;
    public status: Status;

    constructor(name: string, color: string, status: Status) {
        this.name = name;
        this.color = color;
        this.status = status;
    }
}
