// a function that takes in a parameter
function yugioh(number) {

    var numbers = [];

    for (var div = 1; div <= number; div++) {

        if (div % 2 == 0 && div % 3 == 0 && div % 5 == 0) {

            numbers.push("yu-gi-oh");

        } else

        if (div % 2 == 0 && div % 3 == 0) {
            numbers.push("yu-gi");
        } else

        if (div % 2 == 0 && div % 5 == 0) {
            numbers.push("yu-oh");

        } else

        if (div % 3 == 0 && div % 5 == 0) {

            numbers.push("gi-oh");

        } else
        if (div % 2 == 0) {
            numbers.push("yu");
        } else
        if (div % 3 == 0) {
            numbers.push("gi");
        } else
        if (div % 5 == 0) {
            numbers.push("oh");
        } else {
            numbers.push(div);
        }

    }

    console.log(numbers);
    return numbers;
}
//calling the function yugioh

yugioh(100);

yugioh(27);

//returns [ 1, 'yu', 'gi', 'yu', 'oh', 'yu-gi', 7, 'yu', 'gi', 'yu-oh' ] 
//when the function is called with 10