type Logger = (
  userName: string,
  numberToLogOrMessage: string | number,
  message?: string,
) => void;

const logger: Logger = (userName, numberToLogOrMessage, message?) => {
  if (typeof numberToLogOrMessage === 'number') {
    console.log(`user:${userName}, thing:${numberToLogOrMessage}`);
  } else {
    console.log(`user:${userName}, ${message}:${numberToLogOrMessage}`);
  }
};

logger('Jim', 'I expect my error to be here');
logger('Alex', 42, 'the meaning');
