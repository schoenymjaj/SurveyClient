import {
  Component,
  ViewChild,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import { ContextMenuSelectEvent } from '@progress/kendo-angular-menu';
import { Assessment, filterToggleButtonsType } from '../../../shared/assessment';
import { DataService } from '../../../services/data.service';


import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { SelectableSettings, CellClickEvent, GridComponent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor, State, filterBy  } from '@progress/kendo-data-query';

import { RowArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-assessment-library-kendo',
  templateUrl: './assessment-library-kendo.component.html',
  styleUrls: ['./assessment-library-kendo.component.scss']
})
export class AssessLibKendoComponent implements OnInit {
  public gridHeaderStyle = { 'background-color': 'black', 'color': '#fff', 'line-height': '2em' };
  public cellStyle = { 'background-color': 'white', 'color': '#fff' };
  public footerStyle = { 'background-color': 'purple', 'color': '#fff' };

  public gridData: Assessment[];
  public anotherAssessments: Assessment[];

  //selectable settings
  public selectableSettings: SelectableSettings = {
    enabled: true,
    checkboxOnly: false,
    mode: 'multiple'
  };

  //selected grid rows
  public mySelection: any[] = [6];

  //initial filtering - none 
  public position: 'top' | 'bottom' | 'both' = 'top';
  public state: State = {
    skip: 0,
    //take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'or',
      filters: []
    }
  };
  public filterToggleButtons: filterToggleButtonsType = {
    hazard: true,
    vulnerability: false,
    consequence: false
  }

  //sort
  public sort: SortDescriptor[] = [{
    field: 'typeOrder',
    dir: 'asc'
  }];


  constructor(private dataService: DataService) {
    this.dataService.getassessment("../assets/data/assessment-library-kendo/assessment-library.json").subscribe(assessment => {
      this.gridData = assessment
      this.loadAnotherDataField();

      // filter for hazard type only to begin with
      this.state  = {
        skip: 0,
        //take: 5,

        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: [{ field: 'type', operator: 'equals', value: 'Hazard' }]
        }
      };

    });
  } //constructor

  ngOnInit(): void {
  }

  loadAnotherDataField() {
    this.anotherAssessments = this.gridData.slice(0, 3);
  }

  public onPreviewClick(dataItem, index) {
    var gridData = this.gridData;
    console.log('the preview button was clicked');
  }

  public onModuleClick(event) {
    //event.target.outerText

    //does filter an array into another array. not to use to filter the grid itself. This is just
    //sample code
    const xyz = filterBy(this.gridData,
      {
        logic: 'and',
        filters: [{ field: 'type', operator: 'equals', value: event.target.outerText }]
      }
    );

    //toggle the assessment type filters
    switch (event.target.outerText) {
      case "Hazard":
        this.filterToggleButtons.hazard = !this.filterToggleButtons.hazard
        break;
      case "Vulnerability":
        this.filterToggleButtons.vulnerability = !this.filterToggleButtons.vulnerability
        break;
      case "Consequence":
        this.filterToggleButtons.consequence = !this.filterToggleButtons.consequence
        break;
    }

    //this changes the filtering on the fly dynamically based on the button that was pressed.
    if (this.filterToggleButtons.hazard ||
      this.filterToggleButtons.vulnerability ||
      this.filterToggleButtons.consequence) {

      this.state = {
        skip: 0,
        //take: 5,  
        // Initial filter descriptor
        filter: {
          logic: 'or',
          filters: [
            { field: 'type', operator: 'equals', value: (this.filterToggleButtons.hazard) ? "Hazard" : "NOLUCK" },
            { field: 'type', operator: 'equals', value: (this.filterToggleButtons.vulnerability) ? "Vulnerability" : "NOLUCK" },
            { field: 'type', operator: 'equals', value: (this.filterToggleButtons.consequence) ? "Consequence" : "NOLUCK" }
          ]
        }
      };

    } else {

      this.state = {
        skip: 0,
        //take: 5,  
        // Initial filter descriptor
        filter: {
          logic: 'or',
          filters: [
          ]
        }
      };

    } //if (this.filterToggleButtons.hazard || ...



    console.log('the module toggle button was clicked - hazard:' + this.filterToggleButtons.hazard + " vulner:" + this.filterToggleButtons.vulnerability + "  conseq:" + this.filterToggleButtons.consequence);

  } //public onModuleClick

  public onCellClick(e: CellClickEvent): void {
    // if (e.type === 'contextmenu') {
    //     const originalEvent = e.originalEvent;
    //     originalEvent.preventDefault();
    //     this.gridContextMenu.show({
    //         left: originalEvent.pageX,
    //         top: originalEvent.pageY
    //     });
    // }
    console.log('A cell has been clicked');
  } //onCellClick


}
