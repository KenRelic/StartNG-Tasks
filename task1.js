//

//initialise and store name in variable
const name = 'Simeon Kenneth';
const offered_courses = ['HTML', 'CSS', 'JavaScript'];

//if Number of courses is odd - display odd numbers from 1 -200; else if even then
//display even numbers from 1 - 200 (200 inclusive);


function displaydetails(name, offered_courses) {
    let myName = name;
    let myCourses = offered_courses;
    let courseLength = myCourses.length;
    let numberType = courseLength % 2;
    let numbers = '';
    for (let i = 0; i <= 200; i += 1) {
        //show number type depending on the course number type. that is if even show even numbers
        //if odd show odd numbers
        if ((i!==0) && (i % 2 === numberType)) {
            numbers += `${i}, `;
        };
    };
    return {
        'My Name': myName,
        'My Courses': myCourses,
        'numbers': numbers
    };
};

displaydetails(name, offered_courses);