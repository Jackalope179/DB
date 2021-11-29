$("#tab-student").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    columnDefs: [{
        "targets": 14,
        "orderable": false
    }]

});

$(".btn-edit").click(function(e) {

    let MSSV = $(this).data("mssv");
    let school_email = $(this).data("schoolemail");
    let fname = $(this).data("fname");
    let midname = $(this).data("midname");
    let lname = $(this).data("lname");
    let phone = $(this).data("phone");
    let training_system = $(this).data("training_system");
    let gender = $(this).data("gender");
    let social_day = $(this).data("social_day");
    let GPA = $(this).data("gpa");
    let personal_email = $(this).data("personal_email");
    let MSGV = $(this).data("msgv");
    let departmentID = $(this).data("departmentid");
    let TCTL = $(this).data("tctl");
    let Khoa = $(this).data("khoa");

    let houseaddress = $(this).data("houseaddress");
    let street = $(this).data("street");
    let ward = $(this).data("ward");
    let district = $(this).data("district");
    let city = $(this).data("city");

    $("#editStudentModal input[name = 'MSSV']").val(MSSV)
    $("#editStudentModal input[name = 'school_email']").val(school_email)
    $("#editStudentModal input[name = 'fname']").val(fname)
    $("#editStudentModal input[name = 'midname']").val(midname)
    $("#editStudentModal input[name = 'lname']").val(lname)
    $("#editStudentModal input[name = 'phone']").val(phone)
    $("#editStudentModal input[name = 'training_system']").val(training_system)
    $("#editStudentModal input[name = 'gender']").val(gender)
    $("#editStudentModal input[name = 'social_day']").val(social_day)
    $("#editStudentModal input[name = 'GPA']").val(GPA)
    $("#editStudentModal input[name = 'personal_email']").val(personal_email)
    $("#editStudentModal input[name = 'MSGV']").val(MSGV)
    $("#editStudentModal input[name = 'departmentID']").val(departmentID)
    $("#editStudentModal input[name = 'TCTL']").val(TCTL)
    $("#editStudentModal input[name = 'Khoa']").val(Khoa)

    $("#editStudentModal input[name = 'houseaddress']").val(houseaddress)
    $("#editStudentModal input[name = 'street']").val(street)
    $("#editStudentModal input[name = 'ward']").val(ward)
    $("#editStudentModal input[name = 'district']").val(district)
    $("#editStudentModal input[name = 'city']").val(city)

    $("#editStudentModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let MSSV = $(this).data("mssv");
    console.log(MSSV);
    $("#deleteStudentModal input[name = 'MSSV']").val(MSSV);
    $("#deleteStudentModal").modal("show");
})


$("#form-add-student").submit(function(e) {
    e.preventDefault();

    let MSSV = $("input[name='MSSV']").val()
    let form = $(this);

    $.post("/student/student/checkid", { MSSV: MSSV }, function(data, status) {
        if (data.status == "FOUND") alert("Mã số sinh viên này đã tồn tại !");
        else form.unbind("submit").submit();
    });
});