var CookieIMG = document.getElementById('CookieIMG');
var CookieNo = document.getElementById('CookieNo');
var WorkerButton = document.getElementById('WorkerButton');
var WorkerCost = document.getElementById('WorkerCost');
var FarmButton = document.getElementById('FarmButton');
var FarmCost = document.getElementById('FarmCost');
var FactoryButton = document.getElementById('FactoryButton');
var FactoryCost = document.getElementById('FactoryCost');
var ClickPowerIncreaseButton = document.getElementById('CookieClickUpgradeButton');
var ClickPowerIncreaseCost = document.getElementById('CookieClickUpgradeCost');
var CookieText = document.getElementById('Cookie_text');
var CookiesCount = 10000000;
var Workercount = 0;
var Farmcount = 0;
var Factorycount = 0;
var ClickPowerCount = 0;
var WorkerCostIncrease = 10;
var FarmCostIncrease = 100;
var FactoryCostIncrease = 300;
var ClickPowerCostIncrease = 500;
var CookieAnimation = 240;
CookieIMG.onclick = IncreaseCookieNo;
WorkerButton.onclick = CreatedNewWorker;
FarmButton.onclick = CreatedNewFarm;
FactoryButton.onclick = CreatedNewFactory;
ClickPowerIncreaseButton.onclick = IncreaseClickingPower;

function IncreaseCookieNo() {
    CookieIMG.style.width = "175px";
    CookieIMG.style.height = "175px";
    CookiesCount++;
    CookiesCount = CookiesCount + ClickPowerCount;    
    CookieText.innerHTML = "+" + (ClickPowerCount + 1) + "!";
    CookieAnimation = 240;
    CookieNo.innerHTML = CookiesCount.toFixed(1);
    console.log("Cookie Clicked");;
}

function CreatedNewWorker() {
    if (CookiesCount >= WorkerCost.innerHTML) {
        CookiesCount = CookiesCount - WorkerCostIncrease;
        CookieNo.innerHTML = CookiesCount.toFixed(1);
        Workercount += +0.1;
        WorkerCostIncrease = WorkerCostIncrease + 10;
        WorkerCost.innerHTML = WorkerCostIncrease;
        console.log("New Worker Created!");
    }
}

function CreatedNewFarm() {
    if (CookiesCount >= FarmCost.innerHTML) {
        CookiesCount = CookiesCount - FarmCostIncrease;
        CookieNo.innerHTML = CookiesCount.toFixed(1);
        Farmcount += +0.5;
        FarmCostIncrease = FarmCostIncrease + 100;
        FarmCost.innerHTML = FarmCostIncrease;
        console.log("New Farm Created!");
    }
}

function CreatedNewFactory() {
    if (CookiesCount >= FactoryCost.innerHTML) {
        CookiesCount = CookiesCount - FactoryCostIncrease;
        CookieNo.innerHTML = CookiesCount.toFixed(1);
        Factorycount += +1;
        FactoryCostIncrease = FactoryCostIncrease + 300;
        FactoryCost.innerHTML = FactoryCostIncrease;
        console.log("New Factory Created!");
    }
}

function IncreaseClickingPower() {
    if (CookiesCount >= ClickPowerIncreaseCost.innerHTML) {
        if (ClickPowerCount == 0) {
            ClickPowerCount = ClickPowerCount + 4;
        } else {
            ClickPowerCount = ClickPowerCount + 5;
        }

        CookiesCount = CookiesCount - ClickPowerCostIncrease;
        CookieNo.innerHTML = CookiesCount.toFixed(1);
        ClickPowerCostIncrease = ClickPowerCostIncrease + 500;
        ClickPowerIncreaseCost.innerHTML = ClickPowerCostIncrease;
        console.log("Clicking power increased!");
    }
}

var MakingCookies = setInterval(function () {
    if (Workercount > 0) {
        CookiesCount = CookiesCount + (Workercount) / 1000
        CookieNo.innerHTML = CookiesCount.toFixed(1);
    }
    if (Farmcount > 0) {
        CookiesCount = CookiesCount + (Farmcount) / 1000
        CookieNo.innerHTML = CookiesCount.toFixed(1);
    }
    if (Factorycount > 0) {
        CookiesCount = CookiesCount + (Factorycount) / 1000
        CookieNo.innerHTML = CookiesCount.toFixed(1);
    }
}, 1)

var IMGCookieToNormalSizeAndButtonDisable = setInterval(function () {
    if (CookieIMG.style.width == "175px") {
        CookieIMG.style.width = "200px";
        CookieIMG.style.height = "200px";
    }
    if (CookiesCount < WorkerCost.innerHTML) {
        WorkerButton.disabled = true;
    }
    if (CookiesCount >= WorkerCost.innerHTML) {
        WorkerButton.disabled = false;
    }
    if (CookiesCount < FarmCost.innerHTML) {
        FarmButton.disabled = true;
    }
    if (CookiesCount >= FarmCost.innerHTML) {
        FarmButton.disabled = false;
    }
    if (CookiesCount < FactoryCost.innerHTML) {
        FactoryButton.disabled = true;
    }
    if (CookiesCount >= FactoryCost.innerHTML) {
        FactoryButton.disabled = false;
    }
    if (CookiesCount < ClickPowerIncreaseCost.innerHTML) {
        ClickPowerIncreaseButton.disabled = true;
    }
    if (CookiesCount >= ClickPowerIncreaseCost.innerHTML) {
        ClickPowerIncreaseButton.disabled = false;
    }
}, 100)

var CookieClickAnimation = setInterval(function () {
    if(CookieText.innerHTML != null){
        CookieText.style.bottom = (CookieAnimation + 1) + "px";
        CookieAnimation = CookieAnimation + 1;
    }
    if(CookieAnimation == 340){
        CookieAnimation = 240;
        CookieText.innerHTML = "";
    }
},40)