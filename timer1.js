function timer() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Please specify at least one alarm time in seconds");
    return;
  }
  
  args.forEach(arg => {
    const alarmTime = parseInt(arg);
    if (isNaN(alarmTime)) {
      console.log(`Invalid argument: ${arg}`);
      return;
    }

    setTimeout(() => {
      process.stdout.write('\x07'); // Beep sound
    }, alarmTime * 1000);
  });
}
timer();