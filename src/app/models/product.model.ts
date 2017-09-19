/**
 * Created by dmitrij on 18.09.17.
 */


export class productModel{

    public title: string;
    public link: string;
    public image: string;
    public description: string;
    public price: number;

    constructor(
        title: string,
        link: string,
        image: string,
        description: string,
        price: number
    ){

        this.title = title;
        this.link = link;
        this.image = image;
        this.description = description;
        this.price = price
    }

}
