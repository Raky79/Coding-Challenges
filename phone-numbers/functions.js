function createPhoneNumber(numbers) {
    let conCode = numbers.slice(0,3);
    country = conCode.join('');
    let areaCode = numbers.slice(3,6);
    area = areaCode.join('');
    let postCode = numbers.slice(-4);
    post = postCode.join('');

    return "("+country+")"+" "+area+"-"+post;
    
}

module.exports = createPhoneNumber;


