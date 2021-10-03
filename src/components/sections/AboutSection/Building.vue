<template>
  <AboutCard icon="building_icon.png" title="Build">
    <p>"to form by ordering and uniting materials into a composite whole"</p>
    <p>
      Ever since my childhood days of jigsaws and legos, I've always enjoyed
      seeing small, intricate details coalesce into a cohesive, functioning
      whole. My passion for computer science begins with my proclivity to
      create.
    </p>
    <ul>
      <li>
        Python -- I built the backend for WhatsForDinner with Python/Flask, and
        developed automation/analysis tools for my summer 2020 research with
        Python/Numpy. Python is is my go-to language for rapid-prototyping when
        performance is not a concern.
      </li>
      <li>
        JS/Vue -- All of my personal web-based projects have been constructed
        using Vue/React, though I've found the former to be more intuitive as of
        late.
      </li>
      <li>
        Java -- Java was the first language I properly learned during my
        education at Stony Brook. I used it to develop a small Android app at
        SBUHacks 2018, as well as countless class projects.
      </li>
      <li>
        Linux -- I'm one of those kids who used to run Arch without a Desktop
        Environment, so I'd like to think I have a somewhat comprehensive
        knowledge of UNIX systems. Nowadays, I stick to Linux VMs (both local
        and cloud-based) for my computing needs.
      </li>
    </ul>
  </AboutCard>
</template>

<script>
import AboutCard from "./AboutCard.vue";
export default {
  name: "Building",
  components: {
    AboutCard,
  },
};
</script>