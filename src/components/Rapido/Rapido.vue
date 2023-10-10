<template>
  <div id="rapido">
    <h2 class="h2">RÁPIDO Y EFECTIVO</h2>
    <div class="content-side">
      <ul class="funciona-list">
        <li class="funciona-list--item" v-for="item in factors" :key="item">
          <img :src="item.icon" width="80" />
          <p class="text5">{{ item.text }}</p>
        </li>
      </ul>
      <div class="text-side-cont">
        <h3 class="h3 subtitle">Método de uso:</h3>
        <div class="content">
          <h4 class="text">
            Toma 2 cápsulas al día, bebiendo 1 vaso de agua fría, previamente
            hervida. No masticar. Para lograr un efecto duradero, se recomienda
            tomar el suplemento durante 1 mes. No se debe exceder la dosis
            diaria recomendada.
          </h4>
          <span>
            * El suplemento no causa somnolencia ni reduce la concentración.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const factors = [
  {
    icon: require("@/assets/icons/ph_timer.svg"),
    text: "Las pastillas efervescentes FASTSLIM se disuelven en agua en menos de 60 segundos.",
    id: 1,
  },
  {
    icon: require("@/assets/icons/game-icons_bottled-bolt.svg"),
    text: "Reemplazamos - CÁPSULAS FASTSLIM - una exitosa combinación de deliciosos ingredientes. Las cápsulas son excelentes como aperitivo nutritivo, te aportan energía y te dan una sensación de saciedad, ¡todo a favor de tu silueta!",
    id: 2,
  },
  {
    icon: require("@/assets/icons/iconoir_clean-water.svg"),
    title: "LAS CÁPSULAS FASTSLIM reducen el apetito",
    text: "El complejo vitamínico líquido comienza a funcionar de forma inmediata y no daña el estómago.",
    id: 3,
  },
];
</script>

<style lang="scss" scoped>
#rapido {
  margin-top: 100px;
  .h2 {
    margin-bottom: 22px;
    text-align: center;
    @media screen and (min-width: 768px) {
      margin-bottom: 60px;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 100px;
    }
  }
  .subtitle.h3 {
    @media screen and (min-width: 1440px) {
      padding: 20px;
      width: 67%;
      display: block;
      margin: 0 auto 20px auto;
      text-align: left;
    }
  }
  .content {
    @media screen and (min-width: 768px) {
      padding: 20px;
      width: 61%;
      display: block;
      margin: 0 auto;
    }
    @media screen and (min-width: 1440px) {
      width: 67%;
      h4,
      span {
        text-align: left;
      }
    }
  }
  .content-side {
    @media screen and (min-width: 1440px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
  .funciona-list {
    margin-bottom: 60px;
    @media screen and (min-width: 768px) {
      margin: 0 0 60px auto;
      max-width: 95.5%;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
    .funciona-list--item {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      display: flex;
      padding: 25px 20px 25px 47px;
      align-items: center;
      @media screen and (min-width: 768px) {
        padding: 25px 165px 25px 95px;
        min-height: 200px;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        img {
          width: 96px;
          height: 96px;
          margin-right: 29px;
        }
      }

      .text5 {
        color: white;
        color: #fff;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        @media screen and (min-width: 768px) {
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }

      img {
        margin-right: 15px;
        @media screen and (min-width: 768px) {
          margin-right: 30px;
        }
      }
    }

    .funciona-list--item:first-child {
      background-color: $main-orange;
    }

    .funciona-list--item:nth-child(2) {
      background-color: $text-yellow;
    }

    .funciona-list--item:nth-child(3) {
      background-color: $main-purple;
    }
  }
  .h3 {
    text-align: center;
    margin-bottom: 60px;
  }
  .text {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 30px;
    }
  }
  span {
    display: block;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
}
</style>
