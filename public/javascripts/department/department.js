$("#tab-student").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    columnDefs: [{
        "targets": 6,
        "orderable": false
    }]

});

$(".btn-edit").click(function(e) {

    let departmentID = $(this).data("departmentid");
    let departmentName = $(this).data("departmentname");
    let establishYear = $(this).data("establishyear");
    let MGR = $(this).data("mgr");
    let studentQuanitty = $(this).data("studentquanitty");
    let totalSalary = $(this).data("totalsalary");


    $("#editDepartmentModal input[name = 'departmentID']").val(departmentID)
    $("#editDepartmentModal input[name = 'departmentName']").val(departmentName)
    $("#editDepartmentModal input[name = 'establishYear']").val(establishYear)
    $("#editDepartmentModal input[name = 'MGR']").val(MGR)
    $("#editDepartmentModal input[name = 'studentQuanitty']").val(studentQuanitty)
    $("#editDepartmentModal input[name = 'totalSalary']").val(totalSalary)

    $("#editDepartmentModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let departmentID = $(this).data("departmentid");
    $("#deleteDepartmentModal input[name = 'departmentID']").val(departmentID);
    $("#deleteDepartmentModal").modal("show");
})


$("#form-add-department").submit(function(e) {
    e.preventDefault();

    let departmentID = $("input[name='departmentID']").val()
    let form = $(this);

    $.post("/department/department/checkid", { departmentID: departmentID }, function(data, status) {
        if (data.status == "FOUND") alert("Mã Khoa này đã tồn tại !");
        else form.unbind("submit").submit();
    });
});