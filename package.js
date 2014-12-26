Package.describe({
  git: 'https://github.com/gliesesoftware/meteor-cfs-worker.git',
  name: 'gliese:cfs-worker',
  version: '0.1.5',
  summary: 'Gliese flavor of CollectionFS, file worker - handles file copies/versions (INTERNAL USE ONLY)'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'gliese:cfs-base@0.0.28',
    'gliese:cfs-tempstore@0.1.4',
    'gliese:cfs-storage@0.1.2'
  ]);

  api.use([
    'livedata',
    'mongo-livedata',
    'cfs:power-queue@0.9.11'
  ]);

  api.addFiles([
    'fileWorker.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('cfs:standard-packages@0.0.0');

//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict', 'random']);

//   api.addFiles('tests/client-tests.js', 'client');
//   api.addFiles('tests/server-tests.js', 'server');
// });
