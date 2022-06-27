import * as log from 'https://deno.land/std/log/mod.ts'

export async function getDefaultLogger() {
  await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler('DEBUG', { formatter: '{msg}' })
    },
    loggers: {
      default: {
        level: 'DEBUG',
        handlers: ['console']
      }
    }
  })
  return log.getLogger()
}

class TestHandler extends log.handlers.BaseHandler {
  public messages: string[] = []

  public log(str: string): void {
    this.messages.push(str)
  }
}

export async function getTestLogger() {
  const handler = new TestHandler('DEBUG', { formatter: '{msg}' })

  await log.setup({
    handlers: {
      test: handler
    },
    loggers: {
      default: {
        level: 'DEBUG',
        handlers: ['test']
      }
    }
  })
  return { logger: log.getLogger(), handler }
}
