module.exports = function(app) {
  return {
    id: 'signalk-plugin-onwatch-ui',
    name: 'OnWatch UI: Red Seas Interface',
    description: 'Sailing made smarter with OnWatch from Red Seas',

    start: function(options) {
      app.debug('Starting OnWatch UI Plugin...');
    },

    stop: function() {
      app.debug('Stopping OnWatch UI Plugin...');
    },

    schema: {
      title: "OnWatch UI Configuration",
      type: "object",
      properties: {
        enableFeature: {
          type: "boolean",
          title: "Enable Advanced Features",
          default: false
        }
      }
    },

    uiSchema: {
      enableFeature: {
        "ui:widget": "checkbox"
      }
    }
  };
};
