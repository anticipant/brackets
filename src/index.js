module.exports = function check(str, bracketsConfig) {

    let array = [];

    // собираю массив конфига
    for (let i = 0; i < bracketsConfig.length; i++ ) {
        array[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
    }

    // console.log(array);
    let length = str.length;

    for (let i = 0; i < length / 2; i++){

        for (let i = 0; i < array.length; i++) {
            let index = str.indexOf(array[i]);
            if (index >= 0) {
                str = str.substring(0,index) + str.substring(index + 2);
            }
        }

    }

    return !str.length > 0;
};
