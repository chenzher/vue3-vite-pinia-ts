import router from '@/router';

router.beforeEach(async (to, from, next) => {
  console.log('toto===', to);
  console.log('from===', from);
  next();
});
