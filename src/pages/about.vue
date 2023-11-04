<template>
  <MyMainVisual class="mainvisual">
    <template v-slot:title>
      <kinesis-element tag="span" :strength="10" type="depth">
        A
      </kinesis-element>
      <kinesis-element tag="span" :strength="3"> b </kinesis-element>
      <kinesis-element tag="span" :strength="20" type="rotate">
        o
      </kinesis-element>
      <kinesis-element tag="span" :strength="10" type="depth_inv">
        u
      </kinesis-element>
      <kinesis-element tag="span" :strength="10" type="depth">
        t
      </kinesis-element>
    </template>
    <template v-slot:supplement>
      <kinesis-element tag="p" :strength="5" type="rotate">
        Many things about myself.
      </kinesis-element>
    </template>
  </MyMainVisual>
  <MySection heading="Profile">
    <img src="../assets/profile.jpg" class="profile__image" />
    <div class="profile__textbox">
      <p class="profile__name">志村 美幸 / Miyuki Shimura</p>
      <div class="profile__information">
        <p>出身 : 埼玉県</p>
        <p>誕生日 : 1998/01/10</p>
      </div>
      <div class="profile__information">
        <p>趣味 : ゲーム / ラーメンを食べること / 細かい作業をすること</p>
      </div>
    </div>
  </MySection>
  <MySection heading="Skills">
    <MySkillLabel text="HTML" />
    <MySkillLabel text="CSS" />
    <MySkillLabel text="JavaScript" />
    <MySkillLabel text="jQuery" />
    <MySkillLabel text="Vue.js" />
    <MySkillLabel text="Nuxt.js" />
    <MySkillLabel text="Vuetify" />
    <MySkillLabel text="Firebase" />
    <MySkillLabel text="Git" />
  </MySection>
</template>
<script>
import MyTitleText from "../components/atoms/Texts/TitleText.vue";
import MySkillLabel from "../components/atoms/Labels/SmallLabel.vue";
import MySection from "../components/molecules/TheSection.vue";
import MyMainVisual from "../components/organisms/MainVisual.vue";

export default {
  components: {
    MyTitleText,
    MySkillLabel,
    MySection,
    MyMainVisual,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.mainvisual {
  & span {
    display: inline-block;
    letter-spacing: 1vw;
  }
}

.profile {
  &__image {
    width: 300px;
    border-radius: 5px;
  }
  &__textbox {
    position: relative;
    margin-left: 60px;
    padding: 40px;
    background: none;
    border: 1px solid #000;
    &:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 20px;
      width: 100%;
      height: 100%;
      background-color: $theme-color;
      border: none;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.3) 50%,
          transparent 50%
        ),
        linear-gradient(rgba(255, 255, 255, 0.3) 50%, transparent 50%);
      background-size: 30px 30px;
      opacity: 0.5;
      z-index: -1;
    }
  }
  &__name {
    font-size: 20px;
    font-weight: 300;
  }
  &__information {
    margin-top: 20px;
  }
}
</style>
