function solve(steps,footprint,speed){

    let distanceInMeters = steps * footprint;
    let speedMetersInSec = speed / 3.6;//1 km = 1000 m/i hour = 3600 sek.
    let time = distanceInMeters / speedMetersInSec;

    let res = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
    //let timeInSek = Math.floor(time - (timeInMin * 60));

    let timeInSek = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInH = Math.floor(time / 3600);
    timeInMin += res;
    timeInH += Math.floor(timeInMin / 60);

    timeInMin = timeInMin % 60;


    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSek < 10 ? `0${timeInSek}` : `${timeInSek}`;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);

    //each 500 meters-rest 1 minute
    //time to uni-`hours:minutes:seconds`

}
solve(4000, 0.60, 5);
console.log('-------------------');
solve(2564, 0.70, 5.5)