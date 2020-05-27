import {NgModule} from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@NgModule({
    exports: [
        ButtonsModule,
        ChartsModule,
        DateInputsModule,
        DialogsModule,
        DropDownsModule,
        ExcelExportModule,
        GridModule,
        InputsModule,
        MenuModule,
        NotificationModule,
        PDFExportModule,
        PopupModule,
        TooltipModule
    ]
})

  export class KendoUIModule {}
