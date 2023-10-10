<template>
  <div id="feedbacks" class="container">
    <h2 class="title h2">Comentarios de nuestros clientes</h2>
    <vueper-slides
      fade
      :touchable="false"
      :bullets="false"
      class="mobile tablet"
      autoplay
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template #content>
          <div class="content">
            <img :src="slide.img" />
            <div class="feedback-content container">
              <p class="kilo h2">{{ slide.kilo }}</p>
              <p class="name text4">{{ slide.author }}</p>
              <p class="comment text3">{{ slide.text }}</p>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <vueper-slides
      class="no-shadow desktop container"
      :visible-slides="3"
      :bullets="false"
      slide-multiple
      :slide-ratio="1 / 6"
      :gap="5"
      :arrows-outside="false"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template #content>
          <div class="content">
            <img :src="slide.img" />
            <div class="feedback-content container">
              <p class="kilo h2">{{ slide.kilo }}</p>
              <p class="name text4">{{ slide.author }}</p>
              <p class="comment text3">{{ slide.text }}</p>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

const slides = [
  {
    img: require("@/assets/feedbacks/2.jpeg"),
    kilo: "¡Adelgazó 22 kg en 4 semanas!",
    author: "Maria Hernández Torres, 26 años, México",
    text: "¡Rápido y sano!¡Todo este tratamiento ocurrió en un abrir y cerrar de ojos! Empecé a aplicar este producto el primer día de vacaciones. Cuando volví a la oficina 2 semanas después, todos se quedaron asombrados. Mi jefe incluso habló conmigo en privado, ya que estaba preocupado por si tenía alguna enfermedad grave, ya que había adelgazado tan rápido. ¡Respiró con un alivio incontenido cuando le hablé del tratamiento y de lo maravillosamente que me sentía! Me dio la enhorabuena y me preguntó cómo se llamaba el producto, ya que se lo quería comprar a su hija, que engordaba por culpa de los esteroides. El tratamiento también ayudó a la hija de mi jefe (adelgazó al peso adecuado), ¡y ahora me han subido el sueldo!",
  },
  {
    img: require("@/assets/feedbacks/3.jpeg"),
    kilo: "¡Adelgazó 23 kg en 8 semanas!",
    author: "Lara Berasategi Castro, 31 años, Monterrey",
    text: "He derrotado los complejos y he vuelto a encontrar el amor. En toda mi vida, he intentado adelgazar exactamente 17 veces. Probé las dietas de hambre, sin efecto alguno. Dieta de col, dieta Dukan, dieta purificadora, dieta cetogénica. Lo probé todo, sin efecto alguno. Estaba hundida, ya que todas mis relaciones se iban al diablo por culpa de mis complejos. Estaba celosa de mis parejas, me quejaba de mi aspecto... Nunca habría pensado que después de tantos años de tormento iba a adelgazar aplicando este producto. ¡Ha sido asombroso! Comprar ropa ya no me supone una molestia, ¡¡¡ya que mi talla CH o M está disponible en todos lados!!! No siento vergüenza cuando la gente me mira estando de vacaciones. Un giro de 180 grados, de verdad. Me siento una mujer al 100% que vale mucho y se merece la atención de los hombres. No tengo miedo de que me pongan los cuernos con una mujer más delgada. ¡Porque ahora yo soy la mujer delgada! Además, mi actual novio me pidió matrimonio hace poco. ¡Me encanta mi vida!",
  },
  {
    img: require("@/assets/feedbacks/1.jpeg"),
    kilo: "¡Adelgazó 11 kg en 3,5 semanas!",
    author: "Manuel Suárez Gomez, 34 años, Guadalajara",
    text: "Como lo que quiero y no tengo panza! Ya había caído varias veces con distintos anuncios y recomendaciones de conocidos. En este caso también iba a decir que NO. Pero mis hijas no dejaban de molestarme y me dijeron que usara este producto si no quería alimentarme con puras ensaladas. Entonces empecé a usarlo para que me dejaran en paz. La composición es natural, así que supuse que no me iba a hacer daño, y ellas iban a comprobar de que no valía nada. Pues tuve que tragarme mis palabras y, por una vez, no tenía razón. La panza me desapareció literalmente en una semana. También reconozco que me siento mucho mejor. Hasta juego al fútbol con mis nietos sin ningún problema. Pero sigo comiendo lo de siempre. Muy bueno",
  },
];
</script>

