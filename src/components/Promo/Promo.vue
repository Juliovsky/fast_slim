<template>
  <div class="main-bg">
    <div class="promo" id="promo">
      <div class="cont">
        <div class="prices">
          <h4 class="previous-price">1698 MXN</h4>
          <h4 class="current-price">849 MXN</h4>
        </div>
        <h3 class="title">
          Date prisa para comprar "Fast Slim" con descuento y comienza tu viaje
          hacia el cuerpo de tus sueños
        </h3>
        <p class="subText">Tiempo restante hasta el final de la promoción:</p>
        <Countdown
          :showDays="false"
          :deadline="tomorrowDate"
          labelColor="white"
          secondFlipBackgroundColor="white"
          mainFlipBackgroundColor="white"
          mainColor="#f26341"
          countdownSize="2.6rem"
          labelSize="1.1rem"
          :labels="{
            hours: 'Horas',
            minutes: 'Minutos',
            seconds: 'Segundos',
          }"
        />
        <a href="#contact" class="btn" v-smooth-scroll>Compar</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Countdown } from "vue3-flip-countdown";
import { computed } from "vue";
const tomorrowDate = computed(() => {
  let currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 1);
  currentDate.setHours(0, 0, 0, 0);

  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // добавляем ведущий ноль, если месяц состоит из одной цифры
  let day = String(currentDate.getDate()).padStart(2, "0");
  let hours = String(currentDate.getHours()).padStart(2, "0");
  let minutes = String(currentDate.getMinutes()).padStart(2, "0");
  let seconds = String(currentDate.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
});
</script>
<style scoped lang="scss">
.main-bg {
  @media screen and (min-width: 1440px) {
    background-image: url("@/assets/img/desk-wom-bg.png");
    background-position: left;
    background-size: auto;
    background-repeat: no-repeat;
    height: 1112px;
    display: flex;
    align-items: center;
  }
}
.promo {
  background-image: url("@/assets/img/Timer.png");
  max-width: 330px;
  height: 462px;
  background-position: center;
  background-size: cover;
  margin: 100px auto 120px auto;
  @media screen and (min-width: 768px) {
    max-width: 719px;
    height: 893px;
    background-repeat: no-repeat;
    margin: 125px auto;
    background-size: contain;
  }
  @media screen and (min-width: 1440px) {
    background-image: url("@/assets/img/bgPromo.png");
    max-width: 1005px;
    height: 866px;
    background-position: center;
    background-size: cover;
    margin: 0 0 0 67px;
  }
  .btn {
    @media screen and (min-width: 768px) {
      margin-top: 40px;
    }
  }
  .cont {
    margin-left: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 58px;
      width: calc(100% - 100px);
    }
    @media screen and (min-width: 1440px) {
      width: calc(100% - 322px);
      margin: 0 0 0 auto;
    }
  }
  .prices {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 65px;
    margin-bottom: 27px;
    @media screen and (min-width: 768px) {
      padding-top: 120px;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 90px;
    }

    .previous-price {
      position: relative;
      display: inline-block;
      color: $main-orange;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      @media screen and (min-width: 768px) {
        padding-top: 45px;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 10px;
      }
    }

    .previous-price::after {
      content: "";
      width: 100%;
      height: 2px;
      background: $main-orange;
      position: absolute;
      bottom: 11px;
      left: 0;
      @media screen and (min-width: 768px) {
        bottom: 18px;
      }
    }

    .current-price {
      color: #fff;
      text-align: center;
      font-family: "comba-boldultrawide";
      font-style: normal;
      line-height: normal;
      width: 100%;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      @media screen and (min-width: 768px) {
        font-size: 36px;
        font-weight: 700;
      }
    }
  }
  .title {
    font-family: "comba-boldultrawide";
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 auto 27px auto;
    width: 70%;
    @media screen and (min-width: 768px) {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 60px;
      width: 68.2%;
    }
  }
  .subText {
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 48%;
    margin: 0 auto 10px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 30px;
    }
  }
}
</style>

<style lang="scss">
.flip-clock__piece {
  margin-right: 5px !important;
  @media screen and (min-width: 768px) {
    margin-left: 20px !important;
    max-width: 70px;
    transform: scale(1.25);
  }
}
.flip-clock__slot {
  font-weight: 600;
}
.flip-card__back-bottom,
.flip-card__back-bottom-4digits,
.flip-card__bottom,
.flip-card__bottom-4digits {
  border: none !important;
}
</style>
