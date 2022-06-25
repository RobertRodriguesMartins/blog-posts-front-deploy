function increment(payload) {
  return {
    type: 'button/increment',
    payload: {
      ...payload
    }
  }
}

export default increment;
