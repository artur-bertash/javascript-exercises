const findTheOldest = function (people) {
    let oldest = 0
    people.forEach(person => {
        let age = person.yearOfDeath - person.yearOfBirth
        if (age > oldest) {
            oldest = age
            let res = person
        }

    });
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
