function isValid(s) {
    let arrIPSector = s.split('.')
        //проверка на количество блоков цифр
    if (arrIPSector <= 3 || arrIPSector > 4) {
        return false
    }
    for (let i = 0; i < arrIPSector.length; i++) {
        if (arrIPSector[i] > 0 && arrIPSector[i] < 256) {
            return true
        } else {
            return false
        }


    }

    console.log(arrIPSector)

}