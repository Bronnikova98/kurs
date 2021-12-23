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

        <v-card>
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
          </li></v-card
        >
      </ul>
    </div>
    <div class="banner_carousel">
      <VueSlickCarousel
        :slidesToShow="1"
        :dots="true"
        :arrows="true"
        :infinite="true"
        :autoplay="true"
        :autoplaySpeed="3000"
        :pauseOnDotsHover="true"
        :centerMode="true"
        :variableWidth="true"
      >
        <div>
          <img class="banner_carousel_img" src="@/assets/фото3.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото1.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото2.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото3.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото1.jpg" />
        </div>
      </VueSlickCarousel>
    </div>
    <v-container class="welcome">
      <v-row
        ><v-col
          ><p class="welcome_title">
            Мои фотографии запечатлевают те драгоценные моменты, которые
            запечатлевает сердце, ту атмосферу, которую сердце помнит спустя
            десятилетия...
          </p></v-col
        ></v-row
      >
      <v-row
        ><v-col cols="12" xl="4" lg="4" md="4" sm="4"
          ><div>
            <img class="welcome_image" src="@/assets/фото4.jpg" /></div></v-col
        ><v-col cols="12" xl="7" lg="7" md="7" sm="7"
          ><p class="welcome_text">
            Здравствуйте! Меня зовут Виктория Бронникова, я - профессиональный
            фотограф, уже 10 лет фотографирую для Вас
          </p></v-col
        ></v-row
      >
    </v-container>
    <div class="welcome_request">
      <v-row
        ><v-col
          ><p class="welcome_title">
            Напишите мне, и мы воплотим ваши идеи в реальность
          </p></v-col
        ></v-row
      >
      <v-row
        ><v-col
          ><p class="welcome_text_form">
            Заполните форму для записи, чтобы наша встреча состоялась
          </p></v-col
        ></v-row
      >
      <div class="welcome_form_input">
        <input class="text welcome_input" placeholder="Имя" />
      </div>
      <div class="welcome_form_input">
        <input class="text welcome_input" placeholder="Email" />
      </div>
      <div class="welcome_form_input">
        <input
          class="text welcome_input_massage"
          placeholder="Сообщение для меня"
        />
      </div>
      <div class="welcome_form_button">
        <button class="welcome_form_button_send">Отправить</button>
      </div>
    </div>
    <div class="footer">
      <div class="footer_icon">
        <v-row>
          <img class="icon" src="@/assets/телефон.png" alt="" />

          <img class="icon" src="@/assets/вк.png" alt="" />

          <img class="icon" src="@/assets/инст.png" alt=""
        /></v-row>
      </div>
      <div class="footer_sign">
        <v-row
          ><v-col
            ><p class="footer_text">
              Открыта к сотрудничеству и предложениям
            </p></v-col
          ></v-row
        >
        <v-row
          ><v-col
            ><p class="footer_text">
              (с) Фотограф Бронникова Виктория. Нижний тагил
            </p></v-col
          ></v-row
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: { VueSlickCarousel },

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
  width: 100%;
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

.slick-slider {
  max-height: 400px;
}

.banner_carousel {
  padding-top: 20px;
}

.banner_carousel_img {
  max-width: auto;
  max-height: 400px;
  border: 4px solid #fff;
}

.welcome {
  padding-top: 60px;
}

.welcome_title {
  font-family: Raleway;
  font-size: 36px;
  text-align: center;
}
.welcome_image {
  display: block;
  margin: 0 auto;
  max-width: 100%;

  padding-left: 20px;
}
.welcome_text {
  font-family: Raleway;
  font-size: 24px;
  padding-left: 20px;
}
.welcome_text_form {
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
}

.welcome_request {
  padding-top: 60px;
  background-color: #f5ecff;
}
.welcome_form_input {
  padding-top: 20px;
}
.welcome_input {
  height: 60px;
  display: block;
  border-radius: 6px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-family: Raleway;
  border: 2px solid black;
  background-color: white;
  width: 40%;
  padding-left: 10px;
}

.welcome_input_massage {
  display: block;
  border-radius: 6px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-family: Raleway;
  border: 2px solid black;
  height: 200px;
  background-color: white;
  width: 40%;
  padding-bottom: 120px;
  padding-left: 10px;
}

.welcome_form_button {
  display: block;
  padding-top: 40px;
  padding-bottom: 60px;
}
.welcome_form_button_send {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  background-color: white;
  border-radius: 30px;
  font-size: 24px;
  font-family: Raleway;
  width: auto;
  padding: 10px;
}

.footer {
  display: block;
  padding-top: 60px;
}
.footer_icon {
  display: block;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
}
.icon {
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
}

.footer_text {
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
}
.footer_sign {
  padding-top: 40px;
  padding-bottom: 200px;
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
    background-color: rgb(240, 238, 238);
    padding: 10px;
  }

  .navigatoin_bar_icon_panel {
    display: block;
    float: right;
    padding-top: 10px;
    padding-right: 40px;
    padding-bottom: 10px;
  }

  .navigatoin_bar_icon_panel_items {
    list-style-type: none;
    text-align: left;
  }

  .navigatoin_bar_icon_panel_items a {
    text-decoration: none;
    color: black;
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

  .slick-slider {
    max-height: 300px;
  }

  .banner_carousel_img {
    max-width: auto;
    max-height: 300px;
    border: 3px solid #fff;
  }
}

@media screen and (max-width: 400px) {
  .slick-slider {
    max-height: 200px;
  }

  .banner_carousel_img {
    max-width: auto;
    max-height: 200px;
    border: 2px solid #fff;
  }
}
</style>
