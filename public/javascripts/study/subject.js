$("#tab-subject").DataTable({
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

    let subjectID = $(this).data("subjectid")
    let subjectName = $(this).data("subjectname")
    let credit = $(this).data("credit")
    let final_score_weight = $(this).data("final_score_weight")
    let exercise_weight = $(this).data("exercise_weight")
    let lab_score_weight = $(this).data("lab_score_weight")

    $("#editSubjectModal input[name = 'subjectID']").val(subjectID)
    $("#editSubjectModal input[name = 'subjectName']").val(subjectName)
    $("#editSubjectModal input[name = 'credit']").val(credit)
    $("#editSubjectModal input[name = 'final_score_weight']").val(final_score_weight)
    $("#editSubjectModal input[name = 'exercise_weight']").val(exercise_weight)
    $("#editSubjectModal input[name = 'lab_score_weight']").val(lab_score_weight)

    $("#editSubjectModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let subjectID = $(this).data("subjectid");
    $("#deleteSubjectModal input[name = 'subjectID']").val(subjectID);
    $("#deleteSubjectModal").modal("show");
})


$("#form-add-subject").submit(function(e) {
    e.preventDefault();

    let subjectID = $("input[name='subjectID']").val()
    let form = $(this);

    $.post("/study/subject/checkid", { subjectID: subjectID }, function(data, status) {
        if (data.status == "FOUND") alert("Môn học này đã tồn tại !");
        else form.unbind("submit").submit();
    });
});