<template>
  <div id="footer">
    <div class="border-bottom">
      <img src="../assets/img/cap.png" class="img" width="145" />
    </div>
    <img src="../assets/img/logo.svg" class="logo" width="34" />
    <p class="subtext">All rights reserved</p>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  background-color: $text-yellow;
  padding-bottom: 60px;
  .img {
    margin: -1px auto 36px auto;
    @media screen and (min-width: 768px) {
      width: 241px;
    }
  }
  .logo {
    margin: 50px auto 30px auto;
  }
  .border-bottom {
    padding-bottom: 36px;
    border-bottom: 1px solid white;
  }
  .subtext {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
}
</style>
