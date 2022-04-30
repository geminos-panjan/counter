const timeLongPress = 500;
const timeInterval = 62.5;

let isHovered = false;
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

const pointerEnter = () => {
  isHovered = true;
};

const pointerLeave = () => {
  isHovered = false;
  isPressedLong = false;
};

const pointerdownChangeNum = (num) => {
  const timeout = isPressedLong ? timeInterval : timeLongPress;

  if (!isPressedLong && isHovered) {
    setNum(getNum() + num);
    isPressedLong = true;
  }

  timer = setTimeout(() => {
    if (isPressedLong && isHovered) {
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
