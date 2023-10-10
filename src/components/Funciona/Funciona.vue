<template>
  <div id="funciona" class="container">
    <h2 class="h2">CÓMO FUNCIONA</h2>
    <ul class="funciona-list">
      <li class="funciona-list--item" v-for="item in services" :key="item">
        <img :src="item.icon" width="80" />
        <div class="content">
          <h3 class="h3">{{ item.title }}</h3>
          <p class="text5">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const services = [
  {
    icon: require("@/assets/func/Ellipse 2.png"),
    title: "Quema la grasa y elimina la celulitis",
    text: 'Los extractos de té verde y la fruta Garcinia Cambogia trabajan juntos, acelerando el metabolismo y quemando la grasa almacenada en el cuerpo. Eliminan rápidamente las toxinas acumuladas y el exceso de líquidos del cuerpo, con total seguridad, adicionalmente estimulan la producción de colágeno, que proporciona elasticidad a la piel, eliminando las estrías y la "piel de naranja".',
    id: 1,
  },
  {
    icon: require("@/assets/func/Ellipse 2 (1).png"),
    title: "LAS CÁPSULAS FASTSLIM reducen el apetito",
    text: "Reducen el nivel de glucosa en la sangre, que envía las señales de saciedad al cerebro. ¡Las porciones grandes y las comidas no saludables ya no te atraerán, ni estimularán tu apetito! Como resultado, consumirás la cantidad de calorías necesarias para mantener el tono muscular sin aumentar de peso.",
    id: 2,
  },
  {
    icon: require("@/assets/func/Ellipse 2 (2).png"),
    title: "Purifica el organismo y acelera el metabolismo.",
    text: "Las sustancias biológicas activas y las vitaminas del grupo B expulsan las toxinas y purifica los vasos del colesterol. Mejoran el metabolismo y el equilibrio hormonal. Las vitaminas fortalecen el sistema inmune. La pérdida de peso es duradera.",
    id: 3,
  },
  {
    icon: require("@/assets/func/Ellipse 2 (3).png"),
    title: "Las cápsulas tienen un poderoso efecto tonificante.",
    text: "Tomando una cápsula por la mañana, el entrenamiento será más efectivo y tendrás un excelente estado de ánimo durante todo el día. Al contribuir con el aumento en el nivel de actividad, quemarás más calorías, y con ellas los centímetros adicionales desaparecerán. ¡Además, las cápsulas Fast Slim tienen un aroma agradable y un sabor increíblemente delicioso!",
    id: 4,
  },
];
</script>

<style lang="scss" scoped>
#funciona {
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
  .h2 {
    margin-bottom: 60px;
    text-align: center;
    @media screen and (min-width: 768px) {
      margin-bottom: 100px;
    }
  }
  .funciona-list--item {
    display: flex;
    align-items: start;
    margin-bottom: 100px;
    img {
      margin-right: 10px;
      @media screen and (min-width: 768px) {
        width: 210px;
        margin-right: 30px;
      }
      @media screen and (min-width: 1440px) {
        width: 255px;
      }
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 160px;
    }
    .content {
      @media screen and (min-width: 768px) {
        width: 65.5%;
        .text5 {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
      @media screen and (min-width: 1440px) {
        width: 54.5%;
      }
    }

    .h3 {
      margin-bottom: 20px;
    }
    .text5 {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  .funciona-list--item:nth-child(even) {
    @media screen and (min-width: 768px) {
      flex-direction: row-reverse;
      img {
        margin-right: 0px;
        margin-left: 30px;
      }
      .content {
        text-align: right;
        h3 {
          width: 80%;
          text-align: right;
          margin: 0 0 0 auto;
        }
      }
    }
    @media screen and (min-width: 1440px) {
      .content {
        h3 {
          width: 83%;
          text-align: right;
          margin: 0 0 30px auto;
        }
      }
    }
  }
}
</style>
