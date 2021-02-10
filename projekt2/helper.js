function compare(a,b)
    {
        if(a.last_name < b.last_name)
        {
            
            return -1;

        }
           
        if(a.last_name > b.last_name)
            return 1;

        return 0;
        
    }
class Helper{

    constructor(){
        

    }

    getStudentList(studentList)
    {
        var studentListSorted = this._sortByName(studentList);
        
        return studentListSorted;
    }

    getStudentListForCourse(studentList,year,courseName)
    {
       
       var studentListForCourse = new Array();

        for(var i = 0; i < studentList.length; i++)
        {
            if (studentList[i].courses[year])
            {
                if(studentList[i].courses[year][courseName])
                {
                   // studentListForCourse.push({first_name : studentList[i].first_name, 
                      //  last_name: studentList[i].last_name });
                      studentListForCourse.push(studentList[i]);
                }
            }
           

        }
        var students = this._sortByName(studentListForCourse)
        return students;

    }

    getAvarageForStudentInYear(studentObj, year)
    {
        var average = 0.0;
        var gradeQuantity = 0;

        for(var v in studentObj.courses[year])
        {
           var course = studentObj.courses[year][v];
           for(var v1 in course)
           {
               var grades = course[v1];
               var value = this._getAverage(grades);
               average += value.avarage;
               gradeQuantity += value.numberOfGrades;
           }
           
        }
        average = average/gradeQuantity;
        return average.toFixed(2);


    }

    getAvarageForStudentAllYears(studentObj)
    {
        var average = 0.0;
        var gradeQuantity = 0;

        for(var v in studentObj.courses)
        {
            var year = studentObj.courses[v];
            for(var v1 in year)
            {
                var course = year[v1];
                for(var v2 in course)
                {
                    var grades = course[v2];
                    console.log("tu jestem");
                    console.log(grades);
                    var value = this._getAverage(grades);
                    average += value.avarage;
                    gradeQuantity += value.numberOfGrades;
                }
            }
        }
                
        average = average/gradeQuantity;
        return average.toFixed(2);
        

    }

    getAverageForCourse(studentList,year,CourseName)
    {
        var average = 0.0;
        var gradeQuantity = 0;
       
        for(var v in studentList)
        {
            var student = studentList[v];
            for(var v1 in student.courses[year][CourseName])
            {
                //console.log(student.courses[year][CourseName][v1]);
                var grades=student.courses[year][CourseName][v1];
                console.log("grades to : ",grades);
                console.log("v1: ", v1);
                var value = this._getAverage(grades);
                average += value.avarage;
                gradeQuantity += value.numberOfGrades;
                
            }
        }
        average = average/gradeQuantity;
        return average.toFixed(2);

    }

    _sortByName(studentList)
    {
        console.log(studentList[0].last_name);
        var studentListSorted = studentList.sort(compare)  
        return studentListSorted;
    
    }
    
    _getAverage(grades)
    {
        var avar = 0.0;
        var number = 0;
        for(var v in grades)
            {
                var kindOfExercise = grades[v];
                console.log(kindOfExercise);
                for(var i = 0; i < kindOfExercise.length; i++)
                {
                    avar += kindOfExercise[i];
                    number ++;
                }
            }
        return {avarage:avar,numberOfGrades:number};

    }

};