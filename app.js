const timeLongPress = 500;
const timeInterval = 62.5;

let isPressedLong = false;
let timer = 0;

const getCounter = () => {
  const counterElement = document.querySelector(".count-num");
  return counterElement;
}

const getNum = () => {
  return Number(getCounter().textContent);
}

const setNum = (num) => {
  getCounter().textContent = String(num);
}

const pointerdownChangeNum = (num) => {
  const timeout = isPressedLong ? timeInterval : timeLongPress;

  if (!isPressedLong) {
    setNum(getNum() + num);
    isPressedLong = true;
  }

  timer = setTimeout(() => {
    if (isPressedLong) {
      setNum(getNum() + num);
      pointerdownChangeNum(num);
    }
  }, timeout);
}

const pointerupChangeNum = () => {
  isPressedLong = false;
  clearTimeout(timer);
}

setNum(0);
