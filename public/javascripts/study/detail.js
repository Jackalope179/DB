$("#sel-teacher1").select2({
    theme: "bootstrap4",
});
$("#sel-teacher2").select2({
    theme: "bootstrap4",
});
$("#sel-subject").select2({
    theme: "bootstrap4",
});

$("#tab-groupclass").DataTable({
    retrieve: true,
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    responsive: true,
    lengthChange: false,
    paging: false,
    searching: false,
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
    $("#editDetailModal input[name = 'classID']").val($(this).data("classid"))
    $("#editDetailModal input[name = 'subjectID']").val($(this).data("subjectid"))
    $("#editDetailModal input[name = 'groupID']").val($(this).data("groupid"))
    $("#editDetailModal input[name = 'subjectName']").val($(this).data("subjectname"))
    $("#editDetailModal input[name = 'startTime']").val($(this).data("start"))
    $("#editDetailModal input[name = 'endTime']").val($(this).data("end"))
    $("#editDetailModal input[name = 'fullName']").val($(this).data("fullname"))
    $("#editDetailModal").modal("show");
});

$(".btn-delete").click(function(e) {
    $("#deleteDetailModal input[name = 'subjectID']").val($(this).data("subjectid"))
    $("#deleteDetailModal input[name = 'classID']").val($(this).data("classid"))
    $("#deleteDetailModal input[name = 'groupID']").val($(this).data("groupid"))
    $("#deleteDetailModal").modal("show");
})


// $("#form-add-subject").submit(function(e) {
//     e.preventDefault();

//     let subjectID = $("input[name='subjectID']").val()
//     let form = $(this);

//     $.post("/study/subject/checkid", { subjectID: subjectID }, function(data, status) {
//         if (data.status == "FOUND") alert("Môn học này đã tồn tại !");
//         else form.unbind("submit").submit();
//     });
// });