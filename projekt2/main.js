
$(document).ready(function(){
    var students = new Array(student1,student2,student3,student4,student5,
        student6,student7,student8,student9,student10);
    //var students_added = new Array();

    var helper= new Helper();

    $("#button_show").click(function(){

        $("ol.students").empty();
            var isAverage = $("#averageCheck").prop("checked");
            var year = $('#yearForCourse option:selected').val();
            var courseName = $('#course_selection option:selected').val();
            var aver = "" ;
            var studentsForCourse = helper.getStudentListForCourse(students,"y"+year,courseName);
            var numberOfStudents = studentsForCourse.length;
            if(isAverage)
            {
                for(let i=0;i<numberOfStudents;i++){
                    aver = helper.getAvarageForStudentAllYears(studentsForCourse[i]);
                    $("ol.students").append("<li class=\"list-group-item d-flex justify-content-between align-items-center\" style=\"color:black;\">"+ studentsForCourse[i].first_name+" "+studentsForCourse[i].last_name+ " "+ "<span class=\"badge badge-primary badge-pill\">"+aver+"</span>"+"<a href='javascript:void(0);'></a></li>");
                   
                }
            }else{
                for(var i=0;i<numberOfStudents;i++){
                $("ol.students").append("<li class=\"list-group-item d-flex justify-content-between align-items-center\" style=\"color:black;\">"+ studentsForCourse[i].first_name+" "+studentsForCourse[i].last_name+ " <a href='javascript:void(0);'></a></li>");
            }

        }

    });
    var textContent = "";

    $('#btn-add').click(function(e){
        var student = new Object();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var course = $('#courses option:selected').val();
        var year = 'y'+$('#year option:selected').val();
        var grade = $('#grade option:selected').val();

        if(first_name ==''|| last_name =='') return false;
        
        for(let i in students)
        {
            if((students[i].first_name == first_name)||(students[i].last_name == last_name))
            {
                return false;
            }

        }
        student.first_name=first_name;
        student.last_name=last_name;
        student.courses={};
        student.courses[year]={};
        student.courses[year][course]={};
        student.courses[year][course]['grades'] = {};
        student.courses[year][course]['grades']['lecture'] = [parseFloat(grade)];
        students.push(student);

        textContent = textContent + student.first_name + " " + student.last_name + "\n" ;

        $("#listOfStudents").val(textContent);
            e.preventDefault();

    });

    $('.btn-average').click(function(e){
       
        var first_name = $("#first_name_average").val();
        var last_name = $("#last_name_average").val();
        var year = $('#years option:selected').val();
        var student;
        var average;
        for(let i in students)
        {
            if(students[i].first_name == first_name && students[i].last_name == last_name)
            student=students[i];

        }
        if(year == "Wszystkie lata")
        {
            average = helper.getAvarageForStudentAllYears(student);
        }
        else{
            average = helper.getAvarageForStudentInYear(student, 'y'+year);
        }

        $("#average_value").val(average);
        e.preventDefault();




    });

    $('.btn-average-course').click(function(e){
        
        var year = $('#years_average_course option:selected').val();
        var course = $('#courses_average_course option:selected').val();
        var studentsForCourse = helper.getStudentListForCourse(students,"y"+year,course);
        var average = helper.getAverageForCourse(studentsForCourse, 'y'+year, course);
        $("#average_value_course").val(average);
        e.preventDefault();
            
            
            
            
    });
            


});