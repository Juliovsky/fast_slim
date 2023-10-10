<template>
  <nav class="navigation container">
    <img src="@/assets/img/logo.svg" class="logo tablet mobile" width="20" />

    <div class="nav">
      <ul class="nav-list">
        <li
          v-for="navItem in navigationList"
          :key="navItem.name"
          class="navLink"
        >
          <div v-if="navItem.isIcon">
            <img src="../../../assets/img/logo.svg" class="logo" width="20" />
          </div>

          <a :href="navItem.href" class="subtext" v-smooth-scroll v-else>{{
            navItem.name
          }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const navigationList = [
  { name: "Ingredientes", href: "#ingredients" },
  { name: "CÓMO FUNCIONA", href: "#funciona" },
  { name: "#", href: "/", isIcon: true },
  { name: "Eficiencia", href: "#article" },
  {
    name: "Comentarios",
    href: "#feedbacks",
  },
];
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 40px;
  .navLink a {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 600;
    line-height: normal;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
}
.navigation {
  @media screen and (min-width: 1440px) {
  }
}
</style>