<style lang="scss">
#feedbacks {
  width: 100% !important;
  margin-top: 120px;
  @media screen and (min-width: 1440px) {
    margin-top: 160px;
  }
  .vueperslides__track-inner {
    @media screen and (min-width: 1440px) {
      justify-content: space-between;
    }
  }
  .vueperslides__track-inner .vueperslide {
    @media screen and (min-width: 1440px) {
      width: 33.33% !important;
      margin-right: 0px !important;
      display: flex;
      align-items: center;
      height: fit-content;
    }
  }
  .vueperslides {
    margin-bottom: 100px;
    @media screen and (min-width: 768px) {
      max-width: 690px;
      margin: 0 auto;
    }
    @media screen and (min-width: 1440px) {
      max-width: 100%;
    }
  }

  .vueperslides__parallax-wrapper {
    height: 900px;
    @media screen and (min-width: 768px) {
      height: 690px;
    }
    @media screen and (min-width: 1440px) {
      height: 1180px;
      //max-height: 250px;
      //padding: 0 !important;
    }
  }
  .vueperslide {
    display: flex;
    align-items: center;
  }
  .vueperslides__track-inner .vueperslide:nth-child(3) .feedback-content {
    margin-left: 18px;
  }
  .vueperslides__arrow svg {
    color: $main-orange;
    @media screen and (min-width: 768px) {
      transform: scale(1.5);
    }
  }
  .vueperslides:not(.no-shadow):not(.vueperslides--3d)
    .vueperslides__parallax-wrapper:before,
  .vueperslides:not(.no-shadow):not(.vueperslides--3d)
    .vueperslides__parallax-wrapper:after {
    box-shadow: none;
  }
}
</style>

<style scoped lang="scss">
.title {
  text-align: center;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    margin-bottom: 120px;
  }
}
.content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    max-width: 100%;
    align-items: flex-start;
  }

  img {
    margin: 0 auto 20px auto;
    height: 270px;
    @media screen and (min-width: 768px) {
      height: 302px;
      margin: 0 auto 40px auto;
    }
  }
  .feedback-content {
    text-align: center;
    .kilo {
      color: $main-orange;
      margin-bottom: 20px;
      @media screen and (min-width: 768px) {
        font-size: 22px;
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .text4 {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 15px;
    }
    .text3 {
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (min-width: 768px) {
        width: 90%;
        display: block;
        margin: 0 auto;
      }
    }
  }

  //.photo {
  //  margin-right: 10px;
  //  margin-left: 20px;
  //  @media screen and (min-width: 768px) {
  //    height: 180px;
  //    margin-right: 30px;
  //    margin-left: 0;
  //  }
  //}
  //.subtext {
  //  color: white;
  //  margin-top: 5px;
  //  font-size: 12px;
  //  font-weight: 300;
  //  line-height: 18px;
  //  letter-spacing: 0em;
  //  @media screen and (min-width: 1440px) {
  //    font-size: 15px;
  //    font-weight: 300;
  //    line-height: 22px;
  //    letter-spacing: 0em;
  //    margin-top: 3px;
  //  }
  //}
  //.feedback-content {
  //  width: 91%;
  //  display: flex;
  //  flex-direction: column;
  //  align-items: flex-start;
  //  justify-content: space-between;
  //  height: 100%;
  //  padding: 25px 0 25px 30px;
  //  @media screen and (min-width: 1440px) {
  //  }
  //  .name {
  //    font-family: Outfit;
  //    font-size: 15px;
  //    font-weight: 500;
  //    line-height: 19px;
  //    letter-spacing: 0em;
  //    text-align: left;
  //    color: white;
  //    @media screen and (min-width: 1440px) {
  //      font-size: 24px;
  //      font-weight: 500;
  //      line-height: 30px;
  //      letter-spacing: 0em;
  //    }
  //  }
  //}
}
</style>
