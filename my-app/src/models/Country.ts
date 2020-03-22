export class Country {
    public name: string;
    public slug: string;
    public provinces: string[];

    constructor(json: any) {
        this.name = json['Country'];
        this.slug = json['Slug'];
        this.provinces = json['Provinces'];
    }

}
