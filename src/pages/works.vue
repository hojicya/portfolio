<template>
  <MyMainVisual class="mainvisual">
    <template v-slot:title>
      <kinesis-element tag="span" :strength="10" type="depth">
        W
      </kinesis-element>
      <kinesis-element tag="span" :strength="3"> o </kinesis-element>
      <kinesis-element tag="span" :strength="20" type="rotate">
        r
      </kinesis-element>
      <kinesis-element tag="span" :strength="10" type="depth_inv">
        k
      </kinesis-element>
      <kinesis-element tag="span" :strength="10" type="depth">
        s
      </kinesis-element>
    </template>
    <template v-slot:supplement>
      <kinesis-element tag="p" :strength="5" type="rotate">
        Many things about myself.
      </kinesis-element>
    </template>
  </MyMainVisual>
  <MySection>
    <ul class="works">
      <li v-for="(workItem, key) in workItems" :key="key" class="works__item">
        <MyWorkCard :workItem="workItem" />
      </li>
    </ul>
  </MySection>
</template>

<script>
import MySection from "../components/molecules/TheSection.vue";
import MyWorkCard from "../components/molecules/WorkCard.vue";
import MyMainVisual from "../components/organisms/MainVisual.vue";

export default {
  components: {
    MySection,
    MyWorkCard,
    MyMainVisual,
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
    };
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

.works {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  width: 100%;
  &__item {
    width: calc(100% / 2 - 20px);
    cursor: pointer;
  }
}
</style>
