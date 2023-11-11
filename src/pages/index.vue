<template>
  <MyMainVisualText id="top" />

  <MySection id="about" sectionName="About">
    <MyTitleText titleName="Profile" />
    <div class="profile section__item">
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
    <MyTitleText titleName="Skills" class="section__title" />
    <ul class="skills section__item">
      <li v-for="(skill, key) in skills" :key="key" class="skills__item">
        <MySkillLabel :text="skill" />
      </li>
    </ul>
    <MyTitleText titleName="Links" class="section__title" />
    <ul class="section__item">
      <li v-for="(linkItem, key) in linkItems" :key="key" class="links__item">
        <MyLinkIcon :linkItem="linkItem" />
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
import MyLinkIcon from "../components/atoms/Links/LinkIcon.vue";
import MySection from "../components/molecules/TheSection.vue";
import MyWorkCard from "../components/molecules/WorkCard.vue";
import MyBackgroundCircle from "../components/organisms/BackgroundCircle.vue";

export default {
  components: {
    MyMainVisualText,
    MyTitleText,
    MySkillLabel,
    MyLinkIcon,
    MySection,
    MyWorkCard,
    MyBackgroundCircle,
  },
  data() {
    return {
      workItems: [
        {
          projectName: "hojicya's portfolio",
          image: "portfolio.png",
          desc:
            "Vue.jsを使用したこのポートフォリオサイトです。\n友人から見た自分のイメージカラーを聞き、水色と白が基調のシンプルなデザインにしました。\n完成形ではなく、デザインの見直しや、まだまだ追加したいものがたくさんあるので随時アップデートしています。",
          skills: "HTML / CSS / Vue.js / Kinesis",
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
      linkItems: [
        {
          text: "Github",
          href: "https://github.com/hojicya",
          image: "icon-github.svg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.section {
  &__item {
    margin-top: 2rem;
  }
  &__title {
    @include tab {
      margin-top: 8rem;
    }
    @include sp {
      margin-top: 4rem;
    }
  }
}

.profile {
  @include tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    border-radius: 5px;
    @include tab {
      width: 25rem;
    }
    @include sp {
      width: 12rem;
    }
  }
  &__textbox {
    position: relative;
    border: 1px solid $black;
    @include tab {
      width: 60rem;
      margin-left: 4rem;
      padding: 4rem;
    }
    @include sp {
      width: 100%;
      margin-top: 1rem;
      padding: 2rem;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $light-blue;
      border: none;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.3) 50%,
          transparent 50%
        ),
        linear-gradient(rgba(255, 255, 255, 0.3) 50%, transparent 50%);
      background-size: 3rem 3rem;
      opacity: 0.5;
      z-index: -1;
      @include tab {
        top: 1.5rem;
        left: 2rem;
      }
      @include sp {
        top: 0.75rem;
        left: 1rem;
      }
    }
  }
  &__name {
    font-weight: 300;
    @include tab {
      font-size: 2rem;
    }
    @include sp {
      font-size: 1.4rem;
    }
  }
  &__information {
    @include tab {
      margin-top: 2rem;
    }
    @include sp {
      margin-top: 1rem;
    }
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  &__item {
    @include tab {
      margin-right: 1rem;
    }
    @include sp {
      margin-right: 1rem;
    }
  }
}

.links {
  display: flex;
  flex-direction: column;
  &__item {
    display: inline-block;
    + .links__item {
      margin-top: 1rem;
    }
  }
}

.works {
  width: 100%;
  @include tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2rem;
  }
  &__item {
    @include tab {
      width: calc(100% / 2 - 2rem);
      cursor: pointer;
    }
    @include sp {
      width: 100%;
      + .works__item {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
