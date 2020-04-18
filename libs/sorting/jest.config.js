module.exports = {
  name: 'sorting',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sorting',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
