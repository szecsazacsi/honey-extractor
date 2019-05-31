import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import * as Toast from 'nativescript-toast';

@Component({
    selector: 'hec-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    moduleId: module.id
})
export class ChartComponent implements OnInit {
    sliderOne = 30;
    sliderTwo = 30;
    sliderThree = 30;
    sliderFour = 30;
    buttonStatus = 5;
    bluetooth = require("nativescript-bluetooth");

    areaSource: { Category: string, Amount: number }[] = [

        { Category: "0:00", Amount: 0 },
        { Category: "0:30", Amount: 30 },
        { Category: "1:00", Amount: this.sliderOne },
        { Category: "2:00", Amount: this.sliderTwo },
        { Category: "3:00", Amount: this.sliderThree },
        { Category: "4:00", Amount: this.sliderFour },
        { Category: "4:30", Amount: 30 },
        { Category: "5:00", Amount: 0 }
    ];

    buttonFivePressed(){
        this.buttonStatus = 5;
        this.setFive();
    }

    buttonTenPressed(){
        this.buttonStatus = 10;
        this.setTen();
    }

    buttonFifteenPressed(){
        this.buttonStatus = 15;
        this.setFifteen();
    }

    onSliderChange(){
        switch (this.buttonStatus){
            case 5: this.setFive();
                break;
            case 10: this.setTen();
                break;
            case 15: this.setFifteen();
                break;
        }
    }

    setFive(): void{
        this.areaSource = [
            { Category: String(0) + ":00", Amount: 0 },
            { Category: String(0) + ":30", Amount: 30 },
            { Category: String(1) + ":00", Amount: this.sliderOne },
            { Category: String(2) + ":00", Amount: this.sliderTwo },
            { Category: String(3) + ":00", Amount: this.sliderThree },
            { Category: String(4) + ":00", Amount: this.sliderFour },
            { Category: String(4) + ":30", Amount: 30},
            { Category: String(5) + ":00", Amount: 0}
        ]
    }

    setTen(): void{
        this.areaSource = [
            { Category: String(0) + ":00", Amount: 0 },
            { Category: String(1) + ":00", Amount: 30 },
            { Category: String(2) + ":00", Amount: this.sliderOne },
            { Category: String(4) + ":00", Amount: this.sliderTwo },
            { Category: String(6) + ":00", Amount: this.sliderThree },
            { Category: String(8) + ":00", Amount: this.sliderFour },
            { Category: String(9) + ":00", Amount: 30},
            { Category: String(10) + ":00", Amount: 0}
        ]
    }

    setFifteen(): void{
        this.areaSource = [
            { Category: String(0) + ":00", Amount: 0 },
            { Category: String(1) + ":00", Amount: 30 },
            { Category: String(3) + ":00", Amount: this.sliderOne },
            { Category: String(6) + ":00", Amount: this.sliderTwo },
            { Category: String(9) + ":00", Amount: this.sliderThree },
            { Category: String(12) + ":00", Amount: this.sliderFour },
            { Category: String(14) + ":00", Amount: 30},
            { Category: String(15) + ":00", Amount: 0}
        ]
    }

    Bluetooth(){
        this.bluetooth.enable().then(

        );
    }

    buttonSend(){
        var toast = Toast.makeText("[0;30;" + this.sliderOne + ";" + this.sliderTwo + ";" + this.sliderThree + ";" + this.sliderFour + ";30;0]");
        toast.show();
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
