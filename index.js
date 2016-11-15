const responseTime = cb =>

  req => {

    const startAt = process.hrtime();

    req.on('end', () => {

      const diff = process.hrtime(startAt);
      const time = diff[0] * 1e3 + diff[1] * 1e-6;

      cb(req, time);

    });
  };

export default responseTime;
