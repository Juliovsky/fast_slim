<template>
  <div id="ingredients">
    <ul class="ingredients-list">
      <li class="ingredients-list--item" v-for="{ text } in ingredients">
        <p class="ingredient-text">{{ text }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const ingredients = [
  {
    text: "Esta fruta es rica en ácido hydrocitrico (HCA), que bloquea la conversión del exceso de carbohidratos en tejido adiposo y reduce el apetito. En otras palabras, cuando tu cuerpo necesita energía y tienes hambre, el suplemento comienza a quemar el exceso de carbohidratos y la grasa subcutánea.",
  },
  {
    text: "El mangostán son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "La guaraná son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "Bayas de Goji son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "Jengibre son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "Maracuyá son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "Áloe son componente indispensables que conducen a una pérdida de peso rápida. Tienen un efecto termogénico importante: convierten las calorías en calor, acelerando considerablemente la velocidad del metabolismo. Activan todas las fases de la quema de grasa, evitando la pérdida de elasticidad del cuerpo.",
  },
  {
    text: "Es una sustancia vitamínica, cuya principal tarea es acelerar el metabolismo de las grasas en el cuerpo. Funciona como un quemador de grasa natural. lo que ayuda a reducir la cantidad del tejido adiposo.",
  },
];
</script>

<style scoped lang="scss">
#ingredients {
  margin-bottom: 100px;
  .ingredients-list {
    @media screen and (min-width: 1440px) {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
      }
    }
  }
  li {
    height: 288px;
    background-position: left 30px;
    background-size: auto;
    background-repeat: no-repeat;
    padding: 15px 0;
    position: relative;
    display: flex;
    @media screen and (min-width: 768px) {
      height: 613px;
      padding: 0;
      background-position: left 38px bottom 45%;
    }
    .ingredient-text {
      color: #fff;
      font-size: 10px;
      line-height: 12px;
      font-weight: 600;
      position: absolute;
      padding-bottom: 15px;
      @media screen and (min-width: 768px) {
        font-size: 19px;
        line-height: 22px;
        padding: 0 30px 30px 0;
        bottom: 0;
      }
    }
  }

  li:first-child {
    background-image: url("@/assets/ingredients/Garcinia.png");
    background-color: #f06446;
    justify-content: right;
    background-position: left 40% top 50%;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/cambodTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 1;
    }

    .ingredient-text {
      text-align: right;
      max-width: 68%;
      bottom: 0;
      padding-right: 15px;
      @media screen and (min-width: 768px) {
        padding-right: 30px;
      }
    }
  }

  li:nth-child(2) {
    background-image: url("@/assets/ingredients/Mangostean.png");
    background-color: #f2c36b;
    justify-content: right;
    background-position: left 30% top 40%;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/mangosTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 2;
    }

    .ingredient-text {
      text-align: right;
      max-width: 67%;
      bottom: 0;
      padding-right: 15px;
      @media screen and (min-width: 768px) {
        padding-right: 30px;
      }
    }
  }

  li:nth-child(3) {
    background-image: url("@/assets/ingredients/Guarana.png");
    background-color: #9f99b3;
    justify-content: center;
    background-position: center;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/guaranaTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 4;
    }

    .ingredient-text {
      text-align: center;
      margin: 0 auto;
      bottom: 0;
      width: 90%;
    }
  }

  li:nth-child(4) {
    background-image: url("@/assets/ingredients/Goji.png");
    background-color: #f2c36b;
    justify-content: right;
    background-position: center;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/gojiTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 3;
    }

    .ingredient-text {
      top: 15px;
      text-align: right;
      max-width: 67%;
      padding-right: 15px;
      @media screen and (min-width: 768px) {
        top: 30px;
        max-width: 63%;
        padding-right: 30px;
      }
    }
  }

  li:nth-child(5) {
    background-image: url("@/assets/ingredients/Ginger.png");
    background-color: #f06446;
    justify-content: left;
    background-position: center;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/gingerTab.png");
      background-position: center;
    }
    @media screen and (min-width: 1440px) {
      order: 5;
    }

    .ingredient-text {
      bottom: 0;
      text-align: left;
      padding: 0 0 15px 15px;
      max-width: 70%;
      @media screen and (min-width: 768px) {
        padding: 0 0 30px 30px;
      }
    }
  }

  li:nth-child(6) {
    background-color: #f2c36b;
    background-image: url("@/assets/ingredients/Passion.png");
    justify-content: right;
    background-position: right 30% bottom 20%;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/passionTab.png");
      background-position: right 36px bottom 45%;
    }
    @media screen and (min-width: 1440px) {
      order: 6;
    }

    .ingredient-text {
      top: 15px;
      text-align: right;
      max-width: 70%;
      padding-right: 15px;
      @media screen and (min-width: 768px) {
        top: 0;
        padding: 30px 30px 0 0;
      }
    }
  }

  li:nth-child(7) {
    background-color: #9f99b3;
    background-image: url("@/assets/ingredients/Aloe.png");
    justify-content: left;
    background-position: right 0 bottom 97%;
    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/aloeTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 8;
    }

    .ingredient-text {
      bottom: 0px;
      text-align: left;
      max-width: 70%;
      padding-left: 15px;
      @media screen and (min-width: 768px) {
        bottom: 0;
        padding: 0 0 30px 30px;
        max-width: 55%;
      }
    }
  }

  li:nth-child(8) {
    background-color: #f2c36b;
    background-image: url("@/assets/ingredients/Carnitine.png");
    justify-content: left;
    background-position: center;

    @media screen and (min-width: 768px) {
      background-image: url("@/assets/ingredients/carnitineTab.png");
    }
    @media screen and (min-width: 1440px) {
      order: 7;
    }
    .ingredient-text {
      top: 15px;
      text-align: left;
      max-width: 70%;
      padding-left: 15px;
      @media screen and (min-width: 768px) {
        top: 0;
        padding: 30px 0 0px 30px;
        max-width: 55%;
      }
      @media screen and (min-width: 1440px) {
        max-width: 63%;
      }
    }
  }
}
</style>
