export class CountryData {
    public name: string;
    public data: CountryDayData[];
    constructor(name: string, json: any[]) {
        this.name = name;
        this.data = json.map(dayJson => new CountryDayData(dayJson));
    }
}

export class CountryDayData {
    public date: Date;
    public caseNumber: number;
    public status: string;
    constructor(json: any) {
        this.date = new Date(json['Date']);
        this.caseNumber = json['Cases'];
        this.status = json['Status'];
    }
}
