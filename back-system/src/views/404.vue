<template>
 <div>
     <main class='container1'>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>4</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <span class='particle'>0</span>
  <article class='content'>
    <p>Damnit stranger,</p>
    <p>You got lost in the <strong>404</strong> galaxy.</p>
    <p>
      <button>Go back to earth.</button>
    </p>
  </article>
</main>

 </div>
</template>

<script>
export default {
 name : "", 
 data(){
  return {

  }
 },
 components : {

 },
}
</script>


<style scoped>
body {
  margin: 0;
  font-size: 20px;
}

* {
  box-sizing: border-box;
}

.container1 {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2D2D5C; 
  color: rgba(255,255,255,.3);
  font-family: arial, sans-serif;
  overflow: hidden;
}

.content {
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: 20px;
  background: white;
  padding: 60px 40px;
  text-align: center;
  box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;
}
.content p {
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0.6rem;
  letter-spacing: 0.1rem;
  color: #595959;
}
.content p:last-child {
  margin-bottom: 0;
}
.content button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 3px solid #595959;
  background: transparent;
  font-size: 1rem;
  color: #595959;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
}

.particle {
  position: absolute;
  display: block;
  pointer-events: none;
}
.particle:nth-child(1) {
  top: 37.1184371184%;
  left: 21.5897939156%;
  font-size: 19px;
  filter: blur(0.02px);
  animation: 39s float infinite;
}
.particle:nth-child(2) {
  top: 26.3093788063%;
  left: 44.0744368266%;
  font-size: 21px;
  filter: blur(0.04px);
  animation: 27s float2 infinite;
}
.particle:nth-child(3) {
  top: 54.1062801932%;
  left: 12.6459143969%;
  font-size: 28px;
  filter: blur(0.06px);
  animation: 37s float infinite;
}
.particle:nth-child(4) {
  top: 38.2352941176%;
  left: 37.4015748031%;
  font-size: 16px;
  filter: blur(0.08px);
  animation: 32s floatReverse2 infinite;
}
.particle:nth-child(5) {
  top: 31.2958435208%;
  left: 48.1335952849%;
  font-size: 18px;
  filter: blur(0.1px);
  animation: 40s float infinite;
}
.particle:nth-child(6) {
  top: 58.1997533909%;
  left: 59.3471810089%;
  font-size: 11px;
  filter: blur(0.12px);
  animation: 31s float infinite;
}
.particle:nth-child(7) {
  top: 77.9284833539%;
  left: 54.4015825915%;
  font-size: 11px;
  filter: blur(0.14px);
  animation: 29s float infinite;
}
.particle:nth-child(8) {
  top: 0.9720534629%;
  left: 57.6735092864%;
  font-size: 23px;
  filter: blur(0.16px);
  animation: 36s floatReverse2 infinite;
}
.particle:nth-child(9) {
  top: 55.1390568319%;
  left: 49.6592015579%;
  font-size: 27px;
  filter: blur(0.18px);
  animation: 25s floatReverse infinite;
}
.particle:nth-child(10) {
  top: 5.8823529412%;
  left: 78.7401574803%;
  font-size: 16px;
  filter: blur(0.2px);
  animation: 40s floatReverse infinite;
}
.particle:nth-child(11) {
  top: 50.8557457213%;
  left: 69.7445972495%;
  font-size: 18px;
  filter: blur(0.22px);
  animation: 38s float infinite;
}
.particle:nth-child(12) {
  top: 91.1515151515%;
  left: 28.2926829268%;
  font-size: 25px;
  filter: blur(0.24px);
  animation: 29s floatReverse2 infinite;
}
.particle:nth-child(13) {
  top: 45.4655380895%;
  left: 61.3437195716%;
  font-size: 27px;
  filter: blur(0.26px);
  animation: 35s floatReverse infinite;
}
.particle:nth-child(14) {
  top: 40.245398773%;
  left: 23.645320197%;
  font-size: 15px;
  filter: blur(0.28px);
  animation: 23s floatReverse2 infinite;
}
.particle:nth-child(15) {
  top: 4.8309178744%;
  left: 38.9105058366%;
  font-size: 28px;
  filter: blur(0.3px);
  animation: 29s float2 infinite;
}
.particle:nth-child(16) {
  top: 62.8019323671%;
  left: 43.7743190661%;
  font-size: 28px;
  filter: blur(0.32px);
  animation: 24s floatReverse2 infinite;
}
.particle:nth-child(17) {
  top: 47.0588235294%;
  left: 97.4409448819%;
  font-size: 16px;
  filter: blur(0.34px);
  animation: 25s float2 infinite;
}
.particle:nth-child(18) {
  top: 66.7472793229%;
  left: 5.8422590068%;
  font-size: 27px;
  filter: blur(0.36px);
  animation: 24s float2 infinite;
}
.particle:nth-child(19) {
  top: 82.4539877301%;
  left: 6.8965517241%;
  font-size: 15px;
  filter: blur(0.38px);
  animation: 21s float infinite;
}
.particle:nth-child(20) {
  top: 46.772228989%;
  left: 9.7943192948%;
  font-size: 21px;
  filter: blur(0.4px);
  animation: 36s floatReverse infinite;
}
.particle:nth-child(21) {
  top: 15.6288156288%;
  left: 65.7507360157%;
  font-size: 19px;
  filter: blur(0.42px);
  animation: 35s floatReverse infinite;
}
.particle:nth-child(22) {
  top: 44.5520581114%;
  left: 45.8089668616%;
  font-size: 26px;
  filter: blur(0.44px);
  animation: 40s float2 infinite;
}
.particle:nth-child(23) {
  top: 64.1555285541%;
  left: 68.4261974585%;
  font-size: 23px;
  filter: blur(0.46px);
  animation: 36s floatReverse infinite;
}
.particle:nth-child(24) {
  top: 19.3939393939%;
  left: 62.4390243902%;
  font-size: 25px;
  filter: blur(0.48px);
  animation: 35s float2 infinite;
}
.particle:nth-child(25) {
  top: 18.7422934649%;
  left: 17.8041543027%;
  font-size: 11px;
  filter: blur(0.5px);
  animation: 30s float2 infinite;
}
.particle:nth-child(26) {
  top: 59.8773006135%;
  left: 84.7290640394%;
  font-size: 15px;
  filter: blur(0.52px);
  animation: 32s float infinite;
}
.particle:nth-child(27) {
  top: 93.5960591133%;
  left: 60.2766798419%;
  font-size: 12px;
  filter: blur(0.54px);
  animation: 34s float infinite;
}
.particle:nth-child(28) {
  top: 4.914004914%;
  left: 60.157790927%;
  font-size: 14px;
  filter: blur(0.56px);
  animation: 26s float infinite;
}
.particle:nth-child(29) {
  top: 13.6087484812%;
  left: 84.0664711632%;
  font-size: 23px;
  filter: blur(0.58px);
  animation: 21s float2 infinite;
}
.particle:nth-child(30) {
  top: 32.8899637243%;
  left: 29.2112950341%;
  font-size: 27px;
  filter: blur(0.6px);
  animation: 21s float2 infinite;
}
.particle:nth-child(31) {
  top: 9.7442143727%;
  left: 48.971596474%;
  font-size: 21px;
  filter: blur(0.62px);
  animation: 33s float2 infinite;
}
.particle:nth-child(32) {
  top: 57.0024570025%;
  left: 1.9723865878%;
  font-size: 14px;
  filter: blur(0.64px);
  animation: 40s float2 infinite;
}
.particle:nth-child(33) {
  top: 16.4053075995%;
  left: 9.7181729835%;
  font-size: 29px;
  filter: blur(0.66px);
  animation: 38s float infinite;
}
.particle:nth-child(34) {
  top: 43.4782608696%;
  left: 89.4941634241%;
  font-size: 28px;
  filter: blur(0.68px);
  animation: 25s float infinite;
}
.particle:nth-child(35) {
  top: 57.5609756098%;
  left: 58.8235294118%;
  font-size: 20px;
  filter: blur(0.7px);
  animation: 29s float2 infinite;
}
.particle:nth-child(36) {
  top: 34.0632603406%;
  left: 64.5792563601%;
  font-size: 22px;
  filter: blur(0.72px);
  animation: 34s floatReverse2 infinite;
}
.particle:nth-child(37) {
  top: 7.8048780488%;
  left: 26.4705882353%;
  font-size: 20px;
  filter: blur(0.74px);
  animation: 34s float infinite;
}
.particle:nth-child(38) {
  top: 76.4207980653%;
  left: 29.2112950341%;
  font-size: 27px;
  filter: blur(0.76px);
  animation: 27s float2 infinite;
}
.particle:nth-child(39) {
  top: 75.4901960784%;
  left: 75.7874015748%;
  font-size: 16px;
  filter: blur(0.78px);
  animation: 29s float2 infinite;
}
.particle:nth-child(40) {
  top: 67.4698795181%;
  left: 50.4854368932%;
  font-size: 30px;
  filter: blur(0.8px);
  animation: 22s float2 infinite;
}
.particle:nth-child(41) {
  top: 17.5395858709%;
  left: 78.3545543585%;
  font-size: 21px;
  filter: blur(0.82px);
  animation: 28s floatReverse infinite;
}
.particle:nth-child(42) {
  top: 11.7359413203%;
  left: 45.1866404715%;
  font-size: 18px;
  filter: blur(0.84px);
  animation: 25s floatReverse infinite;
}
.particle:nth-child(43) {
  top: 44.8780487805%;
  left: 60.7843137255%;
  font-size: 20px;
  filter: blur(0.86px);
  animation: 23s float infinite;
}
.particle:nth-child(44) {
  top: 76.8856447689%;
  left: 28.3757338552%;
  font-size: 22px;
  filter: blur(0.88px);
  animation: 31s float infinite;
}
.particle:nth-child(45) {
  top: 5.8465286236%;
  left: 73.4573947111%;
  font-size: 21px;
  filter: blur(0.9px);
  animation: 21s float2 infinite;
}
.particle:nth-child(46) {
  top: 49.5145631068%;
  left: 63.4765625%;
  font-size: 24px;
  filter: blur(0.92px);
  animation: 23s floatReverse2 infinite;
}
.particle:nth-child(47) {
  top: 40.6287787183%;
  left: 52.5803310613%;
  font-size: 27px;
  filter: blur(0.94px);
  animation: 24s float infinite;
}
.particle:nth-child(48) {
  top: 49.5145631068%;
  left: 96.6796875%;
  font-size: 24px;
  filter: blur(0.96px);
  animation: 38s float2 infinite;
}
.particle:nth-child(49) {
  top: 20.5882352941%;
  left: 76.7716535433%;
  font-size: 16px;
  filter: blur(0.98px);
  animation: 26s floatReverse2 infinite;
}
.particle:nth-child(50) {
  top: 66.8304668305%;
  left: 58.1854043393%;
  font-size: 14px;
  filter: blur(1px);
  animation: 22s float infinite;
}
.particle:nth-child(51) {
  top: 77.8588807786%;
  left: 23.4833659491%;
  font-size: 22px;
  filter: blur(1.02px);
  animation: 28s float2 infinite;
}
.particle:nth-child(52) {
  top: 91.3730255164%;
  left: 11.7302052786%;
  font-size: 23px;
  filter: blur(1.04px);
  animation: 29s float infinite;
}
.particle:nth-child(53) {
  top: 69.5652173913%;
  left: 29.1828793774%;
  font-size: 28px;
  filter: blur(1.06px);
  animation: 39s float2 infinite;
}
.particle:nth-child(54) {
  top: 56.157635468%;
  left: 0.9881422925%;
  font-size: 12px;
  filter: blur(1.08px);
  animation: 25s floatReverse infinite;
}
.particle:nth-child(55) {
  top: 87.4848116646%;
  left: 30.303030303%;
  font-size: 23px;
  filter: blur(1.1px);
  animation: 23s floatReverse2 infinite;
}
.particle:nth-child(56) {
  top: 36.4981504316%;
  left: 14.8367952522%;
  font-size: 11px;
  filter: blur(1.12px);
  animation: 35s float infinite;
}
.particle:nth-child(57) {
  top: 11.8372379778%;
  left: 44.5103857567%;
  font-size: 11px;
  filter: blur(1.14px);
  animation: 28s floatReverse2 infinite;
}
.particle:nth-child(58) {
  top: 18.401937046%;
  left: 75.0487329435%;
  font-size: 26px;
  filter: blur(1.16px);
  animation: 25s float2 infinite;
}
.particle:nth-child(59) {
  top: 28.5362853629%;
  left: 18.7561697927%;
  font-size: 13px;
  filter: blur(1.18px);
  animation: 27s floatReverse2 infinite;
}
.particle:nth-child(60) {
  top: 66.4224664225%;
  left: 34.3473994112%;
  font-size: 19px;
  filter: blur(1.2px);
  animation: 24s floatReverse2 infinite;
}
.particle:nth-child(61) {
  top: 68.6819830713%;
  left: 84.7127555988%;
  font-size: 27px;
  filter: blur(1.22px);
  animation: 37s float infinite;
}
.particle:nth-child(62) {
  top: 18.7422934649%;
  left: 7.9129574679%;
  font-size: 11px;
  filter: blur(1.24px);
  animation: 36s float2 infinite;
}
.particle:nth-child(63) {
  top: 34.2298288509%;
  left: 10.8055009823%;
  font-size: 18px;
  filter: blur(1.26px);
  animation: 32s floatReverse2 infinite;
}
.particle:nth-child(64) {
  top: 13.6419001218%;
  left: 42.1155729677%;
  font-size: 21px;
  filter: blur(1.28px);
  animation: 36s floatReverse infinite;
}
.particle:nth-child(65) {
  top: 49.5145631068%;
  left: 55.6640625%;
  font-size: 24px;
  filter: blur(1.3px);
  animation: 32s floatReverse2 infinite;
}
.particle:nth-child(66) {
  top: 71.0234278668%;
  left: 19.7823936696%;
  font-size: 11px;
  filter: blur(1.32px);
  animation: 39s floatReverse infinite;
}
.particle:nth-child(67) {
  top: 30.3549571603%;
  left: 98.3284169125%;
  font-size: 17px;
  filter: blur(1.34px);
  animation: 24s floatReverse infinite;
}
.particle:nth-child(68) {
  top: 27.4846625767%;
  left: 94.5812807882%;
  font-size: 15px;
  filter: blur(1.36px);
  animation: 21s floatReverse infinite;
}
.particle:nth-child(69) {
  top: 59.1133004926%;
  left: 18.7747035573%;
  font-size: 12px;
  filter: blur(1.38px);
  animation: 29s floatReverse2 infinite;
}
.particle:nth-child(70) {
  top: 91.5956151035%;
  left: 10.7737512243%;
  font-size: 21px;
  filter: blur(1.4px);
  animation: 34s float infinite;
}
.particle:nth-child(71) {
  top: 25.458996328%;
  left: 92.4287118977%;
  font-size: 17px;
  filter: blur(1.42px);
  animation: 23s float2 infinite;
}
.particle:nth-child(72) {
  top: 85.9903381643%;
  left: 18.4824902724%;
  font-size: 28px;
  filter: blur(1.44px);
  animation: 33s floatReverse infinite;
}
.particle:nth-child(73) {
  top: 6.8126520681%;
  left: 51.8590998043%;
  font-size: 22px;
  filter: blur(1.46px);
  animation: 22s floatReverse infinite;
}
.particle:nth-child(74) {
  top: 96.8523002421%;
  left: 68.2261208577%;
  font-size: 26px;
  filter: blur(1.48px);
  animation: 29s floatReverse infinite;
}
.particle:nth-child(75) {
  top: 0.9661835749%;
  left: 62.2568093385%;
  font-size: 28px;
  filter: blur(1.5px);
  animation: 25s float2 infinite;
}
.particle:nth-child(76) {
  top: 73.607748184%;
  left: 38.9863547758%;
  font-size: 26px;
  filter: blur(1.52px);
  animation: 27s float2 infinite;
}
.particle:nth-child(77) {
  top: 72.1951219512%;
  left: 45.0980392157%;
  font-size: 20px;
  filter: blur(1.54px);
  animation: 32s floatReverse2 infinite;
}
.particle:nth-child(78) {
  top: 39.263803681%;
  left: 70.9359605911%;
  font-size: 15px;
  filter: blur(1.56px);
  animation: 26s floatReverse infinite;
}
.particle:nth-child(79) {
  top: 17.7121771218%;
  left: 32.5765054294%;
  font-size: 13px;
  filter: blur(1.58px);
  animation: 25s float2 infinite;
}
.particle:nth-child(80) {
  top: 82.5242718447%;
  left: 27.34375%;
  font-size: 24px;
  filter: blur(1.6px);
  animation: 33s floatReverse infinite;
}

@keyframes apparition {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes float {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(180px);
  }
}
@keyframes floatReverse {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
}
@keyframes float2 {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(28px);
  }
}
@keyframes floatReverse2 {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-28px);
  }
}

</style>