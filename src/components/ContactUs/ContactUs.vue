<template>
  <div class="gen">
    <div id="contact">
      <div class="container">
        <h2 class="h3">Date prisa para pedir a un precio promocional</h2>
        <p class="text5">
          Date prisa para comprar "Fast Slim" con descuento y comienza tu viaje
          hacia el cuerpo de tus sueños
        </p>
        <form>
          <InputBase
            label="Nombre"
            :value="name"
            type="text"
            @inputValue="nameDetect"
            rules="required"
          />
          <InputBase
            label="Número telefónico"
            type="number"
            length="18"
            :value="phoneNumber"
            @inputValue="phoneNumberDetect"
            rules="required|length"
          />
          <input
            class="btn"
            type="submit"
            :class="{
              disabled: phoneNumber.length === 0 || name.length === 0,
            }"
            value="Compar"
            @click="sendData"
            :disabled="phoneNumber.length === 0 || name.length === 0"
          />
        </form>
      </div>
    </div>
    <div class="border-bottom">
      <img src="@/assets/img/cap.png" class="img" width="145" />
    </div>
    <div class="footer">
      <img src="@/assets/img/logo.svg" class="logo" width="34" />
      <p class="subtext">All rights reserved</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phoneNumber = ref("");
const message = ref("");
import { event } from "vue-gtag";
const nameDetect = function (value) {
  name.value = value;
};
const phoneNumberDetect = function (value) {
  phoneNumber.value = value;
};

const sendData = function () {
  event("formSent", { method: "Google" });
};
</script>

<style scoped lang="scss">
.border-bottom {
  margin-top: 90px;
  padding-bottom: 60px;
  border-bottom: 1px solid white;
  width: 100%;
  img {
    display: block;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 241px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
    border-bottom: 0;
    display: flex;
    align-items: center;
  }
}
.gen {
  background-color: $text-yellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    padding: 60px 0 80px 0;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
}

.footer {
  width: 100%;
  .img {
    margin-top: 90px;
    @media screen and (min-width: 768px) {
      width: 241px;
    }
  }
  .logo {
    margin: 50px auto 30px auto;
    @media screen and (min-width: 1440px) {
      margin: 20px auto;
    }
  }
  @media screen and (min-width: 768px) {
    border-top: 1px solid white;
  }

  .subtext {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
    @media screen and (min-width: 1440px) {
      margin-bottom: 20px;
    }
  }
}
.h3 {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.logo {
  display: block;
  width: 34px;
  margin: 0 auto;
}
.subtext {
  margin-bottom: 69px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
    margin-bottom: 50px;
  }
}
.text5 {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 70px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }
}
.subContent-item {
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 10px;
    }
  }
}
ul .subContent-item:last-child {
  margin-bottom: 0;
}
.btn {
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    display: block;
  }
}
#contact {
  padding-top: 60px;
  background-color: $text-yellow;
  .container {
    @media screen and (min-width: 768px) {
      width: 57.6%;
    }
  }

  .item-link {
    @media screen and (min-width: 1440px) {
      font-size: 15px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: black;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    padding-top: 0;
    display: flex;
    justify-content: space-between;
  }
  .info {
    @media screen and (min-width: 1440px) {
      width: 43%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .info-container {
      @media screen and (min-width: 1440px) {
        max-width: 100%;
      }
    }
  }
  form {
    @media screen and (min-width: 1440px) {
      width: 100%;
    }
    .btn {
      margin: 60px auto 0 auto;
      @media screen and (min-width: 768px) {
        margin: 80px auto 0 auto;
      }
      @media screen and (min-width: 1440px) {
        margin: 90px auto 90px 0;
      }
    }
  }
}
.disabled {
  opacity: 0.5;
}
</style>
<script>
import InputBase from "@/components/base/InputBase";
export default {
  components: { InputBase },
};
</script>
