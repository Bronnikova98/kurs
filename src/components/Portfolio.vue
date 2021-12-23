<template>
  <div>
    <div class="brend">
      <router-link :to="'home'"
        ><v-img class="brend_logo" src="@/assets/Лого.png"
      /></router-link>
    </div>
    <div class="navigatoin">
      <ul class="navigatoin_bar">
        <li class="navigatoin_bar_image_left">
          <v-img
            class="navigatoin_bar_image_left_branch1"
            src="@/assets/ветвь.svg"
          />
        </li>
        <li class="navigatoin_bar_portfolio">
          <router-link :to="'portfolio'">Портфолио</router-link>
        </li>
        <li class="navigatoin_bar_delimiter">
          <v-container class="navigatoin_bar_delimiter_dot"
            ><v-img
              class="navigatoin_bar_delimiter_dot_circle"
              src="@/assets/круг.png"
          /></v-container>
        </li>
        <li class="navigatoin_bar_price">
          <router-link :to="'price'">Стоимость</router-link>
        </li>

        <li class="navigatoin_bar_about">
          <router-link :to="'about'">Обо мне</router-link>
        </li>
        <li class="navigatoin_bar_delimiter">
          <v-container class="navigatoin_bar_delimiter_dot"
            ><v-img
              class="navigatoin_bar_delimiter_dot_circle"
              src="@/assets/круг.png"
          /></v-container>
        </li>
        <li class="navigatoin_bar_contacts">
          <router-link :to="'contacts'">Контакты</router-link>
        </li>
        <li class="navigatoin_bar_image_right">
          <v-img
            class="navigatoin_bar_image_right_branch2"
            src="@/assets/ветвь.svg"
          />
        </li>
        <li class="navigatoin_bar_icon">
          <nav>
            <transition name="fade" mode="out-in">
              <i
                class="material-icons navigatoin_bar_icon_menu"
                v-if="!show"
                @click="show = !show"
                key="menu"
                >menu</i
              >
              <i
                class="material-icons navigatoin_bar_icon_clear"
                v-else
                @click="show = !show"
                key="clear"
                >clear</i
              >
            </transition>
            <transition name="fade"
              ><ul class="navigatoin_bar_icon_panel" v-if="show">
                <li
                  class="navigatoin_bar_icon_panel_items"
                  v-for="item in items"
                  :key="item"
                >
                  <a :href="item.path">{{ item.src }}</a>
                </li>
              </ul></transition
            >
          </nav>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",

  data: () => ({
    items: [
      { src: "Портфолио", path: "/portfolio" },
      { src: "Стоимость", path: "/price" },
      { src: "Обо мне", path: "/about" },
      { src: "Контакты", path: "/contacts" },
    ],

    show: false,
  }),
};
</script>



<style scoped>
.brend {
  padding-top: 0px;
}

.brend_logo {
  width: 130px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.navigatoin {
  margin: 0;
  width: 100%;
}
.navigatoin_bar {
  list-style-type: none;
  overflow: hidden;
  background-color: white;
  text-align: center;
}
.navigatoin_bar_image_right {
  display: inline-block;
}

.navigatoin_bar_image_left {
  display: inline-block;
}

.navigatoin_bar_portfolio {
  display: inline-block;
  vertical-align: top;
}

.navigatoin_bar_portfolio a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-right: 60px;
  padding-left: 60px;
}

.navigatoin_bar_delimiter {
  display: inline-block;
  vertical-align: top;
}

.navigatoin_bar_price {
  display: inline-block;
  vertical-align: top;
}

.navigatoin_bar_price a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-left: 60px;
  padding-right: 200px;
}

.navigatoin_bar_about {
  display: inline-block;
  vertical-align: top;
}

.navigatoin_bar_about a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-right: 85px;
}

.navigatoin_bar_contacts {
  display: inline-block;
  vertical-align: top;
}

.navigatoin_bar_contacts a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-left: 85px;
  padding-right: 60px;
}
.navigatoin_bar_image_left_branch1 {
  width: 40px;
}
.navigatoin_bar_image_right_branch2 {
  width: 40px;
  transform: scale(-1, 1);
}

.navigatoin_bar_delimiter_dot_circle {
  width: 6px;
}

.navigatoin_bar_delimiter_dot {
  display: table-cell;
}

@media screen and (min-width: 950px) {
  .navigatoin_bar_icon {
    display: none;
  }
}

@media screen and (max-width: 950px) {
  .navigatoin_bar_image_right {
    display: none;
  }

  .navigatoin_bar_image_left {
    display: none;
  }

  .navigatoin_bar_portfolio {
    display: none;
  }

  .navigatoin_bar_delimiter {
    display: none;
  }

  .navigatoin_bar_price {
    display: none;
  }
  .navigatoin_bar_about {
    display: none;
  }

  .navigatoin_bar_contacts {
    display: none;
  }

  .navigatoin_bar_image_left_branch1 {
    display: none;
  }
  .navigatoin_bar_image_right_branch2 {
    display: none;
  }

  .navigatoin_bar_delimiter_dot {
    display: none;
  }
  .navigatoin_bar_icon {
    float: left;
    list-style-type: none;
  }

  .navigatoin_bar_icon_panel {
    display: block;
    float: right;
  }

  .navigatoin_bar_icon_panel_items {
    list-style-type: none;
    text-align: left;
    color: black;
    text-decoration: none !important;
    font-size: 18px;
    font-family: Gothic A1;
  }
}

@media screen and (max-width: 1200px) {
  .navigatoin_bar_image_left_branch1 {
    display: none;
  }
  .navigatoin_bar_image_right_branch2 {
    display: none;
  }
}

@media screen and (max-width: 1000px) {
  .navigatoin_bar_delimiter_dot {
    display: none;
  }
}
</style>