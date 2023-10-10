<template>
  <div class="full">
    <div id="about" class="container">
      <div class="au-content">
        <div class="au-text">
          <h5 class="subtext mb-desk">
          </h5>
          <h4 class="text">
          </h4>
        </div>
        <div class="imgs-container desktop">
          <img
            src="@/assets/compass.png"
            alt="compass"
            class="compass"
            width="200"
          />
          <img
            src="@/assets/boat.png"
            alt="compass"
            class="boat"
            width="320"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const servicesFor = [
  {
    icon: require("@/assets/icons/yacht.svg"),
    name: "Yachts and Mega Yachts",
    id: 1,
  },
  {
    icon: require("@/assets/icons/cruise.svg"),
    name: "Cruise ships",
    id: 2,
  },
  { icon: require("@/assets/icons/tugboat.svg"), name: "Tugs", id: 3 },
  {
    icon: require("@/assets/icons/commercialVessel.svg"),
    name: "Commercial vessels",
    id: 4,
  },
];
</script>
<style lang="scss" scoped>
#about {
  margin: 120px auto;
  @media screen and (min-width: 1440px) {
    margin-top: 236px;
  }
  .h2 {
    position: relative;
    padding-left: 12px;
    margin-bottom: 32px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 30px;
    }
  }

  .h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 36px;
    background-color: $main-blue;
    transition: all 1s;
  }
  .full {
    position: relative;
  }
  .mb-desk {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .mb {
    margin-bottom: 20px;
  }
  .servicesForList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

    li {
      width: 44%;
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        width: 20%;
        margin-bottom: 0;
      }

      img {
        margin: 0 auto;
        @media screen and (min-width: 390px) {
          width: 60px;
        }
        @media screen and (min-width: 768px) {
          width: 50px;
          margin-bottom: 15px;
        }
      }

      .h4 {
        text-align: center;
      }
    }

    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      width: 68%;
    }
    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  .servicesForList li:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }

  .servicesForList li:first-child {
    @media screen and (min-width: 768px) {
      order: 1;
    }
  }

  .servicesForList li:nth-child(2) {
    @media screen and (min-width: 768px) {
      order: 2;
    }
  }

  .servicesForList li:nth-child(3) {
    @media screen and (min-width: 768px) {
      order: 4;
    }
  }

  .servicesForList li:nth-child(4) {
    @media screen and (min-width: 768px) {
      order: 3;
    }
  }
  .imgs-container {
    @media screen and (min-width: 1440px) {
      position: absolute;
      right: 0;
      .compass {
        position: absolute;
        top: -120px;
        left: -100px;
      }
    }
  }
  .servicesFor.container {
    @media screen and (min-width: 1440px) {
      width: 100%;
      margin-top: 45px;
    }
  }
  .au-content {
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }
  .au-text {
    @media screen and (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      width: 48%;
    }
    @media screen and (min-width: 1920px) {
      width: 75%;
    }
  }
}
</style>
