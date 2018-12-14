const { App } = require('jovo-framework');
const enUs = require('./i18n/en-US');

// language resources
const languageResources = {
  'en-US': enUs,
};

// application config
const config = {
  i18n: {
    resources: languageResources,
  },
  logging: true,
};

const app = new App(config);
app.setLanguageResources(languageResources);

app.setHandler({
  LAUNCH() {
    this.toIntent('LaunchIntent');
  },
  LaunchIntent() {
    this.ask(this.t('FIRST_MESSAGE'));
  },
  TurnOnIntent() {
    this.tell(this.t('TURN_ON'));
  },
  TurnOffIntent() {
    this.tell(this.t('TURN_OFF'));
  },
  MuteIntent() {
    this.tell(this.t('MUTE'));
  },
  UnMuteIntent() {
    this.tell(this.t('UNMUTE'));
  },
});

module.exports.app = app;
