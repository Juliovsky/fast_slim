<template>
  <div class="banner">
    <NavigationDesktop class="desktop" />

    <img src="@/assets/img/logo.svg" class="logo tablet mobile" width="20" />
    <div class="content container">
      <img src="@/assets/img/tubes.png" alt="tube" class="tube" width="244" />
      <div class="text-content">
        <h1 class="h1">EL SIMPLE SECRETO DE LA PÉRDIDA DE PESO EFECTIVA</h1>
        <ul class="items-list">
          <li class="items-list-item text" v-for="item in items" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  "Refuerzo de los procesos, que eliminan la grasa",
  "Una poderosa carga de energía durante todo el día",
  "Prevención del consumo de calorías en exceso",
  "Alisamiento de la piel,eliminación de estrías",
  "Aceleración del metabolismo",
];
import NavigationDesktop from "./Navigation/NavigationDesktop";
</script>

<style scoped lang="scss">
.banner {
  background-image: url("@/assets/img/background.png");
  background-position: center;
  background-size: cover;
  padding: 20px;
  .h1 {
    margin-bottom: 60px;
    @media screen and (min-width: 768px) {
      width: 59%;
      margin: 0 auto 60px auto;
    }
    @media screen and (min-width: 1440px) {
      text-align: left;
      width: 91.8%;
      display: block;
      margin: 0 auto 50px 0;
    }
  }
  .logo {
    display: block;
    margin: 0 auto 20px;
  }
  .tube {
    display: block;
    margin: 0 auto 50px auto;
    @media screen and (min-width: 768px) {
      margin: 0 auto 26px auto;
    }
  }
  .items-list {
    width: 89%;
    margin: 0 auto 44px auto;
    @media screen and (min-width: 768px) {
      width: 59%;
      margin: 0 auto 107px auto;
    }
    @media screen and (min-width: 1440px) {
      width: 100%;
      margin: 0;
    }
    .text {
      color: $white;
      clear: left;
      padding: 0.5rem 0;
      margin-bottom: 20px;

      @media screen and (min-width: 768px) {
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    ::before {
      content: "";
      height: 28px;
      width: 20px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      background: url("@/assets/img/list-icon.svg");
      background-size: cover;
      background-position: center;
      padding-left: 28px;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    background-image: url("../../assets/img/background-tablet.png");
  }
  @media screen and (min-width: 1440px) {
    background-image: url("../../assets/img/bgDesk.png");
  }
  .content {
    @media screen and (min-width: 1440px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 60px;
      .text-content {
        width: 54%;
      }
      .tube {
        width: 450px;
        margin: 0 0 0 auto;
      }
    }
  }
}
</style>
