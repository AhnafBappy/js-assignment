

function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        return meter;
}
//demo result
var jilaDistance = kilometerToMeter(46);
var homeDistance = kilometerToMeter(15);
console.log(jilaDistance, homeDistance);


//budget calculator

function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 1000;
    let total =(watchPrice+phonePrice+laptopPrice);
    return total;
}
var totoalcost = budgetCalculator(2, 2,1);
console.log(totoalcost);

//hotel cost
function hotelCost(day){
    var day = 28;
    var fare = 0;
    if(day<= 10){
        fare = day * 100;
    }
    else if (day<=20){
        var firstTendays = 10 * 100;
        var afterTendays = day - 10;
        var secondPrice = fterTendays * 80;
        fare =  firstTendays + afterTendays;

    }
    else{
        var firstTendays = 10 * 100;
        var afterTendays = 10 * 80;
        var tentyDays = day - 20;
        var thirdPrice = twentyDays * 80;
        fare = firstTendays + afterTendays + thirdPrice;
    }
    return fare;
}

//long name friend
function megaFriend(rahim, karim, jodu, modu, sidddik){
    return megaFriend.length;
}
console.log(megaFriend);