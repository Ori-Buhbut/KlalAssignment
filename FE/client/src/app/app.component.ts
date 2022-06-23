import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import Department from 'src/models/department';
import Employee from 'src/models/employee';
import { DataService } from 'src/services/data.service';
import * as moment from 'moment';
import Task from 'src/models/task';
import { AppConstants } from 'src/constants/data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fakeData: any = AppConstants.fakeData; 
  tasks: Task[] = [];
  departments: Department[] = [];
  employees: Employee[] = [];
  selectedEmployee: string = "";
  selectedNode: string = "בחר עובד/מחלקה";
  dataSourceTable: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = ['taskNumber', 'taskName', 'statusId', 'employeeName', 'departmentId', 'dueDate'];
  treeControl = new NestedTreeControl<Department>(node => node.Children);
  treeDataSource = new MatTreeNestedDataSource<Department>();

  constructor(private dataService: DataService) {
    this.dataService.getFakeData().subscribe(res => {
      this.employees = res[0];
      this.departments = res[1];
      this.tasks = res[2];
      this.treeDataSource.data = this.list_to_tree(res[1]);
      this.dataSourceTable = new MatTableDataSource<Task>(this.tasks);
      this.dataSourceTable.paginator = this.paginator;
    }, err=>{
      alert("express.js server is not running, using local data");
      this.employees = this.fakeData.employees;
      this.departments = this.fakeData.departments;
      this.tasks = this.fakeData.tasks;
      this.treeDataSource.data = this.list_to_tree(this.departments);
      this.dataSourceTable = new MatTableDataSource<Task>(this.tasks);
      this.dataSourceTable.paginator = this.paginator;
    })
  }

  list_to_tree(list: Department[]) {
    var map: any = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i].DepartmentID] = i;
      list[i].Children = [];
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.ParentID !== 0) {
        list[map[node.ParentID]].Children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  tree_to_list(nodes: Department[], arr: Department[]) {
    if (!nodes) {
      return [];
    }
    if (!arr) {
      arr = [];
    }
    for (var i = 0; i < nodes.length; i++) {
      arr.push(nodes[i]);
      this.tree_to_list(nodes[i].Children, arr);
    }
    return arr;
  }

  hasChild = (_: number, node: Department) => !!node.Children && node.Children.length > 0;

  onNodeClick(node: Department) {
    this.selectedNode = node.DepartmentName;
    let treeToList = this.tree_to_list(this.departments.filter(t => t.DepartmentID == node.DepartmentID), []);
    this.dataSourceTable.data = this.tasks.filter(t=> treeToList.some(row=> row.DepartmentID == t.DepartmentID));
    this.selectedEmployee = "";
  }

  onEmployeeSelectionChange(e: MatSelectChange) {
    let employee = e.value;
    this.selectedNode = employee;
    this.dataSourceTable.data = this.tasks.filter(t => t.EmployeeName == employee);
  }

  isDueDatePast(dueDate: Date) {
    return moment(dueDate).isBefore(moment());
  }

  getDepartmentNameById(id: number) {
    return this.departments.find(d => d.DepartmentID == id)?.DepartmentName;
  }
}
