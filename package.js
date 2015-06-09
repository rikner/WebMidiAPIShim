Package.describe({
  name: 'flowkey:web-midi-api-shim',
  summary: 'Polyfill for Web MIDI API using the Jazz NPAPI MIDI.',
  version: '1.0.1',
  git: 'https://github.com/rikner/WebMidiAPIShim.git'
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
