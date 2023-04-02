function getSpider() {
  return document.getElementById("spider");
}
function getWeb() {
  return document.getElementById("web");
}

const allSettings = [
  {
    side: "left",
    ratio: 1,
  },
  {
    side: "top",
    ratio: 1 / 2,
  },
  {
    side: "left",
    ratio: 0,
  },
  {
    side: "top",
    ratio: 1,
  },
  {
    side: "left",
    ratio: 1,
  },
];

function spiderRun({ side, ratio, nowSetting = 0 }) {
  const offsetArg = `offset${side == "left" ? "Width" : "Height"}`;
  const spider = getSpider();
  const offset = getWeb()[offsetArg] - spider[offsetArg];
  spider.style[side] = offset * ratio + "px";
  console.log(side, ratio, nowSetting);
  nowSetting++;
  const timeout = side == "left" ? 1000 : 500;
  if (allSettings.length > nowSetting) {
    setTimeout(
      () => spiderRun({ ...allSettings[nowSetting], nowSetting }),
      timeout
    );
    return;
  }
  setTimeout(() => {
    spider.style.transition = "all 1s linear";
    spider.style.left = "0px";
    spider.style.top = "0px";
    setTimeout(() => {
      spider.style.transition = "";
      spiderRun(allSettings[0]);
    }, 1000);
  }, timeout);
}

spiderRun(allSettings[0]);
