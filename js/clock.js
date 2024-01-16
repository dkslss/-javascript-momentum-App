const clock = document.querySelector("h2#clock");

/*
    시간 만들어주는 함수 
        - 자릿수가 한자리인경우 앞자리에 0을 채워주는 함수 padStart() 추가
*/
function getClock() {
    const date = new Date();
    let hours = date.getHours().toString().padStart(2,"0");
    let minutes = date.getMinutes().toString().padStart(2,"0");
    let seconds = date.getSeconds().toString().padStart(2,"0");


    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);