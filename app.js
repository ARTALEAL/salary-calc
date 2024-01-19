const app = Vue.createApp({
  data() {
    return {
      minutes: null,
      rate: null,
      salary: null,
    };
  },
  methods: {
    submit() {
      this.salary = ((this.minutes / 60) * this.rate).toFixed(2);
    },
  },
});
