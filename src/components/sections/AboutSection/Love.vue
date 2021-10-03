<template>
  <AboutCard icon="love_icon.png" title="Love">
    <p>
      "an intense feeling of deep affection; a great interest and pleasure in
      something"
    </p>
    <p>Surprise, surprise, I'm not just a boring CS nerd!</p>
    <ul>
      <li>
        Space -- Planet Earth is just one small rock, floating through a vast,
        beautiful sea of stars, galaxies, and worlds which we have yet to
        explore. I'd love to be a part of that exploratory process someday.
      </li>
      <li>
        Music -- Singing while playing piano or guitar is my go-to destressing
        activity. Current favorites: Teleprompter (EMIA) and Grace (Laura
        Story).
      </li>
      <li>
        Cooking -- I love food (who doesn't?), and make most of my meals at
        home. Current favorites: stir-fry napa cabbage and korean egg rolls.
      </li>
    </ul>
  </AboutCard>
</template>

<script>
import AboutCard from "./AboutCard.vue";
export default {
  name: "Love",
  components: {
    AboutCard,
  },
};
</script>