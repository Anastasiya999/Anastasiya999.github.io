

$(document).ready(function(){

    var courses = {
            2020 :['Logika', 'Język C', 'Algebra', 'Systemy operacyjne'],
            2021 :['Metody numeryczne', 'Grafika', 'Język Java', 'Fizyka'],
            2022 :['Techniki WWW', 'Proseminarium', 'Język Python', 'Bazy danych']
    }
    var main = document.getElementById('year');
    var sub = document.getElementById('courses');

    main.addEventListener('change', function(){

        var selected_opt = courses[this.value];

        $('#courses')
        .empty();

        Array.from(selected_opt).forEach(function(item){
            let option = new Option(item, item);
            console.log(item);
            sub.appendChild(option);
        })

    })

    var main2 = document.getElementById('yearForCourse');
    var sub2 = document.getElementById('course_selection');

    main2.addEventListener('change', function(){

        var selected_opt = courses[this.value];

        $('#course_selection')
        .empty();

        Array.from(selected_opt).forEach(function(item){
            let option = new Option(item, item);
            console.log(item);
            sub2.appendChild(option);
        })

    })

    var main3 = document.getElementById('years_average_course');
    var sub3 = document.getElementById('courses_average_course');

    main3.addEventListener('change', function(){

        var selected_opt = courses[this.value];

        $('#courses_average_course')
        .empty();

        Array.from(selected_opt).forEach(function(item){
            let option = new Option(item, item);
            console.log(item);
            sub3.appendChild(option);
        })

    })

});