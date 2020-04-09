import {CountryData} from "./CountryData";
import {Colors} from "../styles";
import {Status} from "./Status";

export class ChartData {
    public status: Status;
    public chartData: any[] = [];
    public countryList: ChartCountry[] = []

    private dateMap = new Map<number, number>();

    constructor(data: CountryData[], status: Status) {
        this.status = status;
        for (const country of data) {
            this.addCountryToChart(country);
            this.countryList.push(new ChartCountry(country.name));
        } 
    }

    private addCountryToChart(country: CountryData) {
        for (const day of country.data) {
            const chartDataIndex = this.dateMap.get(day.date.getTime());
            if (chartDataIndex) {
                this.chartData[chartDataIndex][country.name] = day.caseNumber;
            } else {
                let dateStr = this.buildDateStr(day.date);
                if (dateStr !== '21/01') {
                    let newDay: any = {date: dateStr};
                    newDay[country.name] = day.caseNumber;
                    this.chartData.push(newDay);
                    this.dateMap.set(day.date.getTime(), this.chartData.length - 1);
                }
            }
        }

    }

    private buildDateStr(date: Date) {
        let day  = date.getDate().toString().padStart(2, '0');
        let month  = (date.getMonth()+1).toString().padStart(2, '0');
        return `${day}/${month}`;
    }
}

export class ChartCountry {
    public name: string;
    public color: string;

    constructor(name: string) {
        this.name = name;
        this.color = name === 'brazil' ? Colors.accent : this.generateColor();
    }

    private generateColor() {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
}
