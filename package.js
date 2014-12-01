Package.describe({
  name: 'flowkey:web-midi-api-shim',
  summary: 'Polyfill packaged for Meteor using the Jazz NPAPI MIDI plugin to implement the Web MIDI API on Mac, Linux and Windows.',
  version: '1.0.0',
  git: 'https://github.com/cwilso/WebMIDIAPIShim'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([], 'client');

  api.addFiles(['WebMIDIAPI.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flowkey:web-midi-api-shim');
});
