import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions(),
  integrityOptions: {
    ignore: '/node_modules/**/*',
  },
});
