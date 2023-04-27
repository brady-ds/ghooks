require('./setup')()

describe('hook.template', () => {
  const generatedMessage = require('../lib/message.template').generatedMessage
  const template = require('../lib/hook.template')

  it('replaces the {{generated_message}} token', () => {
    expect(template.content).to.match(new RegExp(generatedMessage))
  })

})
