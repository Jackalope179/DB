$("#tab-teacher").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    columnDefs: [{
        "targets": 10,
        "orderable": false
    }]

});

$(".btn-edit").click(function(e) {

    let MSGV = $(this).data("msgv");
    let fullName = $(this).data("fullname");
    let phoneNumber = $(this).data("phonenumber");
    let position = $(this).data("position");
    let join_school_Year = $(this).data("joinschoolyear");
    let departmentID = $(this).data("departmentid");
    let schoolEmail = $(this).data("schoolemail");
    let personalEmail = $(this).data("personalemail");
    let address = $(this).data("address");
    let salary = $(this).data("salary");


    $("#editTeacherModal input[name = 'MSGV']").val(MSGV)
    $("#editTeacherModal input[name = 'fullName']").val(fullName)
    $("#editTeacherModal input[name = 'phoneNumber']").val(phoneNumber)
    $("#editTeacherModal input[name = 'position']").val(position)
    $("#editTeacherModal input[name = 'join_school_Year']").val(join_school_Year)
    $("#editTeacherModal input[name = 'departmentID']").val(departmentID)
    $("#editTeacherModal input[name = 'schoolEmail']").val(schoolEmail)
    $("#editTeacherModal input[name = 'personalEmail']").val(personalEmail)
    $("#editTeacherModal input[name = 'address']").val(address)
    $("#editTeacherModal input[name = 'salary']").val(salary)

    $("#editTeacherModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let MSGV = $(this).data("msgv");
    $("#deleteTeacherModal input[name = 'MSGV']").val(MSGV);
    $("#deleteTeacherModal").modal("show");
})


$("#form-add-teacher").submit(function(e) {
    e.preventDefault();

    let MSGV = $("input[name='MSGV']").val()
    let form = $(this);

    $.post("/teacher/teacher/checkid", { MSGV: MSGV }, function(data, status) {
        if (data.status == "FOUND") alert("Mã số giảng viên này đã tồn tại !");
        else form.unbind("submit").submit();
    });
});