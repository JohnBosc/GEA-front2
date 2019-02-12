import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FileExplorerComponent } from './file_explorer.component';
import { FileExplorerRoutes } from './file_explorer.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FileExplorerRoutes), NgbAccordionModule],
  declarations: [FileExplorerComponent]
})

export class FileExplorerModule {}
