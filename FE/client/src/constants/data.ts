
export class AppConstants {
    static START = new Date(2022, 1, 1);
    static END = new Date(2022, 10, 10);

    static randomDate() {
        return new Date(this.START.getTime() + Math.random() * (this.END.getTime() - this.START.getTime()));
    }


    public static fakeData = Object.freeze({
        employees: [
            { EmployeeName: "אורי", EmployeePicture: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png" },
            { EmployeeName: "אופיר", EmployeePicture: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png" },
            { EmployeeName: "רותם", EmployeePicture: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png" },
            { EmployeeName: "מתן", EmployeePicture: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png" },
            { EmployeeName: "אידן", EmployeePicture: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png" }
        ],
        departments: [
            { DepartmentID: 1, DepartmentName: "רפואה", ParentID: 0 },
            { DepartmentID: 2, DepartmentName: "רכב", ParentID: 0 },
            { DepartmentID: 3, DepartmentName: "טיולים", ParentID: 0 },
            { DepartmentID: 4, DepartmentName: "נדלן", ParentID: 0 },
            { DepartmentID: 5, DepartmentName: "שירותי בית חולים", ParentID: 1 },
            { DepartmentID: 6, DepartmentName: "בריאות הנפש", ParentID: 1 },
            { DepartmentID: 7, DepartmentName: "מרשמים ותרופות", ParentID: 1 },
            { DepartmentID: 8, DepartmentName: "מכוניות", ParentID: 2 },
            { DepartmentID: 9, DepartmentName: "אופנועים", ParentID: 2 },
            { DepartmentID: 10, DepartmentName: "סירות", ParentID: 2 },
            { DepartmentID: 11, DepartmentName: "כבודה", ParentID: 3 },
            { DepartmentID: 12, DepartmentName: "בריאות", ParentID: 3 },
            { DepartmentID: 13, DepartmentName: "טיסות", ParentID: 3 },
            { DepartmentID: 14, DepartmentName: "עסקים", ParentID: 4 },
            { DepartmentID: 15, DepartmentName: "בית", ParentID: 4 },
            { DepartmentID: 16, DepartmentName: "גינה", ParentID: 4 }
        ],
        tasks: [
            { TaskNumber: 1, TaskName: "A", StatusID: 1, EmployeeName: "אורי", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 2, TaskName: "B", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 13, DueDate: this.randomDate() },
            { TaskNumber: 3, TaskName: "C", StatusID: 1, EmployeeName: "מתן", DepartmentID: 6, DueDate: this.randomDate() },
            { TaskNumber: 4, TaskName: "D", StatusID: 2, EmployeeName: "מתן", DepartmentID: 12, DueDate: this.randomDate() },
            { TaskNumber: 5, TaskName: "E", StatusID: 3, EmployeeName: "אידן", DepartmentID: 7, DueDate: this.randomDate() },
            { TaskNumber: 6, TaskName: "F", StatusID: 3, EmployeeName: "רותם", DepartmentID: 14, DueDate: this.randomDate() },
            { TaskNumber: 7, TaskName: "G", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 16, DueDate: this.randomDate() },
            { TaskNumber: 8, TaskName: "H", StatusID: 1, EmployeeName: "אורי", DepartmentID: 11, DueDate: this.randomDate() },
            { TaskNumber: 9, TaskName: "I", StatusID: 2, EmployeeName: "אידן", DepartmentID: 16, DueDate: this.randomDate() },
            { TaskNumber: 10, TaskName: "J", StatusID: 2, EmployeeName: "רותם", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 11, TaskName: "K", StatusID: 1, EmployeeName: "אופיר", DepartmentID: 7, DueDate: this.randomDate() },
            { TaskNumber: 12, TaskName: "L", StatusID: 1, EmployeeName: "אידן", DepartmentID: 5, DueDate: this.randomDate() },
            { TaskNumber: 13, TaskName: "M", StatusID: 3, EmployeeName: "אורי", DepartmentID: 5, DueDate: this.randomDate() },
            { TaskNumber: 14, TaskName: "N", StatusID: 3, EmployeeName: "אידן", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 15, TaskName: "O", StatusID: 3, EmployeeName: "רותם", DepartmentID: 5, DueDate: this.randomDate() },
            { TaskNumber: 16, TaskName: "P", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 6, DueDate: this.randomDate() },
            { TaskNumber: 17, TaskName: "Q", StatusID: 3, EmployeeName: "אורי", DepartmentID: 7, DueDate: this.randomDate() },
            { TaskNumber: 18, TaskName: "R", StatusID: 1, EmployeeName: "אורי", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 19, TaskName: "S", StatusID: 2, EmployeeName: "מתן", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 20, TaskName: "T", StatusID: 2, EmployeeName: "רותם", DepartmentID: 9, DueDate: this.randomDate() },
            { TaskNumber: 21, TaskName: "U", StatusID: 2, EmployeeName: "מתן", DepartmentID: 10, DueDate: this.randomDate() },
            { TaskNumber: 22, TaskName: "V", StatusID: 1, EmployeeName: "מתן", DepartmentID: 11, DueDate: this.randomDate() },
            { TaskNumber: 23, TaskName: "W", StatusID: 3, EmployeeName: "אופיר", DepartmentID: 12, DueDate: this.randomDate() },
            { TaskNumber: 24, TaskName: "X", StatusID: 2, EmployeeName: "מתן", DepartmentID: 13, DueDate: this.randomDate() },
            { TaskNumber: 25, TaskName: "Y", StatusID: 1, EmployeeName: "אופיר", DepartmentID: 14, DueDate: this.randomDate() },
            { TaskNumber: 26, TaskName: "Z", StatusID: 3, EmployeeName: "מתן", DepartmentID: 15, DueDate: this.randomDate() },
            { TaskNumber: 27, TaskName: "A", StatusID: 1, EmployeeName: "אורי", DepartmentID: 1, DueDate: this.randomDate() },
            { TaskNumber: 28, TaskName: "B", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 13, DueDate: this.randomDate() },
            { TaskNumber: 29, TaskName: "C", StatusID: 1, EmployeeName: "מתן", DepartmentID: 13, DueDate: this.randomDate() },
            { TaskNumber: 30, TaskName: "D", StatusID: 2, EmployeeName: "מתן", DepartmentID: 14, DueDate: this.randomDate() },
            { TaskNumber: 31, TaskName: "E", StatusID: 3, EmployeeName: "אידן", DepartmentID: 7, DueDate: this.randomDate() },
            { TaskNumber: 32, TaskName: "F", StatusID: 3, EmployeeName: "רותם", DepartmentID: 12, DueDate: this.randomDate() },
            { TaskNumber: 33, TaskName: "G", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 16, DueDate: this.randomDate() },
            { TaskNumber: 34, TaskName: "H", StatusID: 1, EmployeeName: "אורי", DepartmentID: 12, DueDate: this.randomDate() },
            { TaskNumber: 35, TaskName: "I", StatusID: 2, EmployeeName: "אידן", DepartmentID: 16, DueDate: this.randomDate() },
            { TaskNumber: 36, TaskName: "J", StatusID: 2, EmployeeName: "רותם", DepartmentID: 16, DueDate: this.randomDate() },
            { TaskNumber: 37, TaskName: "K", StatusID: 1, EmployeeName: "אופיר", DepartmentID: 9, DueDate: this.randomDate() },
            { TaskNumber: 38, TaskName: "L", StatusID: 1, EmployeeName: "אידן", DepartmentID: 10, DueDate: this.randomDate() },
            { TaskNumber: 39, TaskName: "M", StatusID: 3, EmployeeName: "אורי", DepartmentID: 5, DueDate: this.randomDate() },
            { TaskNumber: 40, TaskName: "N", StatusID: 3, EmployeeName: "אידן", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 41, TaskName: "O", StatusID: 3, EmployeeName: "רותם", DepartmentID: 5, DueDate: this.randomDate() },
            { TaskNumber: 42, TaskName: "P", StatusID: 2, EmployeeName: "אופיר", DepartmentID: 6, DueDate: this.randomDate() },
            { TaskNumber: 43, TaskName: "Q", StatusID: 3, EmployeeName: "אורי", DepartmentID: 7, DueDate: this.randomDate() },
            { TaskNumber: 44, TaskName: "R", StatusID: 1, EmployeeName: "אורי", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 45, TaskName: "S", StatusID: 2, EmployeeName: "מתן", DepartmentID: 8, DueDate: this.randomDate() },
            { TaskNumber: 46, TaskName: "T", StatusID: 2, EmployeeName: "רותם", DepartmentID: 9, DueDate: this.randomDate() },
            { TaskNumber: 47, TaskName: "U", StatusID: 2, EmployeeName: "מתן", DepartmentID: 10, DueDate: this.randomDate() },
            { TaskNumber: 48, TaskName: "V", StatusID: 1, EmployeeName: "מתן", DepartmentID: 11, DueDate: this.randomDate() },
            { TaskNumber: 49, TaskName: "W", StatusID: 3, EmployeeName: "אופיר", DepartmentID: 12, DueDate: this.randomDate() },
            { TaskNumber: 50, TaskName: "X", StatusID: 2, EmployeeName: "מתן", DepartmentID: 13, DueDate: this.randomDate() },
            { TaskNumber: 51, TaskName: "Y", StatusID: 1, EmployeeName: "אופיר", DepartmentID: 14, DueDate: this.randomDate() },
            { TaskNumber: 52, TaskName: "Z", StatusID: 3, EmployeeName: "מתן", DepartmentID: 15, DueDate: this.randomDate() },
        ]
    });

}
