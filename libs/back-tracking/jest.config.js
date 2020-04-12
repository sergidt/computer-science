module.exports = {
  name: 'back-tracking',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/back-tracking',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
