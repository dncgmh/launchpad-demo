<template>
  <div>
    <section class="rounded-xl p-4 page-pos bg-secondary">
      <p class="border-b-2 border-fuchsia-600 inline-block font-bold text-3xl mb-3">Upcoming Projects</p>
      <upcoming-projects :projects="upcomingProjects" />
    </section>
    <section class="rounded-xl mt-10 p-4 page-pos bg-secondary">
      <p class="border-b-2 border-fuchsia-600 inline-block font-bold text-3xl mb-3">Raised Projects</p>
      <raised-projects :projects="raisedProjects" />
    </section>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import RaisedProjects from '../components/RaisedProjects.vue';
import UpcomingProject from '../components/UpcomingProjects.vue';
import { getProjects } from '../provider/firebase';
import UpcomingProjects from '../components/UpcomingProjects.vue';

export default defineComponent({
  components: {
    RaisedProjects,
    UpcomingProject,
    UpcomingProjects
  },
  setup() {
    const { projects } = getProjects();
    const upcomingProjects = computed(() =>
      projects.filter((p) => new Date() < new Date(p.schedule.participationCloseDate))
    );
    const raisedProjects = computed(() =>
      projects.filter((p) => new Date() >= new Date(p.schedule.participationCloseDate))
    );
    return { upcomingProjects, raisedProjects };
  }
});
</script>

<style lang="postcss">
code {
  @apply bg-slate-800 px-2 mx-2;
}
</style>
