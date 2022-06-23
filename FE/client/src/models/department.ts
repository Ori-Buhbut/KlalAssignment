export default class Department {
    DepartmentID: number = 0;
    DepartmentName: string = "";
    ParentID: number = 0;
    Children: Department[] = [];
}
