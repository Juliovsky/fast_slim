<template>
  <div id="article">
    <div class="container">
      <h3 class="h2">Los expertos confirman la eficacia de "Fast Slim"</h3>
      <p class="text5">
        Como nutricionista, me gustaría abordar los efectos positivos del
        suplemento dietético "Fast Slim" en la pérdida de peso y su seguridad
        para la salud del estómago. Se han realizado extensos estudios clínicos
        que confirman la eficacia y seguridad de este suplemento para apoyar los
        esfuerzos de pérdida de peso.
      </p>
      <p class="text5">
        Fast Slim se fabrica en instalaciones aprobadas por la FDA, lo que
        garantiza el cumplimiento de estrictas medidas de control de calidad. El
        proceso de producción sigue las pautas de Buenas Prácticas de
        Manufactura (GMP), que abarcan pruebas rigurosas, garantía de calidad y
        estandarización. Estas medidas garantizan que el suplemento sea seguro,
        potente y libre de contaminantes, cumpliendo con los más altos
        estándares de la industria.
      </p>
      <div class="author">
        <span class="text4">Valentina Gabriela Rodríguez</span>
        <p class="text5">Dietista-nutricionista</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#article {
  background-image: url("../../assets/img/ladyBg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 70px 0;
  @media screen and (min-width: 768px) {
    margin-top: 120px;
    padding: 120px 0;
    background-image: url("../../assets/img/tabbgWonam.png");
    height: 853px;
  }
  @media screen and (min-width: 1440px) {
    padding: 200px 654px 252px 165px;
    background-image: url("../../assets/img/lady.png");
    height: 1060px;
  }

  .container {
    width: 79%;
    @media screen and (min-width: 1440px) {
      width: 94%;
    }
  }
  .h2 {
    margin-bottom: 55px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 50px;
    }
  }
  .text5 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 50px;
    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
      width: 89.1%;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 0px;
    }
  }

  .author {
    margin-top: 80px;
    .text4 {
      color: #000;
      font-size: 20px;
      font-style: normal;
      margin-bottom: 5px;
      font-weight: 500;
      line-height: normal;
    }
    .text5 {
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
