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

    let MSSV = $(this).data("mssv");
    let fullName = $(this).data("fullname");
    let phoneNumber = $(this).data("phonenumber");
    let relation = $(this).data("relation");
    let job = $(this).data("job");
    let address = $(this).data("address");

    $("#editDependentModal input[name = 'MSSV']").val(MSSV)
    $("#editDependentModal input[name = 'fullName']").val(fullName)
    $("#editDependentModal input[name = 'phoneNumber']").val(phoneNumber)
    $("#editDependentModal input[name = 'relation']").val(relation)
    $("#editDependentModal input[name = 'job']").val(job)
    $("#editDependentModal input[name = 'address']").val(address)

    $("#editDependentModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let MSSV = $(this).data("mssv");
    let fullName = $(this).data("fullname");
    $("#deleteDependentModal input[name = 'MSSV']").val(MSSV);
    $("#deleteDependentModal input[name = 'fullName']").val(fullName);
    $("#deleteDependentModal").modal("show");
})


$("#form-add-dependent").submit(function(e) {
    e.preventDefault();

    let MSSV = $("input[name='MSSV']").val()
    let form = $(this);

    $.post("/student/dependent/checkid", { MSSV: MSSV }, function(data, status) {
        if (data.status == "NOT_FOUND") alert("Mã số sinh viên này không tồn tại !");
        else form.unbind("submit").submit();
    });
});