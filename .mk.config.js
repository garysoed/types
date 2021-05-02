declare({
  name: 'link',
  as: single({
    bin: 'npm',
    flags: ['link', 'gs-testing', 'devbase', 'dev', 'moirai'],
  }),
});