<template>
  <MyMainVisualText id="top" />

  <MySection id="about" sectionName="About">
    <MyTitleText titleName="Profile" />
    <div class="profile">
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
    </div>
    <MyTitleText titleName="Skills" class="skills__title" />
    <ul class="skills">
      <li v-for="(skill, key) in skills" :key="key" class="skills__item">
        <MySkillLabel :text="skill" />
      </li>
    </ul>
  </MySection>

  <MySection id="works" sectionName="Works">
    <ul class="works">
      <li v-for="(workItem, key) in workItems" :key="key" class="works__item">
        <MyWorkCard :workItem="workItem" />
      </li>
    </ul>
  </MySection>

  <MyBackgroundCircle />
</template>
<script>
import MyMainVisualText from "../components/atoms/Texts/MainVisualText.vue";
import MyTitleText from "../components/atoms/Texts/TitleText.vue";
import MySkillLabel from "../components/atoms/Labels/SmallLabel.vue";
import MySection from "../components/molecules/TheSection.vue";
import MyWorkCard from "../components/molecules/WorkCard.vue";
import MyBackgroundCircle from "../components/organisms/BackgroundCircle.vue";

export default {
  components: {
    MyMainVisualText,
    MyTitleText,
    MySkillLabel,
    MySection,
    MyWorkCard,
    MyBackgroundCircle,
  },
  data() {
    return {
      workItems: [
        {
          projectName: "hojicya's portfolio",
          image: "src/assets/portfolio.png",
          desc:
            "Vue.jsを使用したこのポートフォリオサイトです。\n友人から見た自分のイメージカラーを聞き、水色と白が基調のシンプルなデザインにしました。\n完成形ではなく、デザインの見直しや、まだまだ追加したいものがたくさんあるので随時アップデートしています。",
          skills: "HTML / CSS / Vue.js / kinesis",
        },
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Vue.js",
        "Nuxt.js",
        "Vuetify",
        "Firebase",
        "Git",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  &__image {
    max-width: 300px;
    width: 30vw;
    border-radius: 5px;
  }
  &__textbox {
    position: relative;
    width: 550px;
    margin-left: 40px;
    padding: 40px;
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

.skills {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  &__title {
    margin-top: 80px;
  }
  &__item {
    margin-right: 10px;
  }
}

.works {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  &__item {
    width: calc(100% / 2 - 20px);
    cursor: pointer;
  }
}
</style>
