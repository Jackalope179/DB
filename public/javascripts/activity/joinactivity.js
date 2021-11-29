$("#tab-student").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    columnDefs: [{
        "targets": 5,
        "orderable": false
    }]

});

$(".btn-edit").click(function(e) {

    let activityID = $(this).data("activityid");
    let activityName = $(this).data("activityname");
    let startDate = $(this).data("startdate");
    let endDate = $(this).data("enddate");
    let totalDay = $(this).data("totalday");
    let departmentID = $(this).data("departmentid");
    let maxstudent = $(this).data("maxstudent");


    $("#editActivityModal input[name = 'activityID']").val(activityID)
    $("#editActivityModal input[name = 'activityName']").val(activityName)
    $("#editActivityModal input[name = 'startDate']").val(startDate)
    $("#editActivityModal input[name = 'endDate']").val(endDate)
    $("#editActivityModal input[name = 'totalDay']").val(totalDay)
    $("#editActivityModal input[name = 'departmentID']").val(departmentID)
    $("#editActivityModal input[name = 'maxstudent']").val(maxstudent)

    $("#editActivityModal").modal("show");
});

$(".btn-delete").click(function(e) {
    let activityID = $(this).data("activityid");
    $("#deleteActivityModal input[name = 'activityID']").val(activityID);
    $("#deleteActivityModal").modal("show");
})

$(".btn-detail").click(function(e) {
    let activityID = $(this).data("activityid");
    $("#detailActivityModal input[name = 'activityID']").val(activityID);
    $("#detailActivityModal").modal("show");
})


$("#form-add-activity").submit(function(e) {
    e.preventDefault();

    let activityID = $("input[name='activityID']").val()
    let startDate = $("input[name='startDate']").val()
    let endDate = $("input[name='endDate']").val()
    if (startDate > endDate) alert("Ngày bắt đầu phải ở trước ngày kết thúc !");
    else {
        let form = $(this);

        $.post("/activity/activity/checkid", { activityID: activityID }, function(data, status) {
            if (data.status == "FOUND") alert("Mã Khoa này đã tồn tại !");
            else form.unbind("submit").submit();
        });
    }

});